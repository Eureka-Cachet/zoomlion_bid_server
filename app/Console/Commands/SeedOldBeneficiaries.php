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
    protected $signature = 'db:seed-old-beneficiaries';

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
        try{
            $file_path = $this->get_file();
            dispatch(new UploadOldBeneficiaries($file_path));
            $this->info("things were successful");
        }catch (\Exception $e){
            $this->error("Error Occurred " . $e->getMessage());
        }
    }

    /**
     * @return string
     */
    private function get_file()
    {
        $filename = base_path('test_old_bene.xlsx');
        if( !is_file($filename)){
            throw new FileNotFoundException($filename);
        }

        return $filename;
    }
}
