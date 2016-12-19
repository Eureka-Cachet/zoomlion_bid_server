<?php

namespace clocking\Jobs;

use clocking\Events\BackupRestoreFailed;
use clocking\Events\BackupRestoreWasSuccessful;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Artisan;

class BackupRestore extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    public $key;
    /**
     * @var
     */
    private $channel;

    /**
     * Create a new job instance.
     *
     * @param $key
     * @param $channel
     */
    public function __construct($key, $channel)
    {
        $this->key = $key;
        $this->channel = $channel;
    }

    /**
     * Execute the job.
     *
     * @param DbBackupRepository $backupRepository
     */
    public function handle(DbBackupRepository $backupRepository)
    {
        $dump = $this->get_dump("dump_", $backupRepository);
        if(! $dump){
            event(new BackupRestoreFailed($this->channel));
        }

        try{
            Artisan::call('sys:db_restore', [
                'filename' => $dump['name']
            ]);
            event(new BackupRestoreWasSuccessful($dump, $this->channel));
        }catch (\Exception $e){
            event(new BackupRestoreFailed($this->channel));
        }
    }

    private function get_dump($identifier, DbBackupRepository $backupRepository)
    {
        if(! $this->key){
            return $this->get_latest_backup($identifier, $backupRepository);
        }
        return $backupRepository->get_by_key($this->key);
    }

    private function get_latest_backup($identifier, DbBackupRepository $backupRepository)
    {
        return $backupRepository->get_newest($identifier);
    }
}
