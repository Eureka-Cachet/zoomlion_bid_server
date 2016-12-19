<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/10/2016
 * Time: 10:07 AM
 */

namespace Eureka\Repositories;


use clocking\Beneficiary;
use clocking\Department;
use clocking\Location;
use clocking\Module;
use Eureka\Helpers\CodeGenerator;
use Illuminate\Http\Request;
use Webpatser\Uuid\Uuid;

class ModuleRepository
{
    /**
     * @var Module
     */
    private $module;

    /**
     * @param Module $module
     */
    public function __construct(Module $module){
        $this->module = $module;
    }

    public function get_all_modules(Request $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->module->with('staff', 'location', 'leader', 'department')->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->module->with('staff', 'location', 'leader', 'department')->orderBy('id', 'asc');
        }

        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('code', 'like', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    public function get_module_staff($id, Request $request)
    {
        if ($request->has('sort')) {

            list($sortCol, $sortDir) = explode('|', $request->get('sort'));

            $query = Beneficiary::with(['rank', 'attendances'])->where('module_id', $id)
                ->orderBy($sortCol, $sortDir);

        } else {
            $query = Beneficiary::with(['rank', 'attendances'])->where('module_id', $id)
                ->orderBy('form_id', 'asc');
        }

        if ($request->exists('filter')) {

            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('full_name', 'like', $value);
//                    ->orWhere('form_id', 'like', $value);
            });

        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    public function add_new_module($payload)
    {
        $data = $this->prepare_data($payload);
        return $this->module->create($data);
    }

    /**
     * @param $payload
     * @return array
     */
    private function prepare_data($payload)
    {
        return [
            'code' => $this->make_code($payload),
            'uuid' => Uuid::generate(4),
            'location_id' => $payload['location_id'],
            'department_id' => $payload['department_id']
        ];
    }

    /**
     * @param $payload
     * @return string
     */
    private function make_code($payload)
    {
        $location_code = $this->get_location($payload['location_id'])->code;
        $department_code = $this->get_department($payload['department_id'])->code;
        $suffix = $this->generate_suffix($payload);
        return "{$location_code}{$department_code}{$suffix}";
    }

    private function get_location($location_id)
    {
        return Location::find($location_id);
    }

    private function get_department($department_id)
    {
        return Department::find($department_id);
    }

    /**
     * @param $payload
     * @return string
     */
    private function generate_suffix($payload)
    {
        $increment = 1;
        $last =  $this->module->all()
            ->where('location_id', $payload['location_id'])
            ->where('department_id', $payload['department_id'])
            ->sortByDesc('id')->first();
        if(! $last){
            return CodeGenerator::make($increment, 3);
        }
        $last_code = $last->code;
        $next_increment =  (int) substr($last_code, -5) + $increment;
        return CodeGenerator::make($next_increment, 3);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function remove_module($id)
    {
        return $this->module->find($id)->delete();
    }

}