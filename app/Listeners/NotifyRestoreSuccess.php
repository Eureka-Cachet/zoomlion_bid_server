<?php

namespace clocking\Listeners;

use clocking\Events\BackupRestoreWasSuccessful;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyRestoreSuccess
{
    /**
     * Create the event listener.
     *
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  BackupRestoreWasSuccessful  $event
     * @return void
     */
    public function handle(BackupRestoreWasSuccessful $event)
    {
        //
    }
}
