<?php

namespace clocking\Jobs;

use clocking\Jobs\Job;
use Carbon\Carbon;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class CleanBackups extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var DbBackupRepository
     */
    private $backupRepository;

    /**
     * Create a new job instance.
     * @param DbBackupRepository $backupRepository
     */
    public function __construct(DbBackupRepository $backupRepository)
    {
        $this->backupRepository = $backupRepository;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $names = $this->get_bad_dumps();
        $this->backupRepository->delete_all_bad_dumps($names);
    }

    private function get_bad_dumps()
    {
        $dumps = $this->backupRepository->get_all("dump_");
        return collect($dumps)
            ->filter(function($dump){
                return Carbon::parse($dump->timestamp)->addDay()->lt(Carbon::today());
            })
            ->map(function($dump){
                return $dump['name'];
            })->toArray();
    }
}
