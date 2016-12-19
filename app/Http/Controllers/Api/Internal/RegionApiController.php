<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:15 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\RegionRepository;
use Eureka\Transformers\Internal\RegionCollectionTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class RegionApiController extends Controller
{
    /**
     * @var RegionRepository
     */
    private $repository;
    /**
     * @var Manager
     */
    private $fractal;

    /**
     * @param RegionRepository $repository
     * @param Manager $fractal
     */
    public function __construct(RegionRepository $repository, Manager $fractal){
        $this->repository = $repository;
        $this->fractal = $fractal;
    }

    public function all(Request $request)
    {
        return $this->repository->get_all($request);
    }

    public function get_districts($id, Request $request)
    {
        return $this->repository->get_districts($id, $request);
    }
}