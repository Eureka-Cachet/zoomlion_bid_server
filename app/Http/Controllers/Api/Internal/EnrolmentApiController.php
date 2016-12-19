<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/22/16
 * Time: 12:23 PM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Events\CaptureBioData;
use clocking\Http\Controllers\Controller;
use Eureka\Helpers\Config;
use Eureka\Repositories\FormRepository;
use Illuminate\Http\Request;

class EnrolmentApiController extends Controller
{
    /**
     * @var FormRepository
     */
    private $formRepository;

    /**
     * EnrolmentApiController constructor.
     * @param FormRepository $formRepository
     */
    public function __construct(FormRepository $formRepository)
    {
        $this->formRepository = $formRepository;
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse|\Symfony\Component\HttpFoundation\Response
     */
    public function checkBid(Request $request){
        $bid = $request->get('bid');
        $bid_initials = Config::getInitials();
        $bidData = $this->formRepository->check("{$bid_initials}{$bid}");
        if(! $bidData){
            return response()->json([
                'bid' => false
            ]);
        }

        return response()->json([
            'bid' => $bidData
        ])->setStatusCode(200);
    }

    /**
     * @param Request $request
     */
    public function enrol(Request $request){}

    public function captureBio(Request $request){
        try{
            event(new CaptureBioData($this->get_user_channel(), $request->get('bid')));
            return $this->onFailedRequest();
        }catch (\Exception $e){
            return $this->onSuccessRequest();
        }
    }

    private function get_user_channel()
    {
        $user = auth()->user();
        if($user == null){
            auth()->logout();
        }
        return "staff_".$user->uuid.'_channel';
    }
}