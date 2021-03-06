<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 1:59 PM
 */

namespace Eureka\Repositories;


use clocking\Device;
use clocking\Role;
use clocking\User;
use Carbon\Carbon;
use Eureka\Helpers\Constants;
use Webpatser\Uuid\Uuid;

class UsersRepository
{
    /**
     * @var User
     */
    private $user;

    /**
     * @param User $user
     */
    public function __construct(User $user){
        $this->user = $user;
    }

    public function all_users(){
        $users = $this->user->all();
        return $users;
    }

    public function single_user($uuid)
    {
        return $this->get_user_by_uuid($uuid);
    }

    private function get_user_by_uuid($uuid)
    {
        $user = $this->user->where('uuid', $uuid)->first();
        return $user;
    }

    public function add_user($payload)
    {
        $attributes = $this->prepare_payload($payload);
        $user = $this->user
            ->create(array_except($attributes, 'role_id'));
        $user->roles()->attach($payload['role_id']);
        return $user;
    }

    public function update_user_information($uuid, $payload)
    {
        if(!collect($payload)->has('type')){
            return false;
        }

        $type = collect($payload)->get('type');
        if($type == 'password'){
            $credentials = $this->get_credentials($payload);
            if(!auth()->attempt($credentials)){
                return false;
            }

            $data = $this->get_password_data($payload);
            $user = $this->get_user_by_uuid($uuid);
            if(!$user->update($data)){
                return false;
            }
        }elseif($type == 'general'){
            $user = $this->get_user_by_uuid($uuid);
            if(!$user->update(['active' => $payload['active']])){
                return false;
            }
        }elseif ($type == 'supervisor'){
            $user = $this->get_user_by_uuid($uuid);
            if($payload['supervisor']){
                $user->roles()->attach(Constants::SUPERVISOR_ROLE);
            }else{
                $user->roles()->detach(Constants::SUPERVISOR_ROLE);
                if($user->device){
                    $user->device->update(['active' => false]);
                    $user->update(['device_id' => null]);
                }
            }
        }
        return true;
    }

    public function restore_user($uuid)
    {
        $user = $this->get_user_by_uuid($uuid);
        return $this->restore_information_for($user);
    }

    private function restore_information_for($user)
    {
        $default_information = $this->get_user_default_information($user);
        return $user->update($default_information);
    }

    public function remove_user($uuid)
    {
        $user = $this->get_user_by_uuid($uuid);
        return $user->delete();
    }

    private function prepare_payload(array $payload)
    {
        $payload = collect($payload);
        $data_to_save = array_add($payload->only(['pin', 'role_id', 'region_id', 'district_id'])->toArray(),
            'date_of_birth', Carbon::parse($payload->get('date_of_birth')));
        $data_to_save = array_add($data_to_save, 'full_name', ucwords($payload->get('full_name')));
        $data_to_save = array_add($data_to_save, 'username', $payload->get('username'));
        $data_to_save = array_add($data_to_save, 'password', $this->get_default_password());
        $data_to_save = array_add($data_to_save, 'uuid', $this->get_uuid());
        return $data_to_save;
    }

    private function get_username($user_full_name)
    {
        return $this->make_username_for($user_full_name);
    }

    /**
     * @return string
     */
    private function get_default_password()
    {
        return bcrypt('Zoomlion12$');
    }

    /**
     * @return Uuid
     * @throws \Exception
     */
    private function get_uuid()
    {
        return Uuid::generate(4);
    }

    private function get_user_default_information($user)
    {
        return [
            'username' => $this->get_username($user->full_name),
            'password' => $this->get_default_password()
        ];
    }

    private function make_username_for($user_full_name)
    {
        $names = explode(" ", $user_full_name);
        $times = Carbon::now()->timestamp;
        $s = "{$times}";
        $username = str_split($names[0])[0] . array_last(str_split($names[1])) . '.' . $names[1] . '.' . substr($s, -4, 5);
        return strtolower($username);
    }

    /**
     * @return array
     */
    public function free_supervisor()
    {
        return $this->user->with('roles', 'device')
            ->whereHas('roles', function($query){
                $query->where('name', "SUPERVISOR");
            })
//            ->whereHas('device', function($query){
//                $query->whereNull('device');
//            })
//            ->where('role_id', 6)
            ->get()
            ->filter(function($supervisor){
                return is_null($supervisor->device);
            })
            ->values()
            ->toArray();
    }

    public function busy_supervisor()
    {
        return $this->user->with('roles', 'device')
            ->whereHas('roles', function($query){
                $query->where('name', "SUPERVISOR");
            })
//            ->where('role_id', 6)
            ->get()->reject(function($supervisor){
                return is_null($supervisor->device);
            });
    }

    private function get_credentials($payload)
    {
        return [
            'username' => auth()->user()->username,
            'password' => $payload['old_password']
        ];
    }

    /**
     * @param $payload
     * @return array
     */
    private function get_password_data($payload)
    {
        return [
            'password' => bcrypt($payload['new_password']),
            'password_updated' => true
        ];
    }

    /**
     * @param $pin
     * @param $device_id
     * @return User | null
     */
    public function get_by_pin_and_device_id($pin, $device_id){
        $device = $this->get_device($device_id);
        if(!$device) return null;

        $user = User::with('roles')->where('pin', $pin)->first();
        if(!$user) return null;

        $supervisor = $device->supervisor;
        if($supervisor->id == $user->id){
            return $supervisor;
        }

        return $supervisor->assistants->filter(function(User $ass) use ($user){
            return $ass->id == $user->id;
        })->first();
    }

    /**
     * @param $code
     * @return Device
     */
    public function get_device($code)
    {
        $device = Device::with('supervisor')->where('code', $code)->first();
        return $device;
    }
}