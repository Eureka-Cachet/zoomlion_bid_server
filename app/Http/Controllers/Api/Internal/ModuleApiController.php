<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/10/2016
 * Time: 10:04 AM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\ModuleRepository;

class ModuleApiController extends Controller
{
    /**
     * @var ModuleRepository
     */
    private $moduleRepository;

    /**
     * @param ModuleRepository $moduleRepository
     */
    public function __construct(ModuleRepository $moduleRepository){
        $this->moduleRepository = $moduleRepository;
    }

    /**
     * @return mixed
     */
    public function all()
    {
        return $this->moduleRepository->get_all_modules(request());
    }

    /**
     * @param $id
     * @return mixed
     */
    public function staff($id)
    {
        return $this->moduleRepository->get_module_staff($id, request());
    }

    public function add()
    {
        if($this->moduleRepository->add_new_module(request()->all())){
            return $this->on_request_success();
        }

        return $this->on_request_failure();
    }

    public function delete($id)
    {
        if($this->moduleRepository->remove_module($id)){
            return $this->on_request_success();
        }
        return $this->on_request_failure();
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_request_success()
    {
        return response()->json([
            'success' => true
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_request_failure()
    {
        return response()->json([
            'success' => false
        ]);
    }
}