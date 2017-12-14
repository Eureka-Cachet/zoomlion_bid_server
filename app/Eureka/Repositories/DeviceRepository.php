<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/11/2016
 * Time: 10:46 AM
 */

namespace Eureka\Repositories;


use clocking\Device;
use clocking\DeviceHistory;
use clocking\DeviceMapping;
use clocking\User;
use Illuminate\Http\Request;

class DeviceRepository
{
    /**
     * @var Device
     */
    private $device;
    /**
     * @var DeviceHistory
     */
    private $history;

    /**
     * @param Device $device
     * @param DeviceHistory $history
     */
    public function __construct(Device $device, DeviceHistory $history){
        $this->device = $device;
        $this->history = $history;
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function get_active_devices(Request $request)
    {
        $query = $this->device->with(['clocks', 'supervisor', 'supervisor.location'])
            ->where('active', true);

        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query
                ->orderBy($sortCol, $sortDir);
        } else {
            $query
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

    /**
     * @param $id
     * @param Request $request
     * @return mixed
     */
    public function get_single_device($id, Request $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->device->with('clocks', 'supervisor', 'supervisor.location', 'logs')
                ->find($id)
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->device->with('clocks', 'supervisor', 'supervisor.location', 'logs')
                ->find($id)
                ->orderBy('id', 'asc');
        }

//        if ($request->exists('filter')) {
//            $query->where(function($q) use($request) {
//                $value = "%{$request->filter}%";
//                $q->where('code', 'like', $value);
//            });
//        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    /**
     * @param array $payload
     */
    public function map_new_device(array $payload)
    {
        $user = User::find($payload["user_id"]);
        $device = $this->device->find($payload["device_id"]);


        if($this->device_has_same_supervisor($device, $user)) return;
//        dd($this->device_has_same_supervisor($device, $user));
//
        if($this->device_is_busy($device)) {
            $this->remove_old_supervisor($device);
        }

        $user->update(["device_id" => $device->id]);
        $device->update(["active" => true]);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function remove_device($id)
    {
        return $this->device->find($id)->update(['active' => false]);
    }

    public function get_all_logs_for($id, $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->history->with('device')
                ->where('device_id', $id)
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->history->with('device')
                ->where('device_id', $id)
                ->orderBy('id', 'desc');
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    /**
     * @param $data
     * @return Device
     */
    public function add($data)
    {
        if(! strlen(str_replace("_", "", $data['code'])) == 15) return response()->setStatusCode(402);
        return $this->device->create($data);
    }

    /**
     * @return mixed
     */
    public function get_inactive_dev()
    {
        return $this->device->where("active", false)->get();
    }

    /**
     * @return mixed
     */
    public function get_active_dev()
    {
        return $this->device->where("active", true)->get();
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function get_all_dev()
    {
        return $this->device->all();
    }

    /**
     * @param $device_id
     * @return mixed
     */
    public function get_device_location($device_id)
    {
        $location = $this->get_device_by_code($device_id)->supervisor->district;
        return $location;
    }

    /**
     * @param $device_id
     * @return Device | null
     */
    public function get_device_by_code($device_id)
    {
        return $this->device->with('supervisor', 'supervisor.location')
            ->where('code', $device_id)
            ->first();
    }

    /**
     * @param $device
     * @return mixed
     */
    private function device_is_busy($device)
    {
        return $device->active && $device->supervisor;
    }

    private function remove_old_supervisor($device)
    {
        $device->supervisor->update(["device_id" => null]);
        $this->remove_device($device->id);
    }

    /**
     * @param $device
     * @param $user
     * @return bool
     */
    private function device_has_same_supervisor($device, $user)
    {
        $supervisor = $device->supervisor;
        if(! $supervisor) return false;
        return $supervisor->id == $user->id;
    }
}