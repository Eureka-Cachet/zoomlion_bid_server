<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:14 PM
 */

namespace Eureka\Repositories;


use clocking\District;
use clocking\Region;
use Illuminate\Http\Request;

class RegionRepository
{
    /**
     * @var Region
     */
    private $region;

    /**
     * @param Region $region
     */
    public function __construct(Region $region){
        $this->region = $region;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function get_all(Request $request)
    {
        if($request->has('scope') && $request->get('scope') == 'employment'){
            $data = $this->region->all();
            return response()->json($data);
        }
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->region->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->region->orderBy('name', 'asc');
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

    public function get_districts($id, Request $request)
    {
        if($request->has('scope') && $request->get('scope') == 'employment'){
            $data = $this->region->where('id', $id)->first()->districts;
            return response()->json($data);
        }

        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = District::where('region_id', $id)->orderBy($sortCol, $sortDir);
        } else {
            $query = District::where('region_id', $id)->orderBy('name', 'asc');
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
}