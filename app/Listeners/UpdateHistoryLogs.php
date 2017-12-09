<?php

namespace clocking\Listeners;

use clocking\Events\SupervisorHasLoggedIn;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class UpdateHistoryLogs
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
     * @param  SupervisorHasLoggedIn  $event
     * @return void
     */
    public function handle(SupervisorHasLoggedIn $event)
    {

    }
}
