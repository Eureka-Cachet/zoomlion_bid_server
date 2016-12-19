<?php

namespace clocking\Jobs;

use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsTemplateReady;
use clocking\Jobs\Job;
use Barryvdh\DomPDF\PDF;
use Carbon\Carbon;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Support\Facades\Storage;
use Webpatser\Uuid\Uuid;

class BuildFormTemplate extends Job implements ShouldQueue
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
     *
     * @param $forms
     * @param $generator
     */
    public function __construct()
    {
//        $this->forms = $forms;
//        $this->generator = $generator;
    }

    /**
     * Execute the job.
     *
     * @param PDF $PDF
     */
    public function handle(PDF $PDF)
    {
        dd($this->forms);
        $data = $this->generate_template_data($this->forms);
        //build the template with the data
        $pdf = $PDF->loadView('templates.pdfs.applicant_form', $data);
        //store the template
        $filename = $this->get_filename();
        $pdf->save(public_path("pdf/{$filename}"));
        //notify the generator with the link to the template in order to download
        $link = $this->get_link($filename);
        if(is_null($link)){
            $mes = "Here Link is null";
            event(new FormsDataGenerationFailed($this->generator, $mes));
        }
        event(new FormsTemplateReady($link, $this->generator));
    }

    /**
     * @param $filename
     * @return string
     */
    private function get_link($filename)
    {
        if(Storage::disk('public')->has($filename)){
            return url(public_path("pdf/{$filename}"));
        }
        return null;
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
}
