<?php

namespace clocking\Listeners;

use clocking\Events\BackupRestoreFailed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyRestoreFailure
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
     * @param  BackupRestoreFailed  $event
     * @return void
     */
    public function handle(BackupRestoreFailed $event)
    {
        //
    }
}
