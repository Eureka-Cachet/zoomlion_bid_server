<?php

namespace clocking\Jobs;


use Barryvdh\DomPDF\PDF;
use Barryvdh\Snappy\Facades\SnappyPdf;
use clocking\Beneficiary;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\PushDataToClients;
use clocking\SysImages;
use Eureka\Helpers\ChannelMaker;
use Eureka\Helpers\CodeGenerator;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;

class GeneratePdf extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var array
     */
    private $data;
    /**
     * @var
     */
    private $template_path;
    /**
     * @var
     */
    private $title;
    /**
     * @var
     */
    private $generator;
    /**
     * @var bool
     */
    private $details;

    /**
     * Create a new job instance.
     *
     * @param $data
     * @param $template_path
     * @param $title
     * @param $generator
     * @param bool $details
     */
    public function __construct($data, $template_path, $title, $generator, $details = false)
    {
        $this->data = $data;
        $this->template_path = $template_path;
        $this->title = $title;
        $this->generator = $generator;
        $this->details = $details;
    }

    /**
     * Execute the job.
     * @param PDF $PDF
     */
    public function handle(PDF $PDF)
    {
        try {
            $uuid = CodeGenerator::uuid();
            $file_path = $this->get_file_path($uuid);
            $data = $this->prepare_data();
            SnappyPdf::loadView($this->template_path, $data)
                ->save($file_path);
            event(new PushDataToClients($this->get_push_data($uuid), $this->get_channel(), $this->get_event()));
        } catch (\Exception $e){
            var_dump($e->getMessage(), $e->getFile(), $e->getLine());
            event(new FormsDataGenerationFailed($this->generator, "Operation Failed"));
        }
    }

    /**
     * @param $uuid
     * @return string
     */
    private function get_filename($uuid)
    {
        $str = str_slug("{$uuid}_{$this->title}");
        return $str. ".pdf";
    }

    /**
     * @return string
     */
    private function get_folder()
    {
        return storage_path('app/reports/pdfs');
    }

    private function get_channel()
    {
        return ChannelMaker::makeFor($this->generator);
    }

    private function get_event()
    {
        return "PDF_GENERATED";
    }

    /**
     * @return array
     */
    private function prepare_data()
    {
//        if($this->details){
//            $this->data['payload'] = $this->get_images();
//        }

        if($this->template_path == 'templates.pdfs.staff_information'){
            $value = $this->data['payload'];
            $encoded = $this->get_encoded_image($value['id']);
            $this->data['payload'] = collect($value)->put('encoded', $this->convert_to_single_line($encoded));
        }

//        dd(collect($this->data["payload"])->first());
        return collect($this->data)->put("zoom_logo", $this->get_zoom_logo())->toArray();
    }

    /**
     * @return string
     */
    private function get_zoom_logo()
    {
        $encoded = SysImages::where("name", "ZoomLionLogo")->first()->encoded;
        return "data:image/jpg;base64,{$encoded}";
    }

    private function get_file_link()
    {
    }

    /**
     * @param $uuid
     * @return string
     */
    private function get_file_path($uuid)
    {
        return $this->get_folder() . "/" . $this->get_filename($uuid);
    }

    /**
     * @param $uuid
     * @return array
     */
    private function get_push_data($uuid)
    {
        return ['link' => $this->get_filename($uuid)];
    }

    /**
     * @return array
     */
    private function get_images()
    {
        return collect($this->data["payload"])->map(function($d){
            $encoded = $this->get_encoded_image($d["id"]);
            return collect($d)->put("encoded", $this->convert_to_single_line($encoded));
        })->toArray();
    }

    private function get_encoded_image($beneficiary_id)
    {
        $pict = Beneficiary::find($beneficiary_id)->picture;

        if($pict->path == 'not yet'){
            return $this->get_zoom_logo();
        }

        $encoded = $pict->encoded;
        return "data:image/jpg;base64,{$encoded}";
    }

    /**
     * @param $encoded
     * @return mixed
     */
    private function convert_to_single_line($encoded)
    {
        return preg_replace("/[\r\n]*/", "", $encoded);
    }
}
