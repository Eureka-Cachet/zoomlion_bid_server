<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Country;
use clocking\District;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Location;
use clocking\Region;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateStaffAllowanceReport extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $data;
    /**
     * @var
     */
    private $generator;

    /**
     * Create a new job instance.
     *
     * @param $data
     * @param $generator
     */
    public function __construct($data, $generator)
    {
        $this->data = $data;
        $this->generator = $generator;
    }

    /**
     * Execute the job.
     *
     */
    public function handle()
    {
        try{
            $data = $this->prepare_data();
            if(collect($data)->isEmpty()) return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));
            if(is_null($data)) return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
            $this->generate_report($data);
        } catch (\Exception $e){
            event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
        }
    }


    /**
     * @return array
     */
    private function prepare_data()
    {
        $beneficiaries = $this->get_allowances();
        if(collect($beneficiaries)->isEmpty()) return [];

        return [
            'title' => $this->get_title(),
            'payload' => $beneficiaries,
            'level_name' => $this->get_level()->name,
            'level_type' => $this->get_level_type()
        ];
    }

    private function get_title()
    {
        return "Beneficiaries Clocking";
    }

    /**
     * @return array
     */
    private function get_allowances()
    {
        $beneficiaries = $this->get_beneficiaries();
        if(collect($beneficiaries)->isEmpty()) return [];
//        dd($beneficiaries);
        return collect($beneficiaries)
            ->map(function($beneficiary){
                return [
                    "name" => $beneficiary->full_name,
                    "bid" => $beneficiary->bid,
                    "rank" => $beneficiary->rank ? $beneficiary->rank->name : "Not Available",
//                    "module" => $beneficiary->module ? $beneficiary->module->department->name : "Not Available",
//                    "location" => $beneficiary->location ? $beneficiary->location->name : "Not Available",
                    "bank" => $beneficiary->bank_name,
                    "branch" => $beneficiary->bank_branch,
                    "account" => $beneficiary->account_number,
                    "allowance" => $beneficiary->allowance
                ];
            })->toArray();
    }

    private function get_beneficiaries()
    {
        $level = $this->get_level();
        return $level->beneficiaries;
    }


    private function get_level()
    {
        switch ($this->data["level"]){
            case 1:
                return Country::with('beneficiaries')->find(1);
            case 2:
                return Region::with('beneficiaries')->find($this->data['region_id']);
            case 3:
                return District::with('beneficiaries')->find($this->data['district_id']);
            case 4:
                return Location::with('beneficiaries')->find($this->data["location_id"]);
            default:
                return Country::with('beneficiaries')->find(1);
        }
    }

    /**
     * @param $data
     */
    private function generate_report($data)
    {
        dispatch(new GenerateSheet($data, $this->get_template(), $this->get_title(), $this->generator));
    }

    /**
     * @return string
     */
    private function get_template()
    {
        return "templates.sheets.staff_allowance";
    }

    /**
     * @return string
     */
    private function get_level_type()
    {
        return class_basename($this->get_level());
    }
}
