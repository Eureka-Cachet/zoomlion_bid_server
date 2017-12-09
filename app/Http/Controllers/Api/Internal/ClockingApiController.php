<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/6/16
 * Time: 8:48 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use Eureka\Repositories\AttendanceRepository;
use Illuminate\Http\Request;

class ClockingApiController extends Controller
{
    /**
     * @var AttendanceRepository
     */
    private $attendanceRepository;

    /**
     * ClockingApiController constructor.
     * @param AttendanceRepository $attendanceRepository
     */
    public function __construct(AttendanceRepository $attendanceRepository)
    {
        $this->attendanceRepository = $attendanceRepository;
    }

    public function all(){}

    /**
     * @param $bid
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function single($bid, Request $request)
    {
        $clocking = $this->attendanceRepository->clocking_by_bid($bid, $request);
        collect($clocking)->map(function($clocking){

        });
        return response()->json($clocking);
    }
}