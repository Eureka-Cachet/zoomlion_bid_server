<?php

namespace clocking\Console\Commands;

use clocking\Events\BackupFailed;
use clocking\Events\BackupWasSuccessful;
use Carbon\Carbon;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Console\Command;
use Webpatser\Uuid\Uuid;

class DatabaseBackup extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sys:db_backup';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'database backup';
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
            $file_name = $this->make_file_name();
            $this->execute_command($file_name);
            $dump = $this->save_operation_info($file_name);
            return $dump;
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param $file_name
     */
    private function execute_command($file_name)
    {
        $this->call('db:backup', [
                '--database' => 'mysql',
                '--destination' => 'local',
                '--destinationPath' => "{$file_name}.sql",
                '--compression' => 'gzip'
            ]
        );
    }

    /**
     * @param $file_name
     * @return static
     */
    private function save_operation_info($file_name)
    {
        $data = $this->prepare_data($file_name);
        return $this->backupRepository->save($file_name, $data);
    }

    /**
     * @param $file_name
     * @return string
     */
    private function get_dump_path($file_name)
    {
        return storage_path('app/backups') . '/' . $file_name;
    }

    /**
     * @return Uuid
     * @throws \Exception
     */
    private function generate_uuid()
    {
        return Uuid::generate(4);
    }

    /**
     * @param $file_name
     * @return array
     */
    private function prepare_data($file_name)
    {
        $file_name = $file_name.'.sql.gz';
        return [
            'uuid' => $this->generate_uuid(),
            'timestamp' => Carbon::now()->timestamp,
            'date_time' => Carbon::now()->toDayDateTimeString(),
            'path' => $this->get_dump_path($file_name),
            'name' => $file_name
        ];
    }


    /**
     * @return string
     */
    private function make_file_name()
    {
        return 'dump_'.str_random(10).'__'.Carbon::now()->timestamp;
    }
}
