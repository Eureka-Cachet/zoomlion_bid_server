<?php

namespace clocking\Listeners;

use clocking\Events\FormsDataGenerationFailed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyFormGeneratorForFailure
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  FormsDataGenerationFailed  $event
     * @return void
     */
    public function handle(FormsDataGenerationFailed $event)
    {
        //
    }
}
