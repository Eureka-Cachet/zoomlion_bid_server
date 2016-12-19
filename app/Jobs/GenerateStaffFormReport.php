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

class GenerateStaffFormReport extends Job implements ShouldQueue
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


    /**
     * @return string
     */
    private function get_template()
    {
        if($this->data['format'] == 'xlsx'){
            return "templates.sheets.staff_form";
        }else{
            return "templates.pdfs.staff_form";
        }
    }

    /**
     * @return District|Location|Module|Region
     */
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

    /**
     * @param $data
     * @return mixed
     */
    private function generate_report($data)
    {
        if($this->data['format'] == 'xlsx'){
            return dispatch(new GenerateSheet($data, $this->get_template(), $this->get_title(), $this->generator));
        }else{
            return dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator));
        }

    }

    /**
     * @return string
     */
    private function get_title()
    {
        return "Staff Form";
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
     * @return array
     */
    private function prepare_data()
    {
        $form_count = $this->get_form_count();
        return [
            'payload' => $form_count,
            'all_total' => collect($form_count)->sum('total_form'),
            'all_enrolled' => collect($form_count)->sum('total_enrolled'),
            'all_not_enrolled' => collect($form_count)->sum('total_not_enrolled'),
            'level_name' => $this->get_level()->name,
            'level_type' => $this->get_level_type(),
            'start' => Carbon::parse($this->data['start']),
            'end' => Carbon::parse($this->data['end'])
        ];
    }

    /**
     * @return string
     */
    private function get_level_type()
    {
        return class_basename($this->get_sub_level());
    }

    /**
     * @return array|null
     */
    private function get_form_count()
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

            if($this->data["level"] == 1){
                return [
                    'name' => $sl->name,
                    'total_form' => $this->get_region_total_count($sl),
                    'total_enrolled' => $this->get_region_total_enrolled_count($sl),
                    'total_not_enrolled' => $this->get_region_total_not_enrolled_count($sl)
                ];
            }

            if($this->data["level"] == 2){
                return [
                    'name' => $sl->name,
                    'total_form' => $this->get_district_total_count($sl),
                    'total_enrolled' => $this->get_district_total_enrolled_count($sl),
                    'total_not_enrolled' => $this->get_district_total_not_enrolled_count($sl)
                ];
            }

            if($this->data["level"] == 3){
                return [
                    'name' => $sl->name,
                    'total_form' => $this->get_location_total_count($sl),
                    'total_enrolled' => $this->get_location_total_enrolled_count($sl),
                    'total_not_enrolled' => $this->get_location_total_not_enrolled_count($sl)
                ];
            }

            if($this->data["level"] == 4){
                return [
                    'name' => $sl->department->name,
                    'total_form' => $this->get_total_count($sl),
                    'total_enrolled' => $this->get_total_enrolled_count($sl),
                    'total_not_enrolled' => $this->get_total_not_enrolled_count($sl)
                ];
            }

            return [
                'name' => $sl->name,
                'total_form' => $this->get_total_count($sl),
                'total_enrolled' => $this->get_total_enrolled_count($sl),
                'total_not_enrolled' => $this->get_total_not_enrolled_count($sl)
            ];
        });

//        dd($result);

        return $result->toArray();
    }

    /**
     * @param $sub_level
     * @return int
     */
    private function get_total_count($sub_level)
    {
        $start = Carbon::parse($this->data['start']);
        $end = Carbon::parse($this->data['end']);

        return collect($sub_level->forms)->filter(function($f) use ($start, $end) {
            return Carbon::parse($f->created_at)->between($start, $end);
        })->count();
    }

    private function get_total_enrolled_count($sub_level)
    {
        $start = Carbon::parse($this->data['start']);
        $end = Carbon::parse($this->data['end']);

        return collect($sub_level->forms)->filter(function($f) use ($start, $end) {
            return Carbon::parse($f->created_at)->between($start, $end) && $f->enrolled == 1;
        })->count();
    }

    private function get_total_not_enrolled_count($sub_level)
    {
        $start = Carbon::parse($this->data['start']);
        $end = Carbon::parse($this->data['end']);

        return collect($sub_level->forms)->filter(function($f) use ($start, $end) {
            return Carbon::parse($f->created_at)->between($start, $end) && $f->enrolled == 0;
        })->count();
    }

    /**
     * @param $r
     * @return mixed
     */
    private function get_region_total_count($r)
    {
        return collect($r->districts)->map(function($d){
            return [
                'total_form' => $this->get_district_total_count($d)
            ];
        })->sum('total_form');
    }

    private function get_region_total_enrolled_count($r)
    {
        return collect($r->districts)->map(function($d){
            return [
                'total_form' => $this->get_district_total_enrolled_count($d)
            ];
        })->sum('total_form');
    }

    private function get_region_total_not_enrolled_count($r)
    {
        return collect($r->districts)->map(function($d){
            return [
                'total_form' => $this->get_district_total_not_enrolled_count($d)
            ];
        })->sum('total_form');
    }

    private function get_district_total_count($sl)
    {
        return collect($sl->locations)->map(function($l){
            return [
                'total_form' => $this->get_location_total_count($l)
            ];
        })->sum('total_form');
    }

    private function get_district_total_enrolled_count($d)
    {
        return collect($d->locations)->map(function($l){
            return [
                'total_form' => $this->get_location_total_enrolled_count($l)
            ];
        })->sum('total_form');
    }

    private function get_district_total_not_enrolled_count($d)
    {
        return collect($d->locations)->map(function($l){
            return [
                'total_form' => $this->get_location_total_not_enrolled_count($l)
            ];
        })->sum('total_form');
    }

    private function get_location_total_count($sl)
    {
        return collect($sl->modules)->map(function($m){
            return [
                'total_form' => $this->get_total_count($m)
            ];
        })->sum('total_form');
    }

    private function get_location_total_enrolled_count($l)
    {
        return collect($l->modules)->map(function($m){
            return [
                'total_form' => $this->get_total_enrolled_count($m)
            ];
        })->sum('total_form');
    }

    private function get_location_total_not_enrolled_count($l)
    {
        return collect($l->modules)->map(function($m){
            return [
                'total_form' => $this->get_total_not_enrolled_count($m)
            ];
        })->sum('total_form');
    }
}
