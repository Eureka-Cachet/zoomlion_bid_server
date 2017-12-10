<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/3/16
 * Time: 8:24 AM
 */

namespace Eureka\Transformers\Internal;


use clocking\Device;
use clocking\User;
use League\Fractal\TransformerAbstract;

class DeviceCollectionTransformer extends TransformerAbstract
{
    public function transform(Device $device){

        return [
            "id" => $device->id,
            "code" => $device->code,
            "connected" => $device->connected,
            "supervisor" => $this->get_supervisor($device),
            "assistants" => $this->get_assistants($device),
            "total_assistants" => $this->total_assistants($device),
            "district" => $this->get_district($device),
            "free_assistants" => $this->get_free_assistants($device)
        ];
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_supervisor(Device $device)
    {
        $sup = $device->supervisor;
        return [
            "full_name" => $sup->full_name,
            "uuid" => $sup->uuid
        ];
    }


    /**
     * @param Device $device
     * @return int
     */
    private function total_assistants(Device $device){
        return $device->supervisor->assistants->count();
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_assistants(Device $device)
    {
        return $device->supervisor->assistants
            ->map(function($assistant){
                return [
                    "full_name" => $assistant->full_name,
                    "uuid" => $assistant->uuid
                ];
        })->toArray();
    }

    private function get_free_assistants(Device $device)
    {
        $district = $device->supervisor->district;
        return $district ? $district->users
            ->filter(function(User $user){
                return $user->roles->first()->id == 6;
            })
            ->filter(function(User $user){
            return is_null($user->device_id) && is_null($user->up_sub_id);
        })->toArray() : [];
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_district(Device $device)
    {
        $district = $device->supervisor->district;
        return $district ? [
            "name" => $district->name,
            "id" => $district->id
        ] : ['id' => 0, 'name' => 'N\A'];
    }
}