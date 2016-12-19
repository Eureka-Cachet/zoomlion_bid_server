<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 6:18 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use clocking\Role;
use Eureka\Transformers\Internal\RoleCollectionTransformer;
use Illuminate\Support\Facades\Cache;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class RoleApiController extends Controller
{
    /**
     * @var Manager
     */
    private $fractal;

    /**
     * @param Manager $fractal
     */
    public function __construct(Manager $fractal){
        $this->fractal = $fractal;
    }

    public function all()
    {
        $roles = $this->get_roles();
        return response()->json(
            $this->fractal->createData(new Collection($roles,
                new RoleCollectionTransformer(auth()->user())))->toArray()
        );
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    private function get_roles()
    {
        $roles = Role::all()->reject(function($value){
            return $value->id == 1 && auth()->user()->role_id != 1;
        });
        return $roles;
    }
}