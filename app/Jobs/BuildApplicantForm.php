<?php

namespace clocking\Jobs;


use Barryvdh\Snappy\Facades\SnappyPdf;
use Carbon\Carbon;
use clocking\Department;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsDataWereGenerated;
use clocking\Events\FormsTemplateReady;
use clocking\Form;
use clocking\Http\Controllers\Api\Internal\BeneficiaryApiController;
use clocking\Location;
use clocking\Module;
use clocking\Rank;
use clocking\SysImages;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Repositories\FormRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Log;
use PDF;
use Webpatser\Uuid\Uuid;

class BuildApplicantForm extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var Request
     */
    private $request;
    /**
     * @var User
     */
    private $generator;
    private $forms;

    /**
     * Create a new job instance.
     *
     * @param array $forms
     * @param User $generator
     */
    public function __construct(array $forms, User $generator)
    {
        $this->forms = collect($forms);
        $this->generator = $generator;
    }

    /**
     * Execute the job.
     *
     */
    public function handle()
    {
        try{
            $this->generate_pdf($this->forms);
//
//            dump($this->forms);
        }catch (\Exception $e){
            Log::error($e->getTrace());
            $mes = "From BuildApplicantForm => {$e->getMessage()}";
            Log::error($mes);
            event(new FormsDataGenerationFailed($this->generator, $mes));
        }
    }


    /**
     * @param $generator_id
     * @param $increment
     * @return array
     * @throws \Exception
     */
//    private function build_form_data($generator_id, $increment)
//    {
//        $request = $this->request;
//        $bid = $this->generate_form_code($increment);
//        $data = [
//            'code' => $increment,
//            'uuid' => CodeGenerator::uuid(),
//            'module_id' => $request->get('module_id'),
//            'rank_id' => $request->get('rank_id'),
//            'user_id' => $generator_id
//        ];
////        dump("Got to build_form_data function with -> {$bid}");
//        dump("Got to build_form_data function with -> {$increment}");
//        return $data;
//    }

    /**
     * @param $increment
     * @return string
     * @throws \Exception
     */
//    private function generate_form_code($increment)
//    {
//        // ZGH0123456
//        $initials = Config::getInitials();
//        $suffix = $this->make_suffix($increment);
//        $bid = "{$initials}{$suffix}";
//        dump("Newly Generated BID with Initials-> {$bid}");
//        return $bid;
//    }

    /**
     * @param $increment
     * @return string
     * @throws \Exception
     */
//    private function make_suffix($increment)
//    {
//        $bid = BeneficiaryRepository::get_new_bid($increment);
//        dump("Newly Generated BID -> {$bid}");
//        return $bid;
//    }

    /**
     * @param $number_to_generate
     * @return array
     * @throws \Exception
     */
//    private function generate_them($number_to_generate)
//    {
//        $forms = [];
//        for($increment = 0; $increment < $number_to_generate; $increment++){
//            $single_form_data = $this->build_form_data($this->generator->id, $increment + 1);
//            $saved_form = Form::create($single_form_data);
//            array_push($forms, $single_form_data);
//        }
////        $tf = count($forms);
////        dump("Got to generate_them function with [total generated forms -> {$forms}]");
//        return $forms;
//    }

    /**
     * @param $forms
     * @throws \Exception
     */
    private function generate_pdf($forms)
    {
        dump("Got to generate_pdf function -> {$forms}");
        $data = ["forms" => $forms];
        //build the template with the data
        $pdf = $this->make_pdf($data);
        //store the template
        $filename = $this->get_filename();
        $pdf->save(storage_path("app/forms/{$filename}"));
        //notify the generator with the link to the template in order to download
        $link = $this->get_link($filename);
        dump("Got to generate_pdf function -> {$link}");
        if(is_null($link)){
            $mes = "Here Link is null";
            event(new FormsDataGenerationFailed($this->generator, $mes));
        }else{
            event(new FormsTemplateReady($link, $this->generator));
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
        $data = collect($data)->put('generator_name', $this->generator->full_name);
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
