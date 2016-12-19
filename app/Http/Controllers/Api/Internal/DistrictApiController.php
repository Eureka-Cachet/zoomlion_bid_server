<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:15 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\DistrictRepository;
use Eureka\Transformers\Internal\DistrictCollectionTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class DistrictApiController extends Controller
{
    /**
     * @var DistrictRepository
     */
    private $repository;
    /**
     * @var Manager
     */
    private $fractal;

    /**
     * @param DistrictRepository $repository
     * @param Manager $fractal
     */
    public function __construct(DistrictRepository $repository, Manager $fractal){
        $this->repository = $repository;
        $this->fractal = $fractal;
    }

    public function all(Request $request)
    {
        if($request->get('scope') == 'employment'){
            $districts = $this->repository->get_districts_by_region(auth()->user()->region_id);
            return response()->json($districts)->setStatusCode(200);
        }
        $districts = $this->repository->get_all();
        return response()->json(
            $this->fractal->createData(new Collection($districts,
                new DistrictCollectionTransformer))->toArray()
        );
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function get_locations($id, Request $request)
    {
        return $this->repository->get_locations($id, $request);
    }

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function update_district($id, Request $request)
    {
        if(! $this->repository->update($id, $request->all())){
            return response()->json(['success' => false]);
        }else{
            return response()->json(['success' => true]);
        }
    }

    /**
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete_district($id, Request $request)
    {
        if(! $this->repository->delete($id)){
            return response()->json(['success' => false]);
        }else{
            return response()->json(['success' => true]);
        }
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add_new_district(Request $request)
    {
        $payload = $request->all();
        if(! $this->repository->add($payload)){
            return response()->json(['success' => false]);
        }else{
            return response()->json(['success' => true]);
        }
    }
}