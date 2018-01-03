<?php

namespace clocking\Jobs;

use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\PushDataToClients;
use Eureka\Helpers\ChannelMaker;
use Eureka\Helpers\CodeGenerator;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Facades\Excel;

class GenerateSheet extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $data;
    /**
     * @var
     */
    private $template;
    /**
     * @var
     */
    private $title;
    /**
     * @var
     */
    private $generator;

    /**
     * Create a new job instance.
     *
     * @param $data
     * @param $template_path
     * @param $title
     * @param $generator
     */
    public function __construct($data, $template_path, $title, $generator)
    {
        $this->data = $data;
        $this->template = $template_path;
        $this->title = $title;
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
            $uuid = CodeGenerator::uuid();
            $path = Excel::create($this->get_filename($uuid), function($excel){
                $excel->setTitle($this->title);
                $excel->sheet("New Sheet", function($sheet) {
                    $sheet->loadView($this->template, $this->data);
                });
            })->store('xls', $this->get_folder(), true);
            event(new PushDataToClients($this->get_push_data($path), $this->get_channel(), $this->get_event()));
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
        return str_slug("{$uuid}_{$this->title}");
    }

    /**
     * @return string
     */
    private function get_channel()
    {
        return ChannelMaker::makeFor($this->generator);
    }

    /**
     * @return string
     */
    private function get_event()
    {
        return "SHEET_GENERATED";
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
     * @return string
     */
    private function get_folder()
    {
        return storage_path('app/reports/sheets');
    }

    /**
     * @param $path
     * @return array
     */
    private function get_push_data($path)
    {
        return ['link' => collect($path)->get('file')];
    }
}
