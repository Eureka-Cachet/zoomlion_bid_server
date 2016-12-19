<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 2:04 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Department;
use clocking\Http\Controllers\Controller;
use clocking\Jobs\BuildApplicantForm;
use clocking\Module;
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
        try{
            $this->dispatch(new BuildApplicantForm($request->all(), auth()->user()));
            return $this->onSuccessRequest();
        }catch (\Exception $e){
            return $this->onFailedRequest($e->getMessage());
        }
    }

}