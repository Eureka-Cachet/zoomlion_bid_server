<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/3/16
 * Time: 8:24 AM
 */

namespace Eureka\Transformers\Internal;


use clocking\Device;
use League\Fractal\TransformerAbstract;

class DeviceCollectionTransformer extends TransformerAbstract
{
    public function transform(Device $device){

        return [
            "id" => $device->id,
            "code" => $device->code,
            "connected" => $device->connected,
            "supervisor" => $this->get_supervisor($device),
            "assistants" => $this->get_assistant($device),
            "total_assistants" => $this->total_assistants($device),
            "district" => $this->get_district($device)
        ];
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_supervisor(Device $device)
    {
        $sup = $device->supervisors->filter(function($super){
            return $super->assistant == 0;
        })->first();
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
        return $device->supervisors->filter(function($super){
            return $super->assistant == 1;
        })->count();
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_assistant(Device $device)
    {
        return $device->supervisors->filter(function($super){
            return $super->assistant == 1;
        })->map(function($assistant){
            return [
                "full_name" => $assistant->full_name,
                "uuid" => $assistant->uuid
            ];
        })->toArray();
    }

    /**
     * @param Device $device
     * @return array
     */
    private function get_district(Device $device)
    {
        $district = $device->supervisors->filter(function($super){
            return $super->assistant == 0;
        })->first()->district;
        return [
            "name" => $district->name,
            "id" => $district->id
        ];
    }
}