<?php

namespace clocking\Listeners;

use clocking\Events\BeneficiaryHasClocked;
use clocking\Jobs\SendClockUpdatedData;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class DispatchUpdatedDataJob implements ShouldQueue
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
     * @param $event
     * @return void
     */
    public function handle($event)
    {
        dispatch(new SendClockUpdatedData());
    }
}
