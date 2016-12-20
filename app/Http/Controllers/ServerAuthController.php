<?php

namespace clocking\Http\Controllers;

use Carbon\Carbon;
use clocking\User;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;

use clocking\Http\Requests;

class ServerAuthController extends Controller
{
    /**
     * @var Guard
     */
    private $auth;

    /**
     * @param Guard $auth
     */
    public function __construct(Guard $auth){
        $this->auth = $auth;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function getLogin()
    {
        return view('auth.login');
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function postLogin(Request $request)
    {
        $credentials = $this->getCredentials($request);
        if(! auth()->attempt($credentials)){
            return $this->on_login_failed();
        }

        return $this->on_login_successful();
    }

    /**
     * @return \Illuminate\Http\RedirectResponse
     */
    public function logout()
    {
//        activity()
//            ->causedBy(auth()->user())
//            ->withProperty('time', Carbon::now())
//            ->log("Logged out");

        $this->auth->logout();

        return redirect()->route('login');
    }

    /**
     * @param Request $request
     * @return array
     */
    private function getCredentials(Request $request)
    {
        return $request->only(['username', 'password']);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_login_failed()
    {
        return response()->json([
            'success' => false
        ]);
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    private function on_login_successful()
    {
//        activity()
//            ->causedBy(auth()->user())
//            ->withProperty('time', Carbon::now())
//            ->log("Logged in");
        $default_url = $this->get_default_url();
        $intended_url = session()->pull('url.intended', $default_url);
        return response()->json([
            'success' => true,
            'url' => $intended_url
        ]);
    }

    /**
     * @return null|string
     */
    private function get_default_url()
    {
        return $this->get_assigned_url_based_user_role();
    }

    /**
     * @return mixed
     */
    private function get_authenticated_user_role()
    {
        return auth()->user()->role;
    }

    /**
     * @return null|string
     */
    private function get_assigned_url_based_user_role()
    {
        $role = $this->get_authenticated_user_role();
        $url = null;
        switch($role->id){
            case 1:
                $url = url("/");
                break;
            case 2:
                $url = url("/beneficiaries");
                break;
            case 3:
                $url = url("/reports");
                break;
            case 4:
                $url = url("/reports");
                break;
            case 5:
                $url = url("/");
                break;
            case 8:
                $url = url("/");
                break;
        }
        return $url;
    }
}
