<?php

namespace clocking\Listeners;

use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsDataWereGenerated;
use clocking\Jobs\GenerateFormPdf;
use Eureka\Transformers\Internal\FormDataTransformer;
use Illuminate\Foundation\Bus\DispatchesJobs;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class BuildFormTemplate
{
    use DispatchesJobs;
    /**
     * @var Manager
     */
    private $manager;

    /**
     * Create the event listener.
     * @param Manager $manager
     */
    public function __construct(Manager $manager)
    {
        //
        $this->manager = $manager;
    }

    /**
     * Handle the event.
     *
     * @param  FormsDataWereGenerated $event
     */
    public function handle(FormsDataWereGenerated $event)
    {
        try{
            $forms = $this->prepare_forms($event->forms);
            $this->dispatch(new GenerateFormPdf($forms, $event->generator));
        }catch (\Exception $e){
            $mes = "From BuildFormTemplateListener => {$e->getMessage()}";
            event(new FormsDataGenerationFailed($event->generator, $mes));
        }
    }

    /**
     * @param $forms
     * @return array
     */
    private function prepare_forms($forms)
    {
        $forms =  $this->manager->createData(new Collection($forms, new FormDataTransformer))
            ->toArray();
        return $forms['data'];
    }
}
