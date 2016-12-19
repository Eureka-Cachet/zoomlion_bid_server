<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/4/16
 * Time: 11:40 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use Carbon\Carbon;
use clocking\Attendance;
use clocking\Beneficiary;
use clocking\Http\Controllers\Controller;
use clocking\Region;
use Eureka\Transformers\Internal\RegionTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class DashboardApiController extends Controller
{
    /**
     * @var Manager
     */
    private $manager;

    /**
     * DashboardApiController constructor.
     * @param Manager $manager
     */
    public function __construct(Manager $manager)
    {
        $this->manager = $manager;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function clocking()
    {
        $total = 0;

        if(request()->get('span') == 'month'){
            $start = Carbon::now()->startOfMonth();
            $end = Carbon::now()->endOfMonth();

            $total = Attendance::all()->filter(function ($c) use ($start, $end){
                return Carbon::parse($c->date)->between($start, $end);
            })
                ->count();
        }

        if(request()->get('span') == 'day'){
            $start = Carbon::now()->startOfDay();
            $end = Carbon::now()->endOfDay();

            $total = Attendance::all()->filter(function ($c) use ($start, $end){
                return Carbon::parse($c->date)->between($start, $end);
            })
                ->count();
        }

        return response()->json(['total' => $total]);
    }

    public function devices()
    {

    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function regions()
    {
        $now = Carbon::now();
        $regions = $this->manager->createData(new Collection(Region::all(),
            new RegionTransformer($now->startOfDay(), $now->endOfDay())))
            ->toArray();
        return response()->json($regions["data"]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function beneficiaries()
    {
        $total = Beneficiary::all()->count();
        $valid = Beneficiary::where(['valid' => 1, 'active' => 1])->count();
        $invalid = Beneficiary::where(['valid' => 0, 'active' => 1])->count();

        return response()->json(
            [
                'total' => $total,
                'valid' => $valid,
                'invalid' => $invalid
            ]
        );
    }
}