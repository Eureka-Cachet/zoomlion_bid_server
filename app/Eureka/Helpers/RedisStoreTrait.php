<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/4/2016
 * Time: 8:12 PM
 */

namespace Eureka\Helpers;


use Carbon\Carbon;
use Illuminate\Support\Facades\Redis;
use Illuminate\Support\Facades\Storage;
use League\Flysystem\File;

trait RedisStoreTrait
{
    /**
     * @param $identifier
     * @return static
     */
    public function get_all($identifier)
    {
        return collect(Redis::keys('*'))
            ->filter(function($value, $key) use($identifier){
                return starts_with($value, $identifier);
            })
            ->map(function($item, $key){
                return Redis::hgetall($item);
            });
    }

    /**
     * @param $key
     * @return \Illuminate\Support\Collection
     */
    public function get_by_key($key)
    {
        return collect(Redis::hgetall($key));
    }

    /**
     * @param $key
     * @param array $data
     * @return bool|\Illuminate\Support\Collection
     */
    public function save($key, array $data)
    {
        if(Redis::hmset($key, $data)){
            return $this->get_by_key($key);
        }
        return false;
    }

    /**
     * @param $key
     * @return int
     */
    public function delete($key)
    {
        return Redis::del($key);
    }

    /**
     * @param $name
     * @return bool
     * @throws \Exception
     */
    public function delete_dump_file($name)
    {
        try{
            return $this->delete_file("backups/{$name}");
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param $file_path
     * @return bool
     * @throws \Exception
     */
    private function delete_file($file_path)
    {
        try{
            return Storage::disk('local')->delete($file_path);
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @param $identifier
     * @return \Illuminate\Support\Collection
     */
    public function get_newest($identifier)
    {
        return collect($this->get_all($identifier)->first());
    }

    /**
     * @param $identifier
     * @return \Illuminate\Support\Collection
     */
    public function get_oldest($identifier)
    {
        return collect($this->get_all($identifier)->last());
    }

    public function delete_all_bad_dumps(array $names)
    {
        try{
            foreach($names as $name){
                $key = $this->get_dump_key($name);
                $this->delete($key);
                $this->delete_dump_file($name);
            }
            return true;
        }catch (\Exception $e){
            return false;
        }
    }

    /**
     * @param $dump_name
     * @return mixed
     */
    private function get_dump_key($dump_name)
    {
        return explode('.', $dump_name)[0];
    }
}