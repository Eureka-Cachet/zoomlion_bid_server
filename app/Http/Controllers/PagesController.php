<?php

namespace clocking\Http\Controllers;


use Eureka\Repositories\BackupScheduleRepository;
use Eureka\Repositories\DbBackupRepository;
use Eureka\Repositories\UsersRepository;

class PagesController extends Controller
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
     * @var UsersRepository
     */
    private $usersRepository;

    /**
     * @param DbBackupRepository $dbBackupRepository
     * @param BackupScheduleRepository $backupScheduleRepository
     * @param UsersRepository $usersRepository
     */
    public function __construct(DbBackupRepository $dbBackupRepository,
                                BackupScheduleRepository $backupScheduleRepository, UsersRepository $usersRepository){
        $this->dbBackupRepository = $dbBackupRepository;
        $this->backupScheduleRepository = $backupScheduleRepository;
        $this->usersRepository = $usersRepository;
    }

    public function index()
    {
        return redirect()->route('dashboard');
    }

    public function dashboard()
    {
        return view('dashboard.dashboard')->with('filename', 'link');
    }

    public function locations()
    {
        return view('locations.index');
    }

    public function devices()
    {
        return view('devices.index');
    }

    public function clocking()
    {
        return view('departments.index');
    }

    public function reports()
    {
        return view('reports.index');
    }

    public function employment()
    {
        return view('employment.index');
    }

    public function enrolment()
    {
        return view('enrolment.index');
    }

    public function backups()
    {
        return view('backups.index');
    }

    public function settings()
    {
        return view('settings.index');
    }

    public function logs()
    {
        return view('logs.index');
    }

    /**
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    public function download()
    {
//        dd(request()->all());
        $filename = request()->get('filename');
        $file_type = request()->get('type');
        $report_folder = request()->get('folder');

        if(is_null($filename) || is_null($file_type)){
            return response()->json(['success' => false]);
        }

        return $this->download_file($file_type, $filename, $report_folder);
    }

    /**
     * @param $file_type
     * @param $filename
     * @param null $folder
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\BinaryFileResponse
     */
    private function download_file($file_type, $filename, $folder = null)
    {
        try{
            switch ($file_type) {
                case "form":
                    return response()->download(storage_path("app/forms/{$filename}"));
                case "report":
                    return response()->download(storage_path("app/reports/{$folder}/{$filename}"));
                default:
                    return response()->json(['success' => false]);
            }
        }catch (\Exception $e){
            dd($e->getMessage());
            return response()->json(['success' => false]);
        }
    }
}
