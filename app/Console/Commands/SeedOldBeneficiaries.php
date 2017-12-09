<?php

namespace clocking\Console\Commands;

use clocking\Jobs\UploadOldBeneficiaries;
use Eureka\Repositories\BeneficiaryRepository;
use Illuminate\Console\Command;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

class SeedOldBeneficiaries extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'db:seed-old-beneficiaries 
        {name : The excel file name. File should be placed in the root directory.}
        {--type= : Either file or folder.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Command to upload old beneficiaries data into the system.';
    /**
     * @var BeneficiaryRepository
     */
    private $beneficiaryRepository;

    /**
     * Create a new command instance.
     *
     * @param BeneficiaryRepository $beneficiaryRepository
     */
    public function __construct(BeneficiaryRepository $beneficiaryRepository)
    {
        parent::__construct();
        $this->beneficiaryRepository = $beneficiaryRepository;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $type = $this->option('type');
//        dd($type, $this->argument('name'));

        if($type == 'file'){
//            dd('file');
            $this->work_with_file();
        }else{
//            dd('folder');
            $this->work_with_folder();
        }
    }

    /**
     * @param $filename
     * @param null $folder
     * @return string
     */
    private function get_file($filename, $folder = null)
    {
        $file_path = null;
        if(!is_null($folder)){
            $file_path = base_path("{$folder}/{$filename}");
        }else{
            $file_path = base_path($filename);
        }
        if( !is_file($file_path)){
            throw new FileNotFoundException($file_path);
        }

        return $file_path;
    }

    /**
     * @param $folder_name
     * @return string
     */
    private function get_folder($folder_name)
    {
        $folder_path = base_path($folder_name);
        if( !is_dir($folder_path)){
            throw new FileNotFoundException($folder_path);
        }

        return $folder_path;
    }

    /**
     * @param $folder_name
     * @return array
     */
    private function get_files_from($folder_name)
    {
        $folder_path = $this->get_folder($folder_name);
        return array_diff(scandir($folder_path), array('..', '.'));
    }

    private function work_with_file()
    {
        $filename = $this->argument('name');
        try {
            $file_path = $this->get_file($filename);
            dispatch(new UploadOldBeneficiaries($file_path));
            $this->info("things were successful");
        } catch (\Exception $e) {
            $this->error("Error Occurred " . $e->getMessage());
        }
    }

    private function work_with_folder()
    {
        $folder_name = $this->argument('name');
        try {
            $files = $this->get_files_from($folder_name);
            foreach ($files as $file) {
                $file_path = $this->get_file($file, $folder_name);
                dispatch(new UploadOldBeneficiaries($file_path));
            }
            $this->info("things were successful");
        } catch (\Exception $e) {
            $this->error("Error Occurred " . $e->getMessage());
        }
    }
}
