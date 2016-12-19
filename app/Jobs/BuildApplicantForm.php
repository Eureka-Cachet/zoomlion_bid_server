<?php

namespace clocking\Jobs;


use clocking\Department;
use clocking\Events\FormsDataGenerationFailed;
use clocking\Events\FormsDataWereGenerated;
use clocking\Form;
use clocking\Http\Controllers\Api\Internal\BeneficiaryApiController;
use clocking\Location;
use clocking\Module;
use clocking\Rank;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Repositories\FormRepository;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Auth\User;
use Illuminate\Http\Request;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Collection;
use Webpatser\Uuid\Uuid;

class BuildApplicantForm extends Job implements ShouldQueue
{
    use InteractsWithQueue, SerializesModels;
    /**
     * @var Request
     */
    private $request;
    /**
     * @var User
     */
    private $generator;

    /**
     * Create a new job instance.
     *
     * @param array $request
     * @param User $generator
     */
    public function __construct(array $request, User $generator)
    {
        $this->request = collect($request);
        $this->generator = $generator;
    }

    /**
     * Execute the job.
     *
     */
    public function handle()
    {
        try{
            $number_to_generate = $this->request->get('number_of_form');
            $forms = $this->generate_them($number_to_generate);
            event(new FormsDataWereGenerated($forms, $this->generator));
        }catch (\Exception $e){
            $mes = "From BuildApplicantForm => {$e->getMessage()}";
            var_dump($e->getMessage());
            event(new FormsDataGenerationFailed($this->generator, $mes));
        }
    }


    /**
     * @param $generator_id
     * @param $increment
     * @return array
     */
    private function build_form_data($generator_id, $increment)
    {
        $request = $this->request;
        return [
            'code' => $this->generate_form_code($increment),
            'uuid' => CodeGenerator::uuid(),
            'module_id' => $request->get('module_id'),
            'rank_id' => $request->get('rank_id'),
            'user_id' => $generator_id
        ];
    }

    /**
     * @param $increment
     * @return string
     */
    private function generate_form_code($increment)
    {
        // ZGH0123456
        $initials = Config::getInitials();
        $suffix = $this->make_suffix($increment);
        return "{$initials}{$suffix}";
    }

    /**
     * @param $increment
     * @return string
     */
    private function make_suffix($increment)
    {
        $bid = BeneficiaryRepository::get_new_bid($increment);
        dump($bid);
        return $bid;
    }

    /**
     * @param $number_to_generate
     * @return array
     */
    private function generate_them($number_to_generate)
    {
        $forms = [];
        for($increment = 0; $increment < $number_to_generate; $increment++){
            $single_form_data = $this->build_form_data($this->generator->id, $increment + 1);
            $saved_form = Form::create($single_form_data);
            array_push($forms, $saved_form);
        }
        return $forms;
    }
}
