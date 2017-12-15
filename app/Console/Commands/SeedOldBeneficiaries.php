<?php

namespace clocking\Console\Commands;

use clocking\Beneficiary;
use clocking\District;
use clocking\Jobs\UploadOldBeneficiaries;
use clocking\Rank;
use clocking\Region;
use clocking\SysImages;
use Eureka\Helpers\CodeGenerator;
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

        if($type == 'file'){
            $this->work_with_file();
        }else{
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
            $this->upload($file_path);
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
                $this->upload($file_path);
            }
            $this->info("things were successful");
        } catch (\Exception $e) {
            var_dump($e->getTraceAsString());
            $this->error("Error Occurred " . $e->getMessage());
        }
    }

    private function upload($file_name)
    {
        $this->info("started uploading -> {$file_name}");
        try{
            Excel::load($file_name, function($reader) use ($file_name){

                $reader->all()
                    ->map(function ($row) {
                    return [
                        "bid" => (int)array_last(explode("/", $row->id)),
                        "full_name" => $row->staffname,
                        "rank_id" => $this->get_rank_id($row->section),
                        "region_id" => $this->get_region_id($row->region),
                        "district_id" => $this->get_district_id($row->district),
                        "allowance" => $row->salary,
                        "bank_name" => $row->bank,
                        "account_number" => $row->account,
                        "phone_number" => $row->phone,
                        "surname" => $this->get_surname($row->staffname),
                        "forenames" => $this->get_forenames($row->staffname),
                        "uuid" => CodeGenerator::uuid()
                    ];
                })
                    ->each(function($b) use ($file_name){
                        $this->info("creating Beneficiary with BID -> {$b['bid']}");
                        $beneficiary = Beneficiary::create($b);
//                        $path_and_encoded = $this->get_path_and_encoded($beneficiary);
//
//                        $beneficiary->picture()->create([
//                            'path' => $path_and_encoded["path"],
//                            'encoded' => $path_and_encoded["encoded"]
//                        ]);
                        $this->info("done creating -> {$b['bid']}");
                    });
            });
            $this->info("finished uploading -> {$file_name}");
        } catch (\Exception $e){
            var_dump($e->getMessage());
            var_dump($e->getTrace());
            throw new $e;
        }
    }

    /**
     * @param $section
     * @return null
     */
    private function get_rank_id($section)
    {
        if(ends_with(strtolower($section), 's')){
            $section = substr($section, 0, -1);
        }
        $first = Rank::where('name', 'like', "{$section}%")->first();
        return $first ? $first->id : null;
    }

    /**
     * @param $region
     * @return null
     */
    private function get_region_id($region)
    {
        if(str_contains($region, "REGION")){
            $values = $this->get_firsts($region);
            $region = implode(" ", $values);
        }
        $first = Region::where('name', 'like', "%{$region}%")->first();
        return $first ? $first->id : null;
    }

    /**
     * @param $district
     * @return null
     */
    private function get_district_id($district)
    {
        $first = District::where('name', 'like', "%{$district}%")->first();
        return $first ? $first->id : null;
    }

    /**
     * @param $string
     * @return array
     */
    private function get_firsts($string)
    {
        $value = explode(" ", $string);
        $values = collect($value)->filter(function ($v, $k) use ($value) {
            return $k < collect($value)->count() - 1;
        })->toArray();
        return $values;
    }

    /**
     * @param $staffname
     * @return string
     */
    private function get_surname($staffname)
    {
        return collect(explode(" ", $staffname))->last();
    }

    /**
     * @param $staffname
     * @return string
     */
    private function get_forenames($staffname)
    {
        $values = $this->get_firsts($staffname);

        return implode(" ", $values);
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function get_path_and_encoded(Beneficiary $beneficiary)
    {
        $file = $this->get_image_file_and_content($beneficiary);
        if(!$file) return [
            'path' => 'not yet',
            'encoded' => $this->get_zoom_logo()
        ];
        $encoded = base64_encode($file["content"]);
        return [
            'path' => $file["path"],
            'encoded' => $encoded
        ];
    }

    /**
     * @param Beneficiary $beneficiary
     * @return array
     */
    private function get_image_file_and_content(Beneficiary $beneficiary)
    {
        $image_folder = $this->get_image_folder();
        $current_filename = $this->get_current_image_name($beneficiary->bid);
        $new_image_path = $this->get_new_image_path($beneficiary);
        $file_content = $this->get_image_contents($image_folder, $current_filename);
        if(!$file_content) return null;
        file_put_contents($new_image_path, $file_content);
        return ['path' => $new_image_path, 'content' => $file_content];
    }

    /**
     * @return string
     */
    private function get_image_folder()
    {
        $filename = base_path('StaffPicture');
        if(!is_dir($filename)) throw new FileNotFoundException($filename);
        return $filename;
    }

    /**
     * @param $bid
     * @return string
     */
    private function get_current_image_name($bid)
    {
        return "{$bid}.jpg";
    }

    /**
     * @param $beneficiary
     * @return string
     */
    private function get_new_image_path($beneficiary)
    {
        $folder = storage_path('app/beneficiaries/pictures');
        $filename = str_slug($beneficiary->full_name) . "_" . $beneficiary->bid;
        return "{$folder}/{$filename}.jpg";
    }

    /**
     * @param $image_folder
     * @param $current_filename
     * @return string
     */
    private function get_image_contents($image_folder, $current_filename)
    {
        $current_file_path = "{$image_folder}/{$current_filename}";
        if(!is_file($current_file_path)) return null;
        return file_get_contents($current_file_path);
    }

    /**
     * @return mixed
     */
    private function get_zoom_logo()
    {
        return SysImages::where("name", "ZoomLionLogo")->first()->encoded;
    }
}
