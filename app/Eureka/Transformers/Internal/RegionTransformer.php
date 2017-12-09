<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/5/16
 * Time: 12:03 AM
 */

namespace Eureka\Transformers\Internal;


use Carbon\Carbon;
use clocking\Region;
use League\Fractal\TransformerAbstract;

class RegionTransformer extends TransformerAbstract
{
    /**
     * @var
     */
    private $start;
    /**
     * @var
     */
    private $end;
    /**
     * @var
     */
    private $daily;

    /**
     * RegionTransformer constructor.
     * @param $daily
     * @internal param $start
     * @internal param $end
     */
    public function __construct($daily)
    {
        $this->daily = $daily;
    }

    public function transform(Region $region)
    {
        return [
            'name' => $region->name,
            'clocking' => $this->get_clocking_count($region),
            'beneficiaries' => $region->beneficiaries->count()
        ];
    }

    /**
     * @param Region $region
     */
    private function get_clocking_count(Region $region)
    {
        if($this->daily){
            $start = Carbon::now()->startOfDay();
            $end = Carbon::now()->endOfDay();
            return $region->clocking->filter(function($c) use ($start, $end) {
                return Carbon::parse($c->date)->between($start, $end);
            })->count();
        }else{
            $start = Carbon::now()->startOfMonth();
            $end = Carbon::now()->endOfMonth();
            return $region->clocking->filter(function($c) use ($start, $end) {
                return Carbon::parse($c->date)->between($start, $end);
            })->count();
        }
    }

}