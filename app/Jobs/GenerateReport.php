<?php

namespace clocking\Jobs;

use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Auth\User;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;

class GenerateReport extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;

    /**
     * @var array
     */
    private $data;
    /**
     * @var User
     */
    private $user;

    /**
     * Create a new job instance.
     *
     * @param Collection $data
     * @param User $user
     */
    public function __construct(Collection $data, User $user)
    {
        $this->data = $data;
        $this->user = $user;
    }

    /**
     * Execute the job.
     *
     * @throws \Exception
     */
    public function handle()
    {
        try{
            $this->generate_report();
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     */
    private function generate_report()
    {
        try{
            switch(strtolower($this->data->get('type'))){
                case 'staff allowance':
                    dispatch(new GenerateStaffAllowanceReport($this->data->toArray(), $this->user));
                    break;
                case 'staff form':
                    dispatch(new GenerateStaffFormReport($this->data->toArray(), $this->user));
                    break;
                case 'staff enrolment':
                    dispatch(new GenerateStaffEnrolmentReport($this->data->toArray(), $this->user));
                    break;
                case 'staff count':
                    dispatch(new GenerateStaffCountReport($this->data->toArray(), $this->user));
                    break;
                case 'staff information':
                    dispatch(new StaffInformationReport($this->data->toArray(), $this->user));
                    break;
                case 'multiple staff information':
                    dispatch(new MultipleStaffInformationReport($this->data->toArray(), $this->user));
                    break;
                case 'staff attendance':
                    dispatch(new GenerateClockingReport($this->user, $this->data->toArray()));
                    break;
                case 'staff attendances':
                    dispatch(new GenerateMultipleClockingReport($this->data->toArray(), $this->user));
                    break;
            }
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @throws \Exception
     */
    private function staff_count_report()
    {
        try{
            dispatch(new StaffCountReport($this->data, $this->user));
        }catch (\Exception $e){
            throw $e;
        }
    }

    /**
     * @throws \Exception
     */
    private function staff_information_report()
    {
        try{
            dispatch(new StaffInformationReport($this->data, $this->user));
        }catch (\Exception $e){
            throw $e;
        }
    }
}
