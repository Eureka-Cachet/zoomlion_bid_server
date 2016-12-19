<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 2:38 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\User;
use League\Fractal\TransformerAbstract;

class UserCollectionTransformer extends TransformerAbstract
{
    public function transform(User $user)
    {
        return [
            'uuid' => $user->uuid,
            'username' => $user->username,
            'full_name' => ucwords($user->full_name),
            'role' => ucwords($user->role->name)
        ];
    }
}