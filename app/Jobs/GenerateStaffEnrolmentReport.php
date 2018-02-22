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

class GenerateStaffEnrolmentReport extends Job implements ShouldQueue
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
            return "templates.sheets.staff_enrolment";
        }else{
            return "templates.pdfs.staff_enrolment";
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
        return "Staff Enrolment";
    }

    private function get_level()
    {
        $gender = $this->data['gender'];
        switch ($this->data["level"]){
            case 1:
                return Country::with(['beneficiaries' => function($q) use ($gender) {
                    $gender != 2 ? $q->where('gender', $gender) : $q;
                }])->find(1);
            case 2:
                return Region::with(['beneficiaries' => function($q) use ($gender) {
                    $gender != 2 ? $q->where('gender', $gender) : $q;
                }])->find($this->data['region_id']);
            case 3:
                return District::with(['beneficiaries' => function($q) use ($gender) {
                    $gender != 2 ? $q->where('gender', $gender) : $q;
                }])->find($this->data['district_id']);
            case 4:
                return Location::with(['beneficiaries' => function($q) use ($gender) {
                    $gender != 2 ? $q->where('gender', $gender) : $q;
                }])->find($this->data["location_id"]);
            default:
                return Country::with(['beneficiaries' => function($q) use ($gender) {
                    $gender != 2 ? $q->where('gender', $gender) : $q;
                }])->find(1);
        }
    }

    /**
     * @return array
     */
    private function prepare_data()
    {
        $enrolment_count = $this->get_enrolment_count();
        return [
            'payload' => $enrolment_count,
            'all_total' => collect($enrolment_count)->sum('total_enrolment'),
            'level_name' => $this->get_level()->name,
            'level_type' => $this->get_level_type()
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
    private function get_enrolment_count()
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
                    'total_enrolment' => $this->get_total_count($sl)
                ];
            }

            return [
                'name' => $sl->name,
                'total_enrolment' => $this->get_total_count($sl)
            ];
        });

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

        return collect($sub_level->beneficiaries)->filter(function($b) use ($start, $end) {
            return Carbon::parse($b->created_at)->between($start, $end) && !is_null($b->form);
        })->count();
    }
}
