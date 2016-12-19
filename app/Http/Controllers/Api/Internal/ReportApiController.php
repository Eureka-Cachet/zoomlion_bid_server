<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/18/2016
 * Time: 4:32 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use clocking\Jobs\GenerateReport;
use Illuminate\Support\Collection;

class ReportApiController extends Controller
{
    public function __construct(){}

    public function generate()
    {
//        dd(request()->all());
        try{
            dispatch(new GenerateReport(collect(request()->all()), auth()->user()));
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param Collection $data
     * @return array|null
     */
    private function prepare_data(Collection $data)
    {
        switch($data->get('type')){
            case 'staff count':
                return $this->prepare_staff_count_data($data);
            case 'staff enrolment':
                return $this->prepare_enrollment_forms_data($data);
            case 'staff information':
                return $data->toArray();
            case 'staff attendance':
                return $data->toArray();
            case 'staff attendances':
                return $data->toArray();
            default:
                return null;
        }
    }

    /**
     * @param Collection $data
     * @return array
     */
    private function prepare_staff_count_data(Collection $data)
    {
        return [
            'level' => $this->stringfy_level($data->get('level')),
            'region_id' => $data->get('region'),
            'district_id' => $data->get('district'),
            'location_id' => $data->get('location'),
            'department_id' => $data->get('module'),
            'file_format' => $data->get('file_format'),
            'type' => $data->get('type')
        ];
    }

    /**
     * @param Collection $data
     * @return array
     */
    private function prepare_enrollment_forms_data(Collection $data)
    {
        return [];
    }

    private function prepare_staff_information_data(Collection $data)
    {
        return [
            'level' => $this->stringfy_level($data->get('level')),
            'region_id' => $data->get('region'),
            'district_id' => $data->get('district'),
            'location_id' => $data->get('location'),
            'type' => $data->get('type')
        ];
    }

    /**
     * @param $level_id
     * @return string
     */
    private function stringfy_level($level_id)
    {
        switch($level_id){
            case 1:
                return "national";
                break;
            case 2:
                return "region";
                break;
            case 3:
                return "district";
            case 4:
                return "location";
                break;
            case 5:
                return "module";
                break;
            default:
                return "national";
        }
    }

    private function prepare_staff_attendance_data(Collection $data)
    {
        return $data;
    }

    private function prepare_staff_attendances_data($data)
    {
    }
}