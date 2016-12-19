<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/20/2016
 * Time: 8:53 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\Beneficiary;
use Carbon\Carbon;
use clocking\SysImages;
use League\Fractal\TransformerAbstract;

class BeneficiaryCollectionTransformer extends TransformerAbstract
{
    /**
     * @var
     */
    private $collection;

    /**
     * BeneficiaryCollectionTransformer constructor.
     * @param $collection
     */
    public function __construct($collection)
    {
        $this->collection = $collection;
    }

    public function transform(Beneficiary $beneficiary){
        if(!$this->collection){
            return $this->transform_single($beneficiary);
        }
        return $this->transform_collection($beneficiary);
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function transform_single(Beneficiary $beneficiary)
    {
        return [
            'uuid' => $beneficiary->uuid,
            'date_of_birth' => $this->format_date($beneficiary->date_of_birth),
            'address' => $beneficiary->address,
            'bid' => $beneficiary->bid,
            'form' => $this->get_form($beneficiary),
            'status' => !!$beneficiary->valid,
            'active' => !!$beneficiary->active,
            'region' => $beneficiary->region,
            'district' => $beneficiary->district,
            'location' => $beneficiary->location,
            'module' => $this->get_module($beneficiary),
            'picture' => $this->get_picture($beneficiary),
            'surname' => strtoupper($beneficiary->surname),
            'forenames' => strtoupper($beneficiary->forenames),
            'phone_number' => $beneficiary->phone_number,
            'allowance' => $beneficiary->allowance,
            'rank' => $beneficiary->rank,
            'bank_name' => strtoupper($beneficiary->bank_name),
            'bank_location' => strtoupper($beneficiary->bank_branch),
            'account_number' => $beneficiary->account_number,
            'fingerprints' => $this->get_fingerprints($beneficiary),
            'gender' => (bool)$beneficiary->gender ? "male" : "female",
            'identification_type' => $beneficiary->identification,
            'identification_number' => $beneficiary->identification_number
        ];
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function transform_collection(Beneficiary $beneficiary)
    {
        $module = $beneficiary->module;
        return [
            'uuid' => $beneficiary->uuid,
            'bid' => $beneficiary->form ? $beneficiary->form->code : $beneficiary->bid,
            'status' => !!$beneficiary->valid ,
            'active' => !!$beneficiary->active,
            'module' => $module ? strtoupper($module->department->name) : "Not Available",
            'full_name' => strtoupper($beneficiary->full_name)
        ];
    }

    /**
     * @param $input
     * @return string
     */
    private function form_date($input){
        return str_pad($input, 2, "0", STR_PAD_LEFT);
    }

    /**
     * @param $date
     * @return string
     */
    private function format_date($date)
    {
        if(! $date) return null;
        $parsed_date = Carbon::parse($date);
        return "{$this->form_date($parsed_date->day)}/{$this->form_date($parsed_date->month)}/{$parsed_date->year}";
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function get_form(Beneficiary $beneficiary)
    {
        if(! $beneficiary->form) return null;
        return [
            "uri" => "data:image/jpg;base64,{$beneficiary->form->encoded}",
            "code" => $beneficiary->form->code,
            "name" => $this->get_form_image_name($beneficiary->form->image)
        ];
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function get_picture(Beneficiary $beneficiary)
    {
        if(! $beneficiary->picture) return [
            "uri" => "data:image/jpg;base64,{$this->get_zoom_logo()}"
        ];
        return [
            "uri" => "data:image/jpg;base64,{$beneficiary->picture->encoded}"
        ];
    }

    /**
     * @param Beneficiary $beneficiary
     * @return mixed
     */
    private function get_fingerprints(Beneficiary $beneficiary)
    {
        if(! $beneficiary->fingerprints) return null;
        return $beneficiary->fingerprints->map(function ($f) {
            return [
                "type" => $f->finger_type,
                "uri" => "data:image/jpg;base64,{$f->encoded}",
                "name" => title_case(str_replace("_", " ", $f->finger_type))
            ];
        });
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function get_module(Beneficiary $beneficiary)
    {
        return $beneficiary->module;
//        return [
//            $beneficiary->module,
//            "department" => $beneficiary->module ? $beneficiary->module->department : "Not Available"
//        ];
    }

    /**
     * @return mixed
     */
    private function get_zoom_logo()
    {
        return SysImages::where("name", "ZoomLionLogo")->first()->encoded;
    }

    /**
     * @param $image
     * @return mixed
     */
    private function get_form_image_name($image)
    {
        return collect(explode("/", $image))->last();
    }
}