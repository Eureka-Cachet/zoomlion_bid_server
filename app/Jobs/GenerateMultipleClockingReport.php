<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Beneficiary;
use clocking\Country;
use clocking\District;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Location;
use clocking\Region;
use Eureka\Helpers\CodeGenerator;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GenerateMultipleClockingReport extends Job implements ShouldQueue
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
     * @throws \Exception
     */
    public function handle()
    {
//        dd($this->data);
        try{
            $data = $this->prepare_data();
//            dd($data);
            if(collect($data)->isEmpty()) return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));
            if(is_null($data)) return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
            $this->generate_report($data);
        } catch (\Exception $e){
            dd($e->getMessage());
            event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
        }
    }

    /**
     * @return array
     */
    private function prepare_data()
    {
        $clocking = $this->get_clocking();
//        dd($clocking);
        if(collect($clocking)->isEmpty()) return [];
        return [
            'title' => $this->get_title(),
            'payload' => $clocking,
            'level_name' => $this->get_level()->name,
            'level_type' => $this->get_level_type(),
            'start' => Carbon::parse($this->data['start']),
            'end' => Carbon::parse($this->data['end'])
        ];
    }

    private function get_title()
    {
        return "Beneficiaries Clocking";
    }

    /**
     * @return array
     */
    private function get_clocking()
    {
        $beneficiaries = $this->get_beneficiaries();
        if(collect($beneficiaries)->isEmpty()) return [];
//        dd($beneficiaries);
        return collect($beneficiaries)
            ->map(function($beneficiary){
                return [
                    "name" => $beneficiary->full_name,
                    "bid" => $beneficiary->bid,
                    "rank" => $beneficiary->rank ? $beneficiary->rank->name : "-",
                    "module" => $beneficiary->module ? $beneficiary->module->department->name : "-",
                    "location" => $beneficiary->location ? $beneficiary->location->name : "-",
                    "device_id" => $this->get_device_id($beneficiary),
                    "clocks" => $this->get_total_clocks($beneficiary)
                ];
            })->toArray();
    }

    private function get_beneficiaries()
    {
        $level = $this->get_level();
//        dd($level->beneficiaries->count());
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
        if($this->data["format"] == "xlsx"){
            dispatch(new GenerateSheet($data, $this->get_template(), $this->get_title(), $this->generator));
        }

        if($this->data["format"] == "pdf"){
            dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator));
        }
    }

    /**
     * @return string
     */
    private function get_template()
    {
        if($this->data["format"] == "pdf"){
            return "templates.pdfs.multiple_staff_clocks";
        }
        return "templates.sheets.multiple_staff_clocks";
    }

    /**
     * @param Beneficiary $beneficiary
     * @return string
     */
    private function get_device_id(Beneficiary $beneficiary)
    {
        if(collect($beneficiary->attendances)->isEmpty()) return "-";
        return $beneficiary->attendances->first()->device->code;
    }

    /**
     * @param Beneficiary $beneficiary
     * @return int
     */
    private function get_total_clocks(Beneficiary $beneficiary)
    {
        if(collect($beneficiary->attendances)->isEmpty()) return "-";

        $start = Carbon::parse($this->data["start"]);
        $end = Carbon::parse($this->data["end"]);

        return collect($beneficiary->attendances)
            ->filter(function($clock) use ($start, $end) {
                return Carbon::parse($clock->date)->between($start, $end);
            })->count();
    }

    /**
     * @return string
     */
    private function get_level_type()
    {
        return class_basename($this->get_level());
    }
}
