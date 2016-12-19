<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 6:33 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\Role;
use League\Fractal\TransformerAbstract;

class RoleCollectionTransformer extends TransformerAbstract
{
    public function transform(Role $role)
    {
        return [
            'id' => $role->id,
            'name' => ucwords($role->name)
        ];
    }
}