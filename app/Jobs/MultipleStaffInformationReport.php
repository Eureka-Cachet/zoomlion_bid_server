<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Beneficiary;
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

class MultipleStaffInformationReport extends Job implements ShouldQueue
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
        try{
            $data = $this->prepare_data();
            if(is_null($data)) return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
            if(collect($data)->isEmpty()) return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));

//            dd($data);

            dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator, true));
        }catch (\Exception $e){
            dd($e->getMessage());
            event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
        }
    }

    private function get_level()
    {
        $gender = $this->data['gender'];
        $constraints = ['active' => true];
        $constraints = $gender != 2
            ? array_add($constraints, 'gender', $gender)
            : $constraints;
        switch ($this->data["level"]){
            case 1:
                return Country::with(['beneficiaries'=>function($q) use ($constraints) {
                    $q->where($constraints);
                }])->find(1);
            case 2:
                return Region::with(['beneficiaries'=>function($q) use ($constraints) {
                    $q->where($constraints);
                }])->find($this->data['region_id']);
            case 3:
                return District::with(['beneficiaries'=>function($q) use ($constraints) {
                    $q->where($constraints);
                }])->find($this->data['district_id']);
            case 4:
                return Location::with(['beneficiaries'=>function($q) use ($constraints) {
                    $q->where($constraints);
                }])->find($this->data["location_id"]);
            default:
                return Country::with(['beneficiaries'=>function($q) use ($constraints) {
                    $q->where($constraints);
                }])->find(1);
        }
    }

    private function prepare_data()
    {
        $beneficiaries = $this->get_beneficiaries();
        if(is_null($beneficiaries)) return null;
        if(collect($beneficiaries)->isEmpty()) return [];

        return [
            'payload' => $beneficiaries,
            'level_name' => $this->getLevelName(),
            'level_type' => $this->get_level_type(),
            'gender' => $this->get_gender()
        ];
    }

    /**
     * @return null|string
     */
    private function get_gender()
    {
        $gender = $this->data['gender'];
        if($gender == 2) return null;
        return $gender == 1 ? "Males" : "Females";
    }

    /**
     * @return mixed
     */
    private function get_beneficiaries()
    {
        $beneficiaries = $this->get_level()->beneficiaries;

        if(is_null($beneficiaries)) return null;
        if(collect($beneficiaries)->isEmpty()) return [];

        return collect($beneficiaries)->map(function(Beneficiary $beneficiary){
            return [
                'region' => $beneficiary->region ? $beneficiary->region->name : "Not Available",
                'district' => $beneficiary->district ? $beneficiary->district->name : "Not Available",
                'module' => $beneficiary->module ? $beneficiary->module->department->name : "Not Available",
                'bid' => $beneficiary->bid,
                'full_name' => $beneficiary->full_name,
                'phone_number' => $beneficiary->phone_number,
                'date_of_employment' => $beneficiary->form ? Carbon::parse($beneficiary->form->updated_at)->toFormattedDateString() : "Not Available",
                'rank' => $beneficiary->rank ? $beneficiary->rank->name : "Not Available",
                'bank_name' => $beneficiary->bank_name,
                'bank_branch' => $beneficiary->bank_branch,
                'account_number' => $beneficiary->account_number,
                'id' => $beneficiary->id
            ];
        })->toArray();
    }

    private function get_template()
    {
        return 'templates.pdfs.multiple_staff_information';
    }

    /**
     * @return string
     */
    private function get_title()
    {
        return "Staff Information";
    }

    /**
     * @param Beneficiary $beneficiary
     * @return string
     */
    private function get_encoded_image(Beneficiary $beneficiary)
    {
        $encoded = $beneficiary->picture->encoded;
        return "data:image/jpg;base64,{$encoded}";
    }

    /**
     * @return string $name
     */
    private function getLevelName()
    {
        switch ($this->data["level"]){
            case 1:
                return Country::first()->name;
            case 2:
                return Region::find($this->data['region_id'])->name;
            case 3:
                return District::find($this->data['district_id'])->name;
            case 4:
                return Location::find($this->data['location_id'])->name;
            default:
                return Country::first()->name;
        }
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
