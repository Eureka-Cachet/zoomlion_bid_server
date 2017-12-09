<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/4/16
 * Time: 9:38 PM
 */

namespace Eureka\Repositories;


use Carbon\Carbon;
use clocking\Attendance;
use clocking\Beneficiary;
use clocking\Device;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class AttendanceRepository
{
    /**
     * @var Attendance
     */
    private $attendance;
    /**
     * @var Beneficiary
     */
    private $beneficiary;
    /**
     * @var BeneficiaryRepository
     */
    private $beneficiaryRepository;
    /**
     * @var DeviceRepository
     */
    private $deviceRepository;

    /**
     * AttendanceRepository constructor.
     * @param Attendance $attendance
     * @param Beneficiary $beneficiary
     * @param BeneficiaryRepository $beneficiaryRepository
     * @param DeviceRepository $deviceRepository
     */
    public function __construct(Attendance $attendance, Beneficiary $beneficiary,
                                BeneficiaryRepository $beneficiaryRepository, DeviceRepository $deviceRepository)
    {
        $this->attendance = $attendance;
        $this->beneficiary = $beneficiary;
        $this->beneficiaryRepository = $beneficiaryRepository;
        $this->deviceRepository = $deviceRepository;
    }

    /**
     * @param Collection $data
     * @return Beneficiary
     */
    public function add_one(Collection $data)
    {
        $bid = $data->get('bid');
        $beneficiary = $this->beneficiaryRepository->get_by_bid($bid);
        $device_id = $data->get('device_id');
        $device = $this->deviceRepository->get_device_by_code($device_id);
        $timestamp = Carbon::parse($data->get('timestamp'));

        $found = $this->any_clock_today($beneficiary, $timestamp);

        if($found->count() >= 2) return $beneficiary;

        if($found->count() < 1){
            $this->add_clock($timestamp, $beneficiary, $device, true);
        }

        if($found->count() == 1){
            $this->add_clock($timestamp, $beneficiary, $device, false);
        }

        return $beneficiary;
    }

    /**
     * @param Collection $data
     * @return array
     */
    public function add_many(Collection $data)
    {
        $clocks = $data->get('clocks');
        $device_id = $data->get('device_id');
        $device = $this->deviceRepository->get_device_by_code($device_id);

        collect($clocks)->reject(function($clock){
            $timestamp = Carbon::parse($clock['timestamp']);
            $beneficiary = $this->beneficiaryRepository->get_by_bid($clock['bid']);
            $found = $this->any_clock_today($beneficiary, $timestamp);
            return $found >= 2;
        })->each(function($clock) use ($device) {
            $timestamp = Carbon::parse($clock['timestamp']);
            $beneficiary = $this->beneficiaryRepository->get_by_bid($clock['bid']);
//            $this->add_clock($timestamp, $beneficiary, $device);
        });

        return ['status' => 200];
    }

    /**
     * @param $bid
     * @param Request $request
     * @return mixed
     */
    public function clocking_by_bid($bid, Request $request)
    {
        $start = Carbon::createFromTimestamp($request->get('start'));
        $end = Carbon::createFromTimestamp($request->get('end'));

        $data = $this->get_clocks($bid, $start, $end);

        $week = $data->groupBy(function($clock){
            return $this->get_day_string($clock['date']);
        });

        $data = collect($this->get_template())->merge($week);
        return [$data];
    }

    /**
     * @return \Illuminate\Database\Eloquent\Collection|static[]
     */
    public function all()
    {
        return $this->attendance->all();
    }

    /**
     * @param $timestamp
     * @param Beneficiary $beneficiary
     * @param $device
     * @param $in
     */
    private function add_clock($timestamp, Beneficiary $beneficiary, $device, $in)
    {
        $this->attendance->create([
            'time' => $timestamp,
            'date' => Carbon::parse($timestamp)->startOfDay(),
            'beneficiary_id' => $beneficiary->id,
            'device_id' => $device->id,
            'in' => $in
        ]);
    }

    /**
     * @param Beneficiary $beneficiary
     * @param $timestamp
     * @return Collection
     */
    private function any_clock_today(Beneficiary $beneficiary, $timestamp)
    {
        $found = $this->attendance->all()->filter(function ($c) use ($beneficiary, $timestamp) {
            $old_date = Carbon::parse($c->date);
            return $old_date->isSameDay($timestamp) && $beneficiary->id == $c->beneficiary_id;
        });
        return $found;
    }

    private function get_day_string($date)
    {
        $date = Carbon::parse($date);
        if($date->isMonday()) return "monday";
        if($date->isTuesday()) return "tuesday";
        if($date->isWednesday()) return "wednesday";
        if($date->isThursday()) return "thursday";
        if($date->isFriday()) return "friday";
        if($date->isSaturday()) return "saturday";
        if($date->isSunday()) return "sunday";
        return null;
    }

    private function get_template()
    {
        return [
            'monday' => [
//                'in' => '',
//                'out' => ''
            ],
            'tuesday' => [
//                'in' => '',
//                'out' => ''
            ],
            'wednesday' => [
//                'in' => '',
//                'out' => ''
            ],
            'thursday' => [
//                'in' => '',
//                'out' => ''
            ],
            'friday' => [
//                'in' => '',
//                'out' => ''
            ],
            'saturday' => [
//                'in' => '',
//                'out' => ''
            ],
            'sunday' => [
//                'in' => '',
//                'out' => ''
            ]
        ];
    }

    /**
     * @param Attendance $clock
     * @return bool
     */
    private function is_clock_in(Attendance $clock)
    {
        $date = Carbon::parse($clock->date);
        $time = Carbon::parse($clock->time);

        $beneficiary = $clock->beneficiary;
        $inAndOut = $beneficiary->attendances
            ->filter(function ($clock) use ($date) {
                return Carbon::parse($clock->date)->isSameDay($date);
            })->sortBy('time');
        if($inAndOut->count() == 2){
            $in = $inAndOut->first();
//            $out = $inAndOut->last();
            return Carbon::parse($in->time)->eq($time);
        }

        if($inAndOut->count() == 1){
            $in = $inAndOut->first();
            return Carbon::parse($in->time)->eq($time);
        }

        return false;
    }

    /**
     * @param $bid
     * @param $start
     * @param $end
     * @return Collection
     */
    private function get_clocks($bid, $start, $end)
    {
        return $this->beneficiary->where('bid', $bid)
            ->first()
            ->attendances
            ->filter(function($clock) use ($start, $end) {
                return Carbon::parse($clock->date)->between($start, $end);
            })
            ->map(function($clock){
                return [
                    'day' => Carbon::parse($clock->date)->dayOfWeek,
                    'week' => Carbon::parse($clock->date)->weekOfMonth,
                    'date' => $clock->date,
                    'time' => Carbon::parse($clock->time)->format('h:i A'),
                    'is_in' => $this->is_clock_in($clock)
                ];
            });
    }
}