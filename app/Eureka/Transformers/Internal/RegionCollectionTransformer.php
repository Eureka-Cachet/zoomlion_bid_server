<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:29 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\Region;
use League\Fractal\TransformerAbstract;

class RegionCollectionTransformer extends TransformerAbstract
{
    public function transform(Region $region)
    {
        return [
            'id' => $region->id,
            'name' => ucwords($region->name)
        ];
    }
}