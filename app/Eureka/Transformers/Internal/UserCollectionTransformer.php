<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 2:38 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\User;
use Eureka\Helpers\Constants;
use League\Fractal\TransformerAbstract;

class UserCollectionTransformer extends TransformerAbstract
{
    public function transform(User $user)
    {
        return [
            'uuid' => $user->uuid,
            'username' => $user->username,
            'full_name' => ucwords($user->full_name),
            'role' => ucwords($user->roles->first()->name),
            'is_supervisor' => $this->is_user_supervisor($user->roles),
            'active' => !!$user->active
        ];
    }

    private function is_user_supervisor($roles)
    {
        return !! $roles->map(function($role){
            return $role->id;
        })
            ->filter(function($id){
                return $id == Constants::SUPERVISOR_ROLE;
            })->first();
    }
}