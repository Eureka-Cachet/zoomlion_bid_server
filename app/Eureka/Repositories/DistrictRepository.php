<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:14 PM
 */

namespace Eureka\Repositories;


use clocking\District;
use clocking\Location;
use Illuminate\Http\Request;

class DistrictRepository
{
    /**
     * @var District
     */
    private $district;

    /**
     * @param District $district
     */
    public function __construct(District $district){
        $this->district = $district;
    }

    public function get_all()
    {
        return $this->district->all();
    }

    public function get_districts_by_region($region_id){
        $districts = $this->district->where('region_id', $region_id)->get();
        return $districts;
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function get_locations($id,Request $request)
    {
        if($request->has('scope')){
            return Location::where('district_id', $id)->get();
        }

        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = Location::where('district_id', $id)->orderBy($sortCol, $sortDir);
        } else {
            $query = Location::where('district_id', $id)->orderBy('name', 'asc');
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

    /**
     * @param $id
     * @param array $payload
     * @return mixed
     */
    public function update($id, array $payload)
    {
        $district = $this->get_district_by_id($id);
        return $district->update($payload);
    }

    /**
     * @param $id
     * @return mixed
     */
    private function get_district_by_id($id)
    {
        return $this->district->find($id);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete($id)
    {
        $district = $this->get_district_by_id($id);
        return $district->delete();
    }

    /**
     * @param array $payload
     * @return static
     */
    public function add(array $payload)
    {
        return $this->district->create($payload);
    }

    /**
     * @param $uuid
     * @return mixed
     */
    private function get_district_by_uuid($uuid)
    {
        return $this->district->where('uuid', $uuid)->first();
    }
}