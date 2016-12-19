<?php

namespace clocking\Listeners;

use clocking\Events\FormsDataWereGenerated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class ReadyToBuildFormTemplate
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
     * @param  FormsDataWereGenerated  $event
     * @return void
     */
    public function handle(FormsDataWereGenerated $event)
    {
        //
    }
}
