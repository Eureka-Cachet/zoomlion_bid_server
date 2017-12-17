<?php

namespace clocking\Jobs;

use Barryvdh\Snappy\Facades\SnappyPdf;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsTemplateReady;
use clocking\Jobs\Job;
use Carbon\Carbon;
use clocking\SysImages;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Barryvdh\DomPDF\PDF;
use Illuminate\Support\Facades\Storage;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Webpatser\Uuid\Uuid;

class GenerateFormPdf extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $forms;
    /**
     * @var
     */
    private $generator;

    /**
     * Create a new job instance.
     * @param array $forms
     * @param $generator
     */
    public function __construct(array $forms, $generator)
    {
        $this->forms = $forms;
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
            $data = $this->generate_template_data($this->forms);
            //build the template with the data
            $pdf = $this->make_pdf($data);
            //store the template
            $filename = $this->get_filename();
            $pdf->save(storage_path("app/forms/{$filename}"));
            //notify the generator with the link to the template in order to download
            $link = $this->get_link($filename);
            if(is_null($link)){
                $mes = "Here Link is null";
                event(new FormsDataGenerationFailed($this->generator, $mes));
            }else{
                event(new FormsTemplateReady($link, $this->generator));
            }
        }catch (\Exception $e){
            event(new FormsDataGenerationFailed($this->generator, $e->getMessage()));
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
     * @param $forms
     * @return array
     */
    private function generate_template_data($forms)
    {
        return [
            'forms' => $forms
        ];
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
