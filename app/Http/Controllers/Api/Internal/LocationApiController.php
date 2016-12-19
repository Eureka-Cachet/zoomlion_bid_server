<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:16 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use clocking\Location;
use clocking\Module;
use Eureka\Repositories\LocationRepository;
use Eureka\Transformers\Internal\LocationCollectionTransformer;
use Eureka\Transformers\Internal\ModuleCollectionTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class LocationApiController extends Controller
{
    /**
     * @var LocationRepository
     */
    private $repository;
    /**
     * @var Manager
     */
    private $fractal;

    /**
     * @param LocationRepository $repository
     * @param Manager $fractal
     */
    public function __construct(LocationRepository $repository, Manager $fractal){
        $this->repository = $repository;
        $this->fractal = $fractal;
    }

    public function all()
    {
        $locations = $this->repository->get_all();
        return response()->json(
            $this->fractal->createData(new Collection($locations,
                new LocationCollectionTransformer))->toArray()
        );
    }

    public function modules($id, Request $request)
    {
        $modules = [];
        if($request->has('scope')){
            if($request->get('scope') == 'employment'){
                $modules = $this->repository->get_modules($id);
            }
        }

        elseif ($request->has('sort')){
            $modules = $this->get_paginated_modules($id, $request);
            return response()->json($modules);
        }

        return response()->json(
            $this->fractal->createData(new Collection($modules,
                new ModuleCollectionTransformer))->toArray()
        );
    }

    /**
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update_location($id, Request $request)
    {
        if(! $this->repository->update($id, $request->all())){
            return response()->json([
                'success' => false
            ]);
        }
        return response()->json(['success' => true]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_location($id, Request $request)
    {
        if(! $this->repository->delete_location($id)){
            return response()->json(['success' => false]);
        }
        return response()->json(['success' => true]);
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add_new_location(Request $request)
    {
        if(! $this->repository->add($request->all())){
            return response()->json(['success' => false]);
        }
        return response()->json(['success' => true]);
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    private function get_paginated_modules($id, Request $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = Module::with('staff', 'location', 'leader', 'department')
                ->where('location_id', $id)
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = Module::with('staff', 'location', 'leader', 'department')
                ->where('location_id', $id)
                ->orderBy('id', 'asc');
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
}