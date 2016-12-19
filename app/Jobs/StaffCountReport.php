<?php

namespace clocking\Jobs;

use clocking\Country;
use clocking\District;
use clocking\Events\ReportWasGenerated;
use clocking\Location;
use clocking\Module;
use clocking\Region;
use Barryvdh\DomPDF\PDF;
use Carbon\Carbon;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Auth\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Maatwebsite\Excel\Facades\Excel;
use Webpatser\Uuid\Uuid;

class StaffCountReport extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    const STAFF_COUNT_TEMPLATE_PDF = "templates.pdfs.staff_count_template";
    const STAFF_COUNT_TEMPLATE_EXCEL = "templates.sheets.staff_count_template";
    /**
     * @var
     */
    private $data;
    /**
     * @var
     */
    private $user;

    /**
     * Create a new job instance.
     * @param $data
     * @param $user
     */
    public function __construct(Collection $data, User $user)
    {
        $this->data = $data;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @param PDF $pdf
     * @throws \Exception
     */
    public function handle(PDF $pdf)
    {
        try{
            $data = $this->get_data_for_template();
            $filename = $this->make_report($pdf, $data);
            event(new ReportWasGenerated($filename, $this->user));
        }catch (\Exception $e){
            throw $e;
        }
    }


    /**
     * @return array
     */
    private function get_data_for_template()
    {
        $data = [];
        switch($this->data->get('type')){
            case 'national':
                $data = $this->get_national_staff_count();
                break;
            case 'region':
                $data = $this->get_regional_staff_count();
                break;
            case 'district':
                $data = $this->get_district_staff_count();
                break;
            case 'location':
                $data = $this->get_community_staff_count();
                break;
        }
        return $data;
    }

    /**
     * @param $PDF
     * @param $data
     * @return null|string
     */
    private function make_report($PDF, $data)
    {
        $filename = null;
        switch(strtolower($this->data->get('file_format'))){
            case 'pdf':
                $filename = $this->make_pdf_report($PDF, $data);
                break;
            case 'xlsx':
                $filename = $this->make_excel_report($data);
                break;
        }
        return $filename;
    }

    /**
     * @return array
     */
    private function get_national_staff_count()
    {
        $country = $this->get_location('country');
        $data = $country->regions->map(function($region){
            return [
                'id' => $region->id,
                'name' => strtoupper($region->name),
                'total_staff' => (int) $region->beneficiaries->count()
            ];
        })->all();
        return $this->package_data($data, "country");
    }

    /**
     * @return array
     */
    private function get_regional_staff_count()
    {
        $region = $this->get_location('region');
        $data = $region->districts->map(function($district){
            return [
                'id' => $district->id,
                'name' => strtoupper($district->name),
                'total_staff' => (int) $district->beneficiaries->count()
            ];
        })->all();
        return $this->package_data($data, "region");
    }

    /**
     * @return array
     */
    private function get_district_staff_count()
    {
        $district = $this->get_location('district');
        $data = $district->locations->map(function($location){
            return [
                'id' => $location->id,
                'name' => strtoupper($location->name),
                'total_staff' => (int) $location->beneficiaries->count()
            ];
        })->all();
        return $this->package_data($data, 'district');
    }

    /**
     * @return array
     */
    private function get_community_staff_count()
    {
        $location = $this->get_location('location');
        $data = $location->modules->map(function($module){
            return [
                'id' => $module->department->id,
                'name' => strtoupper($module->department->name),
                'total_staff' => (int) $module->beneficiaries->count()
            ];
        })->all();
        return $this->package_data($data, 'location');
    }

    /**
     * @param $data
     * @param $location_type
     * @return array
     */
    private function package_data($data, $location_type)
    {
        return [
            'locations' => $data,
            'location_type' => $location_type,
            'location_name' => strtoupper($this->get_location($location_type)->name),
            'all_total' => (int)$this->get_location($location_type)->beneficiaries->count()
        ];
    }

    /**
     * @param $location_type
     * @return mixed
     */
    private function get_location($location_type)
    {
        switch(strtolower($location_type)){
            case 'country':
                return Country::find(1);
                break;
            case 'district':
                return District::find($this->data->get('district_id'));
                break;
            case 'location':
                return Location::find($this->data->get('location_id'));
                break;
            case 'region':
                return Region::find($this->data->get('region_id'));
                break;
        }
        return null;
    }

    /**
     * @param $PDF
     * @param $data
     * @return string
     */
    private function make_pdf_report(PDF $PDF, $data)
    {
        $filename = $this->make_filename();
        $PDF->loadView(self::STAFF_COUNT_TEMPLATE_PDF, $data)
            ->save(storage_path("app/reports/{$filename}.pdf"));
        return $filename;
    }

    /**
     * @return string
     * @throws \Exception
     */
    private function make_filename()
    {
        $uuid = Uuid::generate(4);
        $now = Carbon::now()->timestamp;
        return "{$now}_{$uuid}";
    }

    /**
     * @param $data
     * @return string
     */
    private function make_excel_report($data)
    {
        $filename = $this->make_filename();
        Excel::create($filename, function($excel) use($filename, $data){
            $excel->sheet($filename, function($sheet) use($data){
                $sheet->loadView(self::STAFF_COUNT_TEMPLATE_EXCEL, $data);
            });
        })->store('xlsx', storage_path('app/reports'));
        return $filename;
    }

}
