<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Attendance;
use clocking\Country;
use clocking\Events\PushDataToClients;
use clocking\Jobs\Job;
use clocking\Region;
use Illuminate\Queue\SerializesModels;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;

class SendClockUpdatedData extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $data = $this->prepare_data();

        event(new PushDataToClients($data, $this->get_channel(), $this->get_event()));
    }

    /**
     * @return int
     */
    private function get_day_clocking()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();

        $count = Attendance::all()->filter(function ($c) use ($start, $end) {
            return Carbon::parse($c->date)->between($start, $end);
        })->count();
        return $count;
    }

    /**
     * @return int
     */
    private function get_month_clocking()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();

        return Attendance::all()->filter(function($c) use ($start, $end) {
            return Carbon::parse($c->date)->between($start, $end);
        })->count();
    }

    /**
     * @return array
     */
    private function get_day_regions()
    {
        $start = Carbon::now()->startOfDay();
        $end = Carbon::now()->endOfDay();

        return Region::all()->map(function(Region $region) use ($start, $end) {
            return [
                "name" => $region->name,
                "clocking" => $this->get_region_clocking($region, $start, $end),
                "beneficiaries" => $region->beneficiaries->count()
            ];
        })->all();
    }

    /**
     * @return array
     */
    private function get_month_regions()
    {
        $start = Carbon::now()->startOfMonth();
        $end = Carbon::now()->endOfMonth();

        return Region::all()->map(function(Region $region) use ($start, $end) {
            return [
                "name" => $region->name,
                "clocking" => $this->get_region_clocking($region, $start, $end),
                "beneficiaries" => $region->beneficiaries->count()
            ];
        })->all();
    }

    private function get_region_clocking(Region $region, $start, $end)
    {
        return $region->clocking->filter(function($c) use ($start, $end) {
            return Carbon::parse($c->date)->between($start, $end);
        })->count();
    }

    /**
     * @return string
     */
    private function get_event()
    {
        return "UPDATE";
    }

    /**
     * @return string
     */
    private function get_channel()
    {
        return "DASHBOARD";
    }

    /**
     * @return array
     */
    public function prepare_data()
    {
        return [
            "clocking" => [
                "day" => $this->get_day_clocking(),
                "month" => $this->get_month_clocking()
            ],
            "regions" => [
                "day" => $this->get_day_regions(),
                "month" => $this->get_month_regions()
            ],
            "beneficiaries" => [
                "total" => $this->get_total_active_beneficiaries(),
                "valid" => $this->get_valid_beneficiaries(),
                "invalid" => $this->get_invalid_beneficiaries()
            ]
        ];
    }

    /**
     * @return int
     */
    private function get_total_active_beneficiaries()
    {
        return Country::first()->beneficiaries->where('active', 1)->count();
    }

    /**
     * @return mixed
     */
    private function get_valid_beneficiaries()
    {
        return Country::first()->beneficiaries->where('valid', 1)->where('active', 1)->count();
    }

    /**
     * @return mixed
     */
    private function get_invalid_beneficiaries()
    {
        return Country::first()->beneficiaries->where('valid', 0)->where('active', 1)->count();
    }
}
