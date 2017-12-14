<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/11/2016
 * Time: 10:45 AM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\DeviceRepository;
use Eureka\Repositories\UsersRepository;
use Eureka\Transformers\Internal\DeviceCollectionTransformer;
use Eureka\Transformers\Internal\DeviceLogsCollectionTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Pagination\IlluminatePaginatorAdapter;
use League\Fractal\Resource\Collection;

class DeviceApiController extends Controller
{
    /**
     * @var DeviceRepository
     */
    private $repository;
    /**
     * @var UsersRepository
     */
    private $usersRepository;
    /**
     * @var Manager
     */
    private $manager;


    /**
     * @param DeviceRepository $repository
     * @param UsersRepository $usersRepository
     * @param Manager $manager
     */
    public function __construct(DeviceRepository $repository, UsersRepository $usersRepository, Manager $manager){
        $this->repository = $repository;
        $this->usersRepository = $usersRepository;
        $this->manager = $manager;
    }

    public function all()
    {
        if(request()->get('status') == 'inactive'){
            return response()->json($this->repository->get_inactive_dev())->setStatusCode(200);
        }

        if(request()->get('status') == 'active'){
            return response()->json($this->repository->get_active_dev())->setStatusCode(200);
        }

        if(request()->get('status') == 'all'){
            return response()->json($this->repository->get_all_dev())->setStatusCode(200);
        }

        $active_devices = $this->repository->get_active_devices(request());
        $resource = new Collection($active_devices, new DeviceCollectionTransformer);

        $transformed_data = $this->manager
            ->createData($resource)
            ->toArray()["data"];

        $active_devices = collect($active_devices)->toArray();
        $active_devices["data"]  = $transformed_data;

        return $active_devices;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function add(Request $request)
    {
        $this->validate($request, [
            'code' => 'required|unique:devices|min:15|max:15'
        ]);
        $device = $this->repository->add($request->all());
        return response()->json($device);
    }

    /**
     * @param $id
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function update($id, Request $request)
    {
        if($request->get('action') == 'map'){
            $this->repository->map_new_device(request()->all());
            return $this->on_request_success($this->more_free_supervisor());
        }


        return $this->on_request_failed();
    }

    /**
     * @param $id
     * @return mixed
     */
    public function show($id)
    {
        $logs = $this->repository->get_all_logs_for($id, request());
        $transformed_logs = $this->manager
            ->createData(new Collection($logs, new DeviceLogsCollectionTransformer))
            ->toArray()["data"];
        $logs = collect($logs)->toArray();
        $logs["data"] = $transformed_logs;
        return $logs;
    }

    public function logs($id)
    {
        return $this->repository->get_all_logs_for($id, request());
    }

    /**
     * @param $id
     * @return \Illuminate\Http\JsonResponse
     */
    public function delete($id)
    {
        if($this->repository->remove_device($id)){
            return $this->on_request_success();
        }

        return $this->on_request_failed();
    }

    /**
     * @param bool $more
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_request_success($more = false)
    {
        return response()->json([
            'success' => true,
            'more' => $more
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_request_failed()
    {
        return response()->json([
            'success' => false
        ]);
    }

    /**
     * @return bool
     */
    private function more_free_supervisor()
    {
        if($this->usersRepository->free_supervisor()){
            return true;
        }
        return false;
    }
}