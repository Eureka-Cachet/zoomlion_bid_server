<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/3/2016
 * Time: 3:31 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\District;
use League\Fractal\TransformerAbstract;

class DistrictCollectionTransformer extends TransformerAbstract
{
    public function transform(District $district)
    {
        return [
            'id' => $district->id,
            'name' => ucwords($district->name)
        ];
    }
}