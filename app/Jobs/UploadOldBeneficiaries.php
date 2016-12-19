<?php

namespace clocking\Jobs;

use clocking\Beneficiary;
use clocking\District;
use clocking\Rank;
use clocking\Region;
use clocking\SysImages;
use Eureka\Helpers\CodeGenerator;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Maatwebsite\Excel\Facades\Excel;
use Symfony\Component\HttpFoundation\File\Exception\FileNotFoundException;

class UploadOldBeneficiaries extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $file_name;

    /**
     * Create a new job instance.
     *
     * @param $file_name
     */
    public function __construct($file_name)
    {
        $this->file_name = $file_name;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        Excel::load($this->file_name, function($reader){

            $data = $reader->all()->map(function ($row) {
                return [
                    "bid" => (int)$row->staffid,
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
                ->each(function($b){
                $beneficiary = Beneficiary::create($b);
                $path_and_encoded = $this->get_path_and_encoded($beneficiary);

                $beneficiary->picture()->create([
                    'path' => $path_and_encoded["path"],
                    'encoded' => $path_and_encoded["encoded"]
                ]);
            });
        });
    }

    /**
     * @param $section
     * @return null
     */
    private function get_rank_id($section)
    {
        $first = Rank::where('name', 'like', "%{$section}%")->first();
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
     * @return mixed
     */
    private function get_zoom_logo()
    {
        return SysImages::where("name", "ZoomLionLogo")->first()->encoded;
    }
}
