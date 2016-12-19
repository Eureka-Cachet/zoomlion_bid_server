<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/6/16
 * Time: 10:01 PM
 */

namespace Eureka\Transformers\Internal;


use clocking\Attendance;
use League\Fractal\TransformerAbstract;

class ClockingTransformer extends TransformerAbstract
{
    /**
     * @var
     */
    private $collection;

    /**
     * ClockingTransformer constructor.
     * @param $collection
     */
    public function __construct($collection)
    {
        $this->collection = $collection;
    }

    /**
     * @param Attendance $attendance
     * @return array
     */
    public function transform(Attendance $attendance)
    {
        if($this->collection){
            return [
                'date' => $attendance->date,
                'time' => $attendance->time
            ];
        }

        return [];
    }
}