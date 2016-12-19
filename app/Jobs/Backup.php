<?php

namespace clocking\Jobs;

use clocking\Events\BackupFailed;
use clocking\Events\BackupWasSuccessful;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Artisan;

class Backup extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new job instance.
     * @param $channel
     */
    public function __construct($channel)
    {
        //
        $this->channel = $channel;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        try{
            $dump = Artisan::call('sys:db_backup');
            event(new BackupWasSuccessful($dump, $this->channel));
        }catch (\Exception $e){
            event(new BackupFailed($this->channel));
        }
    }
}
