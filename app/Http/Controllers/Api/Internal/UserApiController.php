<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 1:55 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\District;
use clocking\Http\Controllers\Controller;
use clocking\User;
use Eureka\Repositories\DeviceRepository;
use Eureka\Repositories\UsersRepository;
use Eureka\Transformers\Internal\UserCollectionTransformer;
use Illuminate\Database\QueryException;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;

class UserApiController extends Controller
{
    /**
     * @var UsersRepository
     */
    private $repository;
    /**
     * @var Manager
     */
    private $fractal;
    /**
     * @var DeviceRepository
     */
    private $deviceRepository;

    /**
     * @param UsersRepository $repository
     * @param Manager $fractal
     * @param DeviceRepository $deviceRepository
     */
    public function __construct(UsersRepository $repository, Manager $fractal, DeviceRepository $deviceRepository){
        $this->repository = $repository;
        $this->fractal = $fractal;
        $this->deviceRepository = $deviceRepository;
    }

    public function all()
    {
        if(request()->get('status') == 'free' && request()->get('role') == 'supervisor'){
            $free_supervisor = $this->repository->free_supervisor();
//            dd($free_supervisor);
            return $free_supervisor;
        }

        $paginator = $this->get_paginated_users(request());
        return response()->json(
            $paginator
        )->header('Access-Control-Allow-Origin', '*')->header('Access-Control-Allow-Methods', 'GET');
    }

    public function single($id)
    {
        $user = $this->repository->single_user($id);
        $user = $this->fractal->createData(new Item($user, new UserCollectionTransformer))->toArray();
//        dd($user['data']);
        return $user['data'];
    }

    public function add(Request $request)
    {
        try{
            $this->guardAgainstInvalidData($request->all());
        }catch (\Exception $e){
            throw $e;
//            return $this->on_operation_failed();
        }

        try{
            $user = $this->repository->add_user($request->all());
            if(! $user){
                return $this->on_operation_failed();
            }
            return $this->on_operation_succeeded();
        }catch (QueryException $e){
            throw $e;
//            return $this->on_operation_failed();
        }
    }

    public function update($id, Request $request)
    {
        $updated = $this->repository->update_user_information($id, $request->all());
        if(! $updated ){
            return $this->on_operation_failed();
        }
        return $this->on_operation_succeeded();
    }

    public function reset($id)
    {
        $restored = $this->repository->restore_user($id);
        if(! $restored){
            return $this->on_operation_failed();
        }
        return $this->on_operation_succeeded();
    }

    public function delete($id, Request $request)
    {
        $removed = $this->repository->remove_user($id);
        if(! $removed){
            return response()->json([
                'success' => false
            ]);
        }
        return response()->json([
            'success' => true
        ]);
    }

    private function get_paginated_users($request)
    {
        $query = User::with('roles')->where('id', '!=', auth()->user()->id);

        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
//            $query = User::with('roles')->orderBy($sortCol, $sortDir);
            $query = $query->orderBy($sortCol, $sortDir);
//                ->whereHas('roles', function($query){
//                    $query->where('id', '!=', auth()->user()->roles->first()->id);
//                });
//                ->where('role_id', '!=', auth()->user()->roles->first()->id);
        } else {
            $query = $query->orderBy('id', 'asc');
//                ->whereHas('roles', function($query){
//                    $query->where('id', '!=', auth()->user()->roles->first()->id);
//                });
//                ->where('role_id', '!=', auth()->user()->roles->first()->id);
        }

        if ($request->exists('filter')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->filter}%";
                $q->where('full_name', 'like', $value)
                    ->orWhere('username', 'like', $value);
//                    ->orWhere('email', 'like', $value);
            });
        }

        if(auth()->user()->roles->first()->id != 1){
            $query->whereHas('roles', function($query){
                $query->where('id', '!=', 1);
            });
//            $query->where('role_id', '!=', 1);
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;
        $data = $query->paginate($perPage);
        return $data;
    }

    /**
     * @param null $msg
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_operation_failed($msg = null)
    {
        return response()->json([
            'success' => false,
            'message' => $msg
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_operation_succeeded()
    {
        return response()->json([
            'success' => true
        ]);
    }

    /**
     * @param $data
     * @return bool
     * @throws \Exception
     */
    private function guardAgainstInvalidData($data)
    {
        $data = collect($data);
        if($this->name_is_not_valid($data->get('full_name'))){
            throw new \Exception('Invalid Name');
        }
        if($data->has('district_id')){
            try{
                return $this->verify_district_id($data);
            }catch (\Exception $e){
                throw $e;
            }
        }
        return true;
    }

    /**
     * @param $d_id
     * @param $r_id
     * @return bool
     */
    private function is_valid($d_id, $r_id)
    {
        $district_region_id = District::find($d_id)->region_id;
        if($district_region_id != $r_id){
            return false;
        }
        return true;
    }

    /**
     * @param Collection $data
     * @return bool
     * @throws \Exception
     */
    private function verify_district_id(Collection $data)
    {
        $d_id = $data->get('district_id');
        $r_id = $data->get('region_id');
        if(! $this->is_valid($d_id, $r_id)){
            throw new \Exception('Invalid Data');
        }

        return true;
    }

    /**
     * @param $full_name
     * @return mixed
     */
    private function name_is_not_valid($full_name)
    {
        if($this->is_not_of_valid_format($full_name)){
            return true;
        }
        return Validator::make(['full_name' => $full_name], [
            'full_name' => 'unique:users'
        ])->fails();
    }

    /**
     * @param $full_name
     * @return bool
     */
    private function is_not_of_valid_format($full_name)
    {
        if(collect(explode(" ", $full_name))->count() > 1){
            return false;
        }
        return true;
    }
}