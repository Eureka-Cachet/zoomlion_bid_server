<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 12:28 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\DepartmentRepository;
use Illuminate\Http\Request;

class DepartmentApiController extends Controller
{
    /**
     * @var DepartmentRepository
     */
    private $repository;

    /**
     * @param DepartmentRepository $repository
     */
    public function __construct(DepartmentRepository $repository){
        $this->repository = $repository;
    }

    public function all(){
        return response()->json([
            'data' => $this->repository->all()
        ]);
    }

    public function get_staff($id, Request $request){
        return $this->repository->get_staff($id, $request);
    }
}