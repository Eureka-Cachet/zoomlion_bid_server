<?php

namespace clocking\Console\Commands;

use clocking\Events\BackupRestoreFailed;
use clocking\Events\BackupRestoreWasSuccessful;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;

class DatabaseRestore extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sys:db_restore {filename? : the dump filename to restore}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'database restore';
    /**
     * @var DbBackupRepository
     */
    private $backupRepository;

    /**
     * Create a new command instance.
     *
     * @param DbBackupRepository $backupRepository
     */
    public function __construct(DbBackupRepository $backupRepository)
    {
        parent::__construct();
        $this->backupRepository = $backupRepository;
    }

    /**
     * Execute the console command.
     * @return mixed
     * @throws \Exception
     */
    public function handle()
    {
        try{
            $this->execute_command($this->argument('filename'));
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param $filename
     */
    private function execute_command($filename)
    {
        $this->call('db:restore', [
                '--database' => 'mysql',
                '--source' => 'local',
                '--sourcePath' => $filename,
                '--compression' => 'gzip'
            ]
        );
    }

    /**
     * @param $identifier
     * @return mixed
     */



    /**
     * @param $identifier
     * @return mixed
     */

}
