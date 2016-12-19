<?php

namespace clocking\Console\Commands;

use clocking\Jobs\CleanBackups as CleanBackupsJob;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Console\Command;

class CleanBackups extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sys:clean-backups';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command To Clean Up the old (bad) backups.';
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
     *
     * @return mixed
     */
    public function handle()
    {
        dispatch(new CleanBackupsJob($this->backupRepository));
    }

}
