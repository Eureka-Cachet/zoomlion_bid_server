<?php

namespace clocking\Http\Controllers;

use clocking\District;
use clocking\Region;
use Eureka\Repositories\UsersRepository;
use Illuminate\Http\Request;

use clocking\Http\Requests;

class UsersController extends Controller
{
    /**
     * @var UsersRepository
     */
    private $repository;

    /**
     * @param UsersRepository $repository
     */
    public function __construct(UsersRepository $repository){
        $this->repository = $repository;
    }

    public function index()
    {
        return view('users.index', [
            'districts' => District::all(),
            'regions' => Region::all()
        ]);
    }

    public function profile($id)
    {
        $user = $this->repository->single_user($id);

        if(is_null($user)) abort(404);

        return view('users.profile')->with('user', $user);
    }

    public function resetAccount(){}
}
