<?php

namespace clocking\Jobs;

use Carbon\Carbon;
use clocking\Attendance;
use clocking\Beneficiary;
use clocking\District;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Location;
use clocking\Region;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use League\Fractal\Manager;

class GenerateClockingReport extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var
     */
    private $generator;
    /**
     * @var
     */
    private $data;

    /**
     * Create a new job instance.
     *
     * @param $generator
     * @param $data
     */
    public function __construct($generator, $data)
    {
        $this->generator = $generator;
        $this->data = $data;
    }

    /**
     * Execute the job.
     *
     * @throws \Exception
     */
    public function handle()
    {
        try{
            $data = $this->prepare_data();
            if(is_null($data))
                return event(new FormsDataGenerationFailed($this->generator, "Invalid Data"));
            if(collect($data)->isEmpty())
                return event(new FormsDataGenerationFailed($this->generator, "No Data Available"));
            $this->generate_report($data);
        } catch (\Exception $e){
            var_dump($e->getMessage());
            event(new FormsDataGenerationFailed($this->generator, "Operation Failed"));
        }
    }

    private function get_template()
    {
        if($this->data["format"] == "pdf"){
            return "templates.pdfs.staff_clocks";
        }
        return "templates.sheets.staff_clocks";
    }

    /**
     * @return string
     */
    private function get_title()
    {
        $beneficiary = $this->get_beneficiary();

        return "{$beneficiary->full_name} {$beneficiary->bid} Clocking";
    }

    /**
     * @return array
     */
    private function prepare_data()
    {
        $clocking = $this->get_clocking();
        if(is_null($clocking)) return null;

        if(collect($clocking)->isEmpty()) return [];

        return [
            "title" => $this->get_title(),
            "payload" => $clocking,
            "beneficiary_name" => $this->get_beneficiary()->full_name,
            'start' => Carbon::parse($this->data["start"]),
            'end' => Carbon::parse($this->data["end"])
        ];
    }

    /**
     * @return mixed|null
     */
    private function get_clocking()
    {
        $start = Carbon::parse($this->data["start"])->startOfDay();
        $end = Carbon::parse($this->data["end"])->endOfDay();

        $beneficiary = $this->get_beneficiary();

        if( !$beneficiary) return null;

        return $this->getBeneficiaryClocking($beneficiary, $start, $end);
    }

    /**
     * @param Beneficiary $beneficiary
     * @param $startDate
     * @param $endDate
     * @return mixed
     */
    private function getBeneficiaryClocking(Beneficiary $beneficiary, $startDate, $endDate)
    {
        return $beneficiary
            ->attendances()
            ->where('date', '>=', $startDate)
            ->where('date', '<=', $endDate)
            ->get()
            ->groupBy('date')
            ->map(function(Collection $attendances, $date){
                $in = $attendances->shift();
                $inTime = $in
                    ? $in->time
                    : null;
                $out = $attendances->pop();
                $outTime = $out
                    ? $out->time
                    : null;
                return [
                    'date' => Carbon::parse($date)->toFormattedDateString(),
                    'clock_in' => $inTime
                        ? Carbon::parse($inTime)->toTimeString()
                        : "-",
                    'clock_out' => $outTime
                        ? Carbon::parse($outTime)->toTimeString()
                        : "-"
                ];
            })
            ->toArray();
    }

    /**
     * @return Beneficiary
     */
    private function get_beneficiary()
    {
        $model = Beneficiary::with('attendances')
            ->where('bid', $this->data["bid"])
            ->first();
        return $model;
    }

    private function generate_report($data)
    {
        if($this->data["format"] == "xlsx"){
            dispatch(new GenerateSheet($data, $this->get_template(), $this->get_title(), $this->generator));
        }

        if($this->data["format"] == "pdf"){
            dispatch(new GeneratePdf($data, $this->get_template(), $this->get_title(), $this->generator));
        }
    }

    private function get_clock_in(Attendance $clock)
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
            return Carbon::parse($in->time)->eq($time);
        }

        if($inAndOut->count() == 1){
            $in = $inAndOut->first();
            return Carbon::parse($in->time)->eq($time);
        }

        return false;
    }

    private function get_clock_out(Attendance $clock)
    {
        $inAndOut = $this->get_in_and_out($clock);

        if($inAndOut->count() < 2) return null;

        return $inAndOut->last()->time;
    }

    /**
     * @param Attendance $clock
     * @return mixed
     */
    private function get_in_and_out(Attendance $clock)
    {
        $date = Carbon::parse($clock->date);
        $time = Carbon::parse($clock->time);

        $beneficiary = $clock->beneficiary;
        $inAndOut = $beneficiary->attendances
            ->filter(function ($clock) use ($date) {
                return Carbon::parse($clock->date)->isSameDay($date);
            })->sortBy('time');
        return $inAndOut;
    }

    /**
     * @param $in
     * @param $out
     * @return int
     */
    private function get_duration($in, $out)
    {
        return Carbon::parse($in)->diffInHours($out);
    }
}
