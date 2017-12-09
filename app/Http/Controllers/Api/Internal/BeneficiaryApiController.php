<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/1/16
 * Time: 6:48 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use Carbon\Carbon;
use clocking\Beneficiary;
use clocking\Fingerprint;
use clocking\Form;
use clocking\Http\Controllers\Controller;
use clocking\Jobs\AddNewBeneficiary;
use clocking\Jobs\TestJob;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Repositories\FormRepository;
use Eureka\Transformers\Internal\BeneficiaryCollectionTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection as FractalCollection;
use League\Fractal\Resource\Item;

class BeneficiaryApiController extends Controller
{
    /**
     * @var BeneficiaryRepository
     */
    private $beneficiaryRepository;
    /**
     * @var Manager
     */
    private $manager;
    /**
     * @var FormRepository
     */
    private $formRepository;

    /**
     * BeneficiaryApiController constructor.
     * @param BeneficiaryRepository $beneficiaryRepository
     * @param Manager $manager
     * @param FormRepository $formRepository
     */
    public function __construct(BeneficiaryRepository $beneficiaryRepository, Manager $manager, FormRepository $formRepository)
    {
        $this->beneficiaryRepository = $beneficiaryRepository;
        $this->manager = $manager;
        $this->formRepository = $formRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function all(Request $request)
    {
        $data = $this->beneficiaryRepository->get_all_paginated($request);
        $transformed = $this->manager
            ->createData(new FractalCollection($data, new BeneficiaryCollectionTransformer(true)))
            ->toArray();
        $data = collect($data)->toArray();
        $data["data"] = $transformed["data"];
        return response()->json($data);
    }

    /**
     * @param Request $request
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function add(Request $request)
    {
        $data = $this->prepare_data($request);
        $job = new AddNewBeneficiary(collect($data), auth()->user()->uuid, false);
        dispatch($job);
        return response()->json([
            "status" => "ok"
        ])->setStatusCode(200);
    }

    /**
     * @param $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function single($uuid)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($uuid);
        $data = $this->manager
            ->createData(new Item($beneficiary, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
        return response()->json($data["data"]);
    }

    /**
     * @param $uuid
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($uuid, Request $request)
    {
        if($request->get('type') == 'complete'){
            $data = $this->prepare_update_data($request, $uuid);
            $job = new AddNewBeneficiary(collect($data), auth()->user()->uuid, true);
            $this->dispatch($job);
            return response()->json(['status' => 'ok'])->setStatusCode(200);
        }
        $data = $this->format_gender(collect($request->all()));
        $data = $this->format_full_name($data);
        $data = $this->parse_date($data);
        $updated = $this->beneficiaryRepository->update($uuid, $data);
        $updated = $this->manager->createData(new Item($updated, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
        return response()->json($updated["data"])->setStatusCode(200);
    }

    /**
     * @param $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function deactivate($uuid)
    {
        $updated = $this->beneficiaryRepository->deactivate($uuid);
        $updated = $this->manager->createData(new Item($updated, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
        return response()->json($updated["data"]);
    }

    /**
     * @param $uuid
     * @return \Illuminate\Http\JsonResponse
     */
    public function activate($uuid)
    {
        $updated = $this->beneficiaryRepository->activate($uuid);
        $updated = $this->manager->createData(new Item($updated, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
        return response()->json($updated["data"]);
    }

    /**
     * @param Request $request
     * @param $uuid
     */
    private function save_fingerprints_encoded(Request $request, $uuid)
    {
        $this->beneficiaryRepository->get_by_uuid($uuid)
            ->fingerprints()->saveMany($this->prepareFingers($request));
    }

    /**
     * @param Request $request
     * @return string
     */
    private function create_beneficiary(Request $request)
    {
        $uuid = CodeGenerator::uuid();
        $bid = $request->get("bid");
        $form = Form::where("code", $bid)->first();
        $this->beneficiaryRepository->add([
            "uuid" => $uuid,
            "form_id" => $form->id,
            "bid" => $bid,
            "valid" => 1
        ]);
        return $uuid;
    }

    /**
     * @param $uuid
     * @return string
     */
    private function update_beneficiary($uuid)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($uuid);
        $bid = Config::getInitials() . self::get_new_bid(1);
        $beneficiary->update([
            'bid' => $bid,
            'valid' => 1
        ]);
        return $bid;
    }

    /**
     * @param Request $request
     * @return array
     */
    private function prepare_data(Request $request)
    {
        $beneficiary_uuid = $this->create_beneficiary($request);
        $this->save_portrait_encoded($request, $beneficiary_uuid);
        $this->save_fingerprints_encoded($request, $beneficiary_uuid);
        $this->save_form_encoded($request, $beneficiary_uuid);
        $data = collect($request->except([
            "thumb_right_image",
            "thumb_right_fmd",
            "thumb_left_image",
            "thumb_left_fmd",
            "index_right_image",
            "index_right_fmd",
            "index_left_image",
            "index_left_fmd",
            "form",
            "portrait"
        ]));
        $data = $this->parse_date($data);
        $data = $this->format_gender($data);
        $data = $this->format_full_name($data);
        $data->put("beneficiary_uuid", $beneficiary_uuid);
        return $data->toArray();
    }

    private function save_portrait_encoded(Request $request, $uuid, $updating = false)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($uuid);
        if($updating){
            $beneficiary->picture()->update([
                "path" => "not yet",
                "encoded" => $request->get("portrait")
            ]);
        }
        $beneficiary
            ->picture()->create([
                "path" => "not yet",
                "encoded" => $request->get("portrait")
            ]);
    }

    /**
     * @param Request $request
     * @return array
     */
    private function prepareFingers(Request $request)
    {
        $data = [];
        array_push($data, new Fingerprint([
            "path" => "not yet",
            "finger_type" => "thumb_right",
            "encoded" => $request->get("thumb_right_image"),
            "fingerprint" => $request->get("thumb_right_fmd")
        ]));
        array_push($data, new Fingerprint([
            "path" => "not yet",
            "finger_type" => "thumb_left",
            "encoded" => $request->get("thumb_left_image"),
            "fingerprint" => $request->get("thumb_left_fmd")
        ]));
        array_push($data, new Fingerprint([
            "path" => "not yet",
            "finger_type" => "index_right",
            "encoded" => $request->get("index_right_image"),
            "fingerprint" => $request->get("index_right_fmd")
        ]));
        array_push($data, new Fingerprint([
            "path" => "not yet",
            "finger_type" => "index_left",
            "encoded" => $request->get("index_left_image"),
            "fingerprint" => $request->get("index_left_fmd")
        ]));
        return $data;
    }

    /**
     * @param Request $request
     * @param $beneficiary_uuid
     */
    private function save_form_encoded(Request $request, $beneficiary_uuid)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($beneficiary_uuid);
        $form = $beneficiary->form;
        $form->update([
            "encoded" => $request->get("form")
        ]);
    }

    /**
     * @param Collection $data
     * @return Collection
     */
    private function parse_date(Collection $data)
    {
        $arg = [];
        $string = $data->get("date_of_birth");
        $all = explode("/", $string);
        $arg[0] = $all[1];
        $arg[1] = $all[0];
        $arg[2] = $all[2];
        $well = implode("/", $arg);
        $carbon_date = Carbon::parse($well);
        $data->put("date_of_birth", $carbon_date);
        return $data;
    }

    /**
     * @param Collection $data
     * @return Collection
     */
    private function format_gender(Collection $data)
    {
        $gender = $data->get('gender');
        if($gender == 'male'){
            $data->put('gender', 1);
        }
        if($gender == 'female'){
            $data->put('gender', 0);
        }
        return $data;
    }

    /**
     * @param Collection $data
     * @return Collection
     */
    private function format_full_name(Collection $data)
    {
        $sn = $data->get('surname');
        $fn = $data->get('forenames');
        return $data->put('full_name', "{$fn} {$sn}");
    }

    /**
     * @param $increment
     * @return int
     */
    public static function get_new_bid($increment)
    {
        $generator = new CodeGenerator();
        $next_increment = $increment;

        $last_beneficiary =  self::get_last_beneficiary();
        $last_form_generated = self::get_last_form();

        if(! $last_form_generated && !$last_beneficiary){
            dump('no form, no beneficiary');
            return $generator->encode(CodeGenerator::make($increment));
        }

        if(! $last_beneficiary && $last_form_generated){
            dump('no beneficiary');
            $last_form_code = $generator->decode((int) substr($last_form_generated->code, -7));
            $next_increment =  $last_form_code + $increment;
        }

        if(!$last_form_generated && $last_beneficiary){
            dump('no form');
            $last_beneficiary_bid = $generator->decode((int) substr($last_beneficiary->bid, -7));
            $next_increment = $last_beneficiary_bid + $increment;
        }

        if($last_beneficiary && $last_form_generated){
            dump('there is form and beneficiary');
            $form_seq = $generator->decode(self::extract_code($last_form_generated->code));
            $beneficiary_seq = $generator->decode(self::extract_code($last_beneficiary->bid));
            $bid = collect([$form_seq, $beneficiary_seq])->max();
            dump('form sequence -> ', $form_seq);
            dump('beneficiary sequence -> ', $beneficiary_seq);
            dump('max sequence -> ', $bid);
            $code = $generator->decode((int) substr($bid, -7));
            dump('old code -> ', $code);
            $next_increment = $code + $increment;
        }
        dump('next increment -> ', $next_increment);
        $new_encoded = $generator->encode(CodeGenerator::make($next_increment));
        dump('new code -> ', $new_encoded);
        return $new_encoded;
    }

    /**
     * @return mixed|null
     */
    public static function get_last_beneficiary()
    {
        $code = new CodeGenerator();
        $last = Beneficiary::all()->filter(function ($b) {
            return starts_with($b->bid, Config::getInitials());
        })->sortBy(function($b) use ($code) {
            return $code->decode(substr($b->bid, -7));
        })->last();

        if(!$last) return null;

        return $last;
    }

    /**
     * @return mixed
     */
    public static function get_last_form()
    {
        return Form::orderBy('id', 'desc')->first();
    }

    /**
     * @param $bid
     * @return string
     */
    public static function extract_code($bid)
    {
        return substr($bid, -7);
    }

    /**
     * @param $request
     * @param $uuid
     * @return array
     */
    private function prepare_update_data($request, $uuid)
    {
        $bid = $this->update_beneficiary($uuid);

        $this->save_portrait_encoded($request, $uuid, true);
        $this->save_fingerprints_encoded($request, $uuid);
        $data = collect($request->except([
            "thumb_right_image",
            "thumb_right_fmd",
            "thumb_left_image",
            "thumb_left_fmd",
            "index_right_image",
            "index_right_fmd",
            "index_left_image",
            "index_left_fmd",
            "portrait"
        ]));
        $data = $this->parse_date($data);
        $data = $this->format_gender($data);
        $data = $this->format_full_name($data);
        $data->put("beneficiary_uuid", $uuid);
        $data = collect($data)->put('bid', $bid);
        return $data->toArray();
    }
}