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
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->device->with(['clocks', 'supervisor', 'supervisor.location'])
                ->where('active', true)
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->device->with(['clocks', 'supervisor', 'supervisor.location'])
                ->where('active', true)
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
     * @return DeviceMapping
     */
    public function map_new_device(array $payload)
    {
        $user = User::find($payload["user_id"]);
        $user->update(["device_id" => $payload["device_id"]]);
        $this->device->find($payload["device_id"])->update(["active" => true]);
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
    public function get_inactive_devices()
    {
        return $this->device->where("active", false)->get();
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
}