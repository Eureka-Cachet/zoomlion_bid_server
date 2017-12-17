<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/1/16
 * Time: 9:08 PM
 */

namespace Eureka\Repositories;


use clocking\Beneficiary;
use clocking\Form;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;

class BeneficiaryRepository
{
    /**
     * @var Beneficiary
     */
    private $beneficiary;

    /**
     * BeneficiaryRepository constructor.
     * @param Beneficiary $beneficiary
     */
    public function __construct(Beneficiary $beneficiary)
    {
        $this->beneficiary = $beneficiary;
    }

    /**
     * @param $data
     * @return Beneficiary
     */
    public function add($data)
    {
        return $this->beneficiary->create($data);
    }

    /**
     * @param $uuid
     * @return mixed
     */
    public function get_by_uuid($uuid)
    {
        return $this->beneficiary->with('module.department')->where('uuid', $uuid)
            ->first();
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function get_all_paginated(Request $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->beneficiary->with(['form', 'module'])
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->beneficiary->with(['form', 'module'])
                ->orderBy('full_name', 'asc');
        }

        if ($request->exists('search')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->search}%";
                $q->where('full_name', 'like', $value)
                    ->orWhere('bid', 'like', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    /**
     * @param $uuid
     * @param Collection $data
     * @return Beneficiary
     */
    public function update($uuid, Collection $data)
    {
        $beneficiary = $this->get_by_uuid($uuid);
        $beneficiary->update($data->toArray());
        return $this->get_by_uuid($uuid);
    }

    /**
     * @param $uuid
     * @return Beneficiary
     */
    public function deactivate($uuid)
    {
        return $this->toggle_active(false, $uuid);
    }

    /**
     * @param $uuid
     * @return Beneficiary
     */
    public function activate($uuid)
    {
        return $this->toggle_active(true, $uuid);
    }

    /**
     * @param $active
     * @param $uuid
     * @return Beneficiary
     */
    private function toggle_active($active, $uuid)
    {
        $beneficiary = $this->get_by_uuid($uuid);
        $beneficiary->update([
            "active" => $active
        ]);
        return $this->get_by_uuid($uuid);
    }

    /**
     * @param $bid
     * @return mixed
     */
    public function get_by_bid($bid)
    {
        return $this->beneficiary
            ->where('bid', $bid)
            ->first();
    }

    /**
     * @param $increment
     * @return int
     * @throws \Exception
     */
    public static function get_new_bid($increment = 1)
    {
        dump("Initial increment -> {$increment}");
        try{
            $generator = new CodeGenerator();
            $next_increment = null;

            $last_beneficiary =  self::get_last_beneficiary();
            dump("last beneficiary => {$last_beneficiary}");
            $last_form_generated = self::get_last_form();
            dump("last form => {$last_form_generated}");

            if(is_null($last_form_generated) && is_null($last_beneficiary)){
                dump('no form, no beneficiary');
                $next_increment = $increment;
            }

            if(is_null($last_beneficiary) && $last_form_generated){
                $last_form_code = self::remove_initials($last_form_generated->code);
                $last_form_code_decoded = $generator->decode($last_form_code);
                dump("no beneficiary | Form => code(e=>{$last_form_code} -> d=>{$last_form_code_decoded})");
                $next_increment =  $last_form_code_decoded + $increment;
            }

            if(is_null($last_form_generated) && $last_beneficiary){
                $last_beneficiary_bid = self::remove_initials($last_beneficiary->bid);
                $last_beneficiary_bid_decoded = $generator->decode($last_beneficiary_bid);
                dump("no form | Beneficiary => bid(e=>{$last_beneficiary_bid} -> d=>{$last_beneficiary_bid_decoded})");
                $next_increment = $last_beneficiary_bid_decoded + $increment;
            }

            if($last_beneficiary && $last_form_generated){
                $last_form_code = self::remove_initials($last_form_generated->code);
                $last_form_code_decoded = $generator->decode($last_form_code);
                $last_beneficiary_bid = self::remove_initials($last_beneficiary->bid);
                $last_beneficiary_bid_decoded = $generator->decode($last_beneficiary_bid);

                dump('there is form and beneficiary');
                dump("|> Beneficiary => bid(e=>{$last_beneficiary_bid} -> d=>{$last_beneficiary_bid_decoded})");
                dump("|> Form => code(e=>{$last_form_code} -> d=>{$last_form_code_decoded})");

                $max_decoded_bid = collect([$last_form_code_decoded, $last_beneficiary_bid_decoded])->max();
                dump('form sequence decoded -> ', $last_form_code_decoded);
                dump('beneficiary sequence decoded -> ', $last_beneficiary_bid_decoded);
                dump('max sequence decoded -> ', $max_decoded_bid);

//                $code = $generator->decode((int) substr($max_decoded_bid, -7));
                $next_increment = $max_decoded_bid + $increment;
//                $new_encode_bid = $generator->encode($new_decoded_bid);
//                dump("|> New BID => (e=>{$new_encode_bid} -> d=>{$new_decoded_bid})");
//                $next_increment = $code + $increment;
            }

            dump('next increment -> ', $next_increment);
            $new_encode_bid = $generator->encode($next_increment);
            dump("|> New BID => (e=>{$new_encode_bid} -> d=>{$next_increment})");
            return $new_encode_bid;
        }catch (\Exception $exception){
//            Log::critical($exception->getMessage());
            dump($exception->getTrace());
        }
    }

    /**
     * @return mixed|null
     */
    public static function get_last_beneficiary()
    {
        $BID_initials = Config::getInitials();
//        $code = new CodeGenerator();
        return Beneficiary::where('bid', 'like', "{$BID_initials}%")
            ->latest()->first();

//        $last = Beneficiary::all()->filter(function ($b) use($BID_initials){
//            return starts_with($b->bid, $BID_initials);
//        })->sortBy(function($b) use ($code) {
//            return $code->decode(substr($b->bid, -7));
//        })->last();
//
//        if(!$last) return null;
//
//        return $last;
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
    public static function remove_initials($bid)
    {
        return substr($bid, -7);
    }

}