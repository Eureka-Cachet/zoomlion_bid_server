<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/10/2016
 * Time: 9:42 AM
 */

namespace Eureka\Transformers\Internal;


use clocking\Form;
use League\Fractal\TransformerAbstract;

class FormDataTransformer extends TransformerAbstract
{
    public function transform(Form $form)
    {
        return [
            'code' => $form->code,
            'region_name' => ucwords($form->module->location->district->region->name),
            'district_name' => ucwords($form->module->location->district->name),
            'location_name' => ucwords($form->module->location->name),
            'module_name' => ucwords($form->module->department->name),
            'rank_name' => ucwords($form->rank->name)
        ];
    }
}