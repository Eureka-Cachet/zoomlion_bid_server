<?php

namespace clocking\Jobs;

use clocking\Beneficiary;
use clocking\Country;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\ReportWasGenerated;
use clocking\Jobs\Job;
use Barryvdh\DomPDF\PDF;
use Carbon\Carbon;
use clocking\SysImages;
use Eureka\Transformers\Internal\BeneficiaryCollectionTransformer;
use Illuminate\Foundation\Auth\User;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Collection;
use League\Fractal\Manager;
use Webpatser\Uuid\Uuid;

class StaffInformationReport extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    const STAFF_INFORMATION_TEMPLATE_PDF = "templates.pdfs.staff_details_template";
    /**
     * @var Collection
     */
    private $data;
    /**
     * @var User
     */
    private $generator;

    /**
     * Create a new job instance.
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

            if(collect($data)->isEmpty()) return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));
            if(is_null($data)) return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));

//            dd($data);

            dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator));
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
        return 'templates.pdfs.staff_information';
    }

    /**
     * @return string
     */
    private function get_title()
    {
        $beneficiary = $this->get_beneficiary();
        return "{$beneficiary->full_name}_{$beneficiary->bid}";
    }

    /**
     * @return Beneficiary
     */
    private function get_beneficiary()
    {
        return Beneficiary::with('picture')->where('bid', $this->data['bid'])
            ->first();
    }

    private function prepare_data()
    {
        $beneficiary = $this->get_beneficiary();
        if(! $beneficiary) return null;

        $benefi = [
            'id' => $beneficiary->id,
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
            'registration_date' => Carbon::parse($beneficiary->create_at)->toFormattedDateString()
        ];
        return [
            'payload' => $benefi
        ];
    }
}
