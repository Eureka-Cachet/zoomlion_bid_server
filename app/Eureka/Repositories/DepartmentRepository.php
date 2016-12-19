<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 12:29 PM
 */

namespace Eureka\Repositories;


use clocking\Beneficiary;
use clocking\Department;
use Illuminate\Http\Request;

class DepartmentRepository
{
    /**
     * @var Department
     */
    private $department;

    /**
     * @param Department $department
     */
    public function __construct(Department $department){
        $this->department = $department;
    }

    public function get_all(Request $request){

        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = Department::with('staff', 'location')->orderBy($sortCol, $sortDir);
        } else {
            $query = Department::with('staff', 'location')->orderBy('id', 'asc');
        }

        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('name', 'like', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    public function get_staff($id, Request $request){

        if ($request->has('sort')) {

            list($sortCol, $sortDir) = explode('|', $request->get('sort'));

            $query = Beneficiary::with('attendances')->where('location_id', $id)->orderBy($sortCol, $sortDir);

        } else {
            $query = Beneficiary::with('attendances')->where('location_id', $id)->orderBy('name', 'asc');
        }

        if ($request->exists('filter')) {

            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('name', 'like', $value)
                    ->orWhere('form_id', 'like', $value);
            });

        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    public function all(){
        return $this->department->all();
    }
}