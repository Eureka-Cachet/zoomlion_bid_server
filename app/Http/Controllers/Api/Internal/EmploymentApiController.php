<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 2:04 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use Barryvdh\Snappy\Facades\SnappyPdf;
use Carbon\Carbon;
use clocking\Department;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsTemplateReady;
use clocking\Form;
use clocking\Http\Controllers\Controller;
use clocking\Jobs\BuildApplicantForm;
use clocking\Module;
use clocking\SysImages;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Repositories\FormRepository;
use Eureka\Transformers\Internal\FormDataTransformer;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;
use PDF;
use Webpatser\Uuid\Uuid;

class EmploymentApiController extends Controller
{
    /**
     * @var FormRepository
     */
    private $formRepository;
    /**
     * @var Manager
     */
    private $manager;

    /**
     * @param FormRepository $repository
     * @param Manager $manager
     */
    public function __construct(FormRepository $repository, Manager $manager){
        $this->formRepository = $repository;
        $this->manager = $manager;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function generate_form(Request $request)
    {
        try{
            $number_to_generate = $request->get('number_of_form');
            $forms = $this->generate_them($number_to_generate, auth()->user(), $request);
            $this->generate_pdf($forms);
            return $this->onSuccessRequest();
        }catch (\Exception $e){
            return $this->onFailedRequest($e->getMessage());
        }
    }

    /**
     * @param $number_to_generate
     * @param $generator
     * @param $request
     * @return array
     * @throws \Exception
     */
    private function generate_them($number_to_generate, $generator, $request)
    {
        $forms = [];
        for($i = 0; $i < $number_to_generate; $i++){
            $single_form_data = $this->build_form_data($generator->id, $request);
            $saved_form = Form::create($single_form_data);
            $formated = $this->manager->createData(new Item($saved_form, new FormDataTransformer))->toArray()['data'];
            array_push($forms, $formated);
        }
        return $forms;
    }

    /**
     * @param $generator_id
     * @param $request
     * @return array
     * @throws \Exception
     */
    private function build_form_data($generator_id, Request $request)
    {
        return [
            'code' => $this->generate_form_code(),
            'uuid' => CodeGenerator::uuid(),
            'module_id' => $request->get('module_id'),
            'rank_id' => $request->get('rank_id'),
            'user_id' => $generator_id
        ];
    }

    /**
     * @return string
     * @throws \Exception
     */
    private function generate_form_code()
    {
        // ZGH0123456
        $initials = Config::getInitials();
        $suffix = $this->make_suffix();
        return "{$initials}{$suffix}";
    }

    /**
     * @return string
     * @throws \Exception
     */
    private function make_suffix()
    {
        return BeneficiaryRepository::get_new_bid();
    }

    /**
     * @param $forms
     * @throws \Exception
     */
    private function generate_pdf($forms)
    {
        $data = ["forms" => $forms];
        //build the template with the data
        $pdf = $this->make_pdf($data);
        //store the template
        $filename = $this->get_filename();
        $pdf->save(storage_path("app/forms/{$filename}"));
        //notify the generator with the link to the template in order to download
        $link = $this->get_link($filename);
        if(is_null($link)){
            $mes = "Here Link is null";
            event(new FormsDataGenerationFailed(auth()->user(), $mes));
        }else{
            event(new FormsTemplateReady($link, auth()->user()));
        }
    }

    /**
     * @param $filename
     * @return string
     */
    private function get_link($filename)
    {
        return $filename;
    }

    /**
     * @return string
     * @throws \Exception
     */
    private function get_filename()
    {
        $uuid = Uuid::generate(4);
        $now = Carbon::now()->timestamp;
        return "{$now}_{$uuid}.pdf";
    }


    /**
     * @param $data
     * @return mixed
     */
    private function make_pdf($data)
    {
        $data = collect($data)->put('zoom_logo', $this->get_zoom_logo());
        $data = collect($data)->put('generator_name', auth()->user()->full_name);
        return SnappyPdf::loadView('templates.pdfs.applicant_form', $data);
    }

    /**
     * @return string
     */
    private function get_zoom_logo()
    {
        $encoded = SysImages::where("name", "ZoomLionLogo")->first()->encoded;
        return "data:image/jpg;base64,{$encoded}";
    }

}