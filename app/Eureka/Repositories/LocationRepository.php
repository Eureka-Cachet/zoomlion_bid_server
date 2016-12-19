<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:14 PM
 */

namespace Eureka\Repositories;


use clocking\Location;
use clocking\Module;

class LocationRepository
{
    /**
     * @var Location
     */
    private $location;
    /**
     * @var Module
     */
    private $module;

    /**
     * @param Location $location
     * @param Module $module
     */
    public function __construct(Location $location, Module $module){
        $this->location = $location;
        $this->module = $module;
    }

    public function get_all()
    {
        return $this->location->all();
    }

    public function update($id, array $payload)
    {
        return $this->get_location_by_id($id)->update($payload);
    }

    /**
     * @param $id
     * @return mixed
     */
    private function get_location_by_id($id)
    {
        return $this->location->find($id);
    }

    public function get_modules($id)
    {
        return $this->module->with(['department'])->where('location_id', $id)->get();
    }

    /**
     * @param $uuid
     * @return mixed
     */
    private function get_location_by_uuid($uuid)
    {
        return $this->location->where('uuid', $uuid)->first();
    }

    /**
     * @param array $payload
     * @return static
     */
    public function add(array $payload)
    {
        return $this->location->create($payload);
    }

    /**
     * @param $id
     * @return mixed
     */
    public function delete_location($id)
    {
        return $this->get_location_by_id($id)->delete();
    }
}