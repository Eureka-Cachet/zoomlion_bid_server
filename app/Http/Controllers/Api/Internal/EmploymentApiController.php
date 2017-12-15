<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 2:04 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Department;
use clocking\Form;
use clocking\Http\Controllers\Controller;
use clocking\Jobs\BuildApplicantForm;
use clocking\Module;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Repositories\FormRepository;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Validator;

class EmploymentApiController extends Controller
{
    /**
     * @var FormRepository
     */
    private $formRepository;

    /**
     * @param FormRepository $repository
     */
    public function __construct(FormRepository $repository){
        $this->formRepository = $repository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function generate_form(Request $request)
    {
        $number_to_generate = $request->get('number_of_form');
        $forms = $this->generate_them($number_to_generate, auth()->user(), $request);
        return $forms;
//        try{
//            $this->dispatch(new BuildApplicantForm($request->all(), auth()->user()));

//            $number_to_generate = $request->get('number_of_form');
//            $forms = $this->generate_them($number_to_generate, auth()->user(), $request);
//            return $forms;

//            return $this->onSuccessRequest();
//        }catch (\Exception $e){
//            return $this->onFailedRequest($e->getMessage());
//        }
    }

    private function generate_them($number_to_generate, $generator, $request)
    {
        $forms = [];
        for($increment = 0; $increment < $number_to_generate; $increment++){
            $single_form_data = $this->build_form_data($generator->id, $increment + 1, $request);
            $saved_form = Form::create($single_form_data);
            array_push($forms, $saved_form);
        }
        return $forms;
    }

    private function build_form_data($generator_id, $increment, $request)
    {
        return [
            'code' => $this->generate_form_code($increment),
            'uuid' => CodeGenerator::uuid(),
            'module_id' => $request->get('module_id'),
            'rank_id' => $request->get('rank_id'),
            'user_id' => $generator_id
        ];
    }

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

}