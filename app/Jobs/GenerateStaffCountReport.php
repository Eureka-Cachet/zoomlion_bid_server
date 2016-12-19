<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Country;
use clocking\District;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Jobs\Job;
use clocking\Location;
use clocking\Module;
use clocking\Region;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class GenerateStaffCountReport extends Job implements ShouldQueue
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

            if(is_null($data)) return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
            if(collect($data)->isEmpty()) return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));
//            dd($data);
            $this->generate_report($data);
        }catch (\Exception $e){
            dd($e->getMessage());
            event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
        }
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
     * @return array|null
     */
    private function get_beneficiaries_count()
    {
        $level = $this->get_level();

        $sub_levels = [];

        switch ($this->data["level"]){
            case 1:
                $sub_levels = $level->regions;
                break;
            case 2:
                $sub_levels = $level->districts;
                break;
            case 3:
                $sub_levels = $level->locations;
                break;
            case 4:
                $sub_levels = $level->modules;
                break;
            default:
                $sub_levels = $level->regions;
        }

        if(collect($sub_levels)->isEmpty()) return [];

        if(is_null($sub_levels)) return null;

        $result = collect($sub_levels)->map(function($sl) use ($level) {
            if($this->data["level"] == 4){
                return [
                    'name' => $sl->department->name,
                    'total_staff' => $this->get_total_count($sl)
                ];
            }

            return [
                'name' => $sl->name,
                'total_staff' => $this->get_total_count($sl)
            ];
        });

        return $result->toArray();
    }

    /**
     * @return string
     */
    private function get_template()
    {
        if($this->data['format'] == 'xlsx'){
            return "templates.sheets.staff_count";
        }else{
            return "templates.pdfs.staff_count";
        }
    }

    /**
     * @return string
     */
    private function get_title()
    {
        return "Staff Count";
    }

    private function prepare_data()
    {
        $beneficiaries_count = $this->get_beneficiaries_count();
        return [
            'payload' => $beneficiaries_count,
            'all_total' => collect($beneficiaries_count)->sum('total_staff'),
            'level_name' => $this->get_level()->name,
            'level_type' => $this->get_level_type()
        ];
    }

    private function generate_report($data)
    {
        if($this->data['format'] == 'xlsx'){
            return dispatch(new GenerateSheet($data, $this->get_template(), $this->get_title(), $this->generator));
        }else{
            return dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator));
        }

    }

    /**
     * @param $sub_level
     * @return int
     */
    private function get_total_count($sub_level)
    {
        $start = Carbon::parse($this->data['start']);
        $end = Carbon::parse($this->data['end']);

        if($this->data['date_type'] == 'employment_date'){
            return collect($sub_level->beneficiaries)->filter(function($b) use ($start, $end) {
                return Carbon::parse($b->form->updated_at)->between($start, $end);
            })->count();
        }

        if($this->data['date_type'] == 'registration_date'){
            return collect($sub_level->beneficiaries)->filter(function($b) use ($start, $end) {
                return Carbon::parse($b->created_at)->between($start, $end);
            })->count();
        }

        return 0;
    }

    /**
     * @return string
     */
    private function get_level_type()
    {
        return class_basename($this->get_sub_level());
    }

    private function get_sub_level()
    {
        switch ($this->data["level"]){
            case 1:
                return new Region();
            case 2:
                return new District();
            case 3:
                return new Location();
            case 4:
                return new Module();
            default:
                return new Region();
        }
    }
}
