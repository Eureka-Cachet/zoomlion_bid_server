<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:27 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\Location;
use League\Fractal\TransformerAbstract;

class LocationCollectionTransformer extends TransformerAbstract
{
    public function transform(Location $location)
    {
        return [
            'id' => $location->id,
            'name' => ucwords($location->name)
        ];
    }
}