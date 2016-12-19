<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/21/16
 * Time: 8:32 AM
 */

namespace Eureka\Transformers\Internal;


use clocking\Module;
use League\Fractal\TransformerAbstract;

class ModuleCollectionTransformer extends TransformerAbstract
{
    public function transform(Module $module){
        return [
            'id' => $module->id,
            'name' => $module->department->name
        ];
    }
}