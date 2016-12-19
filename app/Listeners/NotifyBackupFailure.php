<?php

namespace clocking\Listeners;

use clocking\Events\BackupFailed;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class NotifyBackupFailure
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
     * @param  BackupFailed  $event
     * @return void
     */
    public function handle(BackupFailed $event)
    {
        //
    }
}
