<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/4/2016
 * Time: 9:11 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use clocking\Jobs\Backup;
use clocking\Jobs\BackupRestore;
use Eureka\Helpers\ScheduleActivator;
use Eureka\Repositories\BackupScheduleRepository;
use Eureka\Repositories\DbBackupRepository;
use Illuminate\Contracts\Filesystem\Filesystem;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Webpatser\Uuid\Uuid;

class DbOperationApiController extends Controller
{
    /**
     * @var DbBackupRepository
     */
    private $dbBackupRepository;
    /**
     * @var BackupScheduleRepository
     */
    private $backupScheduleRepository;

    /**
     * @param DbBackupRepository $dbBackupRepository
     * @param BackupScheduleRepository $backupScheduleRepository
     */
    public function __construct(DbBackupRepository $dbBackupRepository,
                                BackupScheduleRepository $backupScheduleRepository){
        $this->dbBackupRepository = $dbBackupRepository;
        $this->backupScheduleRepository = $backupScheduleRepository;
    }


    public function get_all_dumps(Request $request)
    {
        return $this->dbBackupRepository->get_paginated_dumps($request);
    }

    /**
     *
     */
    public function backup()
    {
        try{
            $job = new Backup($this->get_user_channel());
            $this->dispatch($job);
            return $this->on_operation_succeeded();
        }catch (\Exception $e){
            return $this->on_operation_failed();
        }
    }

    /**
     * @param $dump_name
     * @return \Illuminate\Http\JsonResponse
     */
    public function restore($dump_name)
    {
        try{
            $dump_key = $this->get_dump_key($dump_name);
            $job = new BackupRestore($dump_key, $this->get_user_channel());
            $this->dispatch($job);
            return $this->on_operation_succeeded();
        }catch (\Exception $e){
            return $this->on_operation_failed();
        }
    }

    /**
     * @param $dump_key
     * @return \Illuminate\Http\JsonResponse
     * @throws \Exception
     */
    public function delete_backup($dump_key)
    {
        if($this->dbBackupRepository->delete($dump_key)){
            try{
                $dump_name = $dump_key.".sql.gz";
                if($this->dbBackupRepository->delete_dump_file($dump_name)){
                    return $this->on_operation_succeeded();
                }
            }catch (\Exception $e){
                throw $e;
            }
        }
        return $this->on_operation_failed();
    }

    public function all_schedules()
    {
        return $this->backupScheduleRepository
            ->get_all("db_schedule_")->values()->toJson();
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     * @internal param $frequency
     */
    public function schedule(Request $request)
    {
        $frequency = $request->get('frequency');
        try{
            (new ScheduleActivator($frequency))->activate();
            $schedule = $this->persist_info($frequency);
            return response()->json(['success' => true, 'schedule' => $schedule]);
        }catch (\Exception $e){
            return $this->on_operation_failed();
        }

    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_schedule(Request $request)
    {
        try{
            (new ScheduleActivator($request->get('frequency')))->deactivate();
            $this->backupScheduleRepository->delete($request->get('schedule_key'));
            return response()->json(['success' => true]);
        }catch (\Exception $e){
            return response()->json(['success' => false]);
        }
    }


    public function remove_lot()
    {
        $names = explode(',', request()->get('dumps'));
        if(is_null($names)){
            return $this->on_operation_failed();
        }

        if( ! $this->dbBackupRepository->delete_all_bad_dumps($names)){
            return $this->on_operation_failed();
        }

        return $this->on_operation_succeeded();
    }

    /**
     * @param $frequency
     * @return bool|\Illuminate\Support\Collection
     */
    private function persist_info($frequency)
    {
        $schedule_key = $this->get_frequency_key($frequency);
        $data = $this->get_frequency_data($frequency, $schedule_key);
        return $this->backupScheduleRepository->save($schedule_key, $data);
    }

    /**
     * @param $frequency
     * @return string
     */
    private function get_frequency_key($frequency)
    {
        return "db_schedule_".$frequency."_schedule";
    }

    /**
     * @param $frequency
     * @param $schedule_key
     * @return array
     */
    private function get_frequency_data($frequency, $schedule_key)
    {
        return [
            'frequency' => $frequency,
            'schedule_key' => $schedule_key,
        ];
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_operation_failed()
    {
        return response()->json(['success' => false]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_operation_succeeded()
    {
        return response()->json(['success' => true]);
    }

    /**
     * @param $dump_name
     * @return mixed
     */
    private function get_dump_key($dump_name)
    {
        return explode('.', $dump_name)[0];
    }

    /**
     * @return string
     */
    private function get_user_channel()
    {
        $user = auth()->user();
        if($user == null){
            auth()->logout();
        }
        return "staff_".auth()->user()->uuid.'_channel';
    }

    /**
     * @param $dump_key
     * @return bool
     * @throws \Exception
     */
    private function delete_file($dump_key)
    {
        $file_path = $this->get_file_path($dump_key);
        try{
            Storage::delete($file_path);
            return true;
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param $dump_key
     * @return string
     */
    private function get_file_path($dump_key)
    {
        return storage_path("app/backups/{$dump_key}.sql.gz");
    }
}