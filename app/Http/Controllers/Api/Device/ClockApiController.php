<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/4/16
 * Time: 9:31 PM
 */

namespace clocking\Http\Controllers\Api\Device;


use clocking\Events\BeneficiaryHasClocked;
use clocking\Events\TestEvent;
use clocking\Http\Controllers\Controller;
use Eureka\Repositories\AttendanceRepository;
use Eureka\Transformers\Device\BeneficiaryTransformer;
use Illuminate\Http\Request;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;

class ClockApiController extends Controller
{
    /**
     * @var AttendanceRepository
     */
    private $attendanceRepository;
    /**
     * @var Manager
     */
    private $manager;

    /**
     * ClockApiController constructor.
     * @param AttendanceRepository $attendanceRepository
     * @param Manager $manager
     */
    public function __construct(AttendanceRepository $attendanceRepository, Manager $manager)
    {
        $this->attendanceRepository = $attendanceRepository;
        $this->manager = $manager;
    }

    public function add(Request $request)
    {
        if($request->has('type') && $request->get('type') == 'batch'){
//            event(new BeneficiaryHasClocked());
            return response()->json(['status' => 200]);
//            $all = $request;
//            return $all->all();
        }

        $beneficiary = $this->attendanceRepository->add_one(collect($request->all()));
        $transformed = $this->manager->createData(new Item($beneficiary, new BeneficiaryTransformer(false)))
            ->toArray()["data"];

        event(new BeneficiaryHasClocked());
        return response()->json($transformed);
    }
}