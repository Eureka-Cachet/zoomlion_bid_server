<?php

namespace clocking\Http\Controllers\Api\Internal;



use clocking\Http\Controllers\Controller;
use clocking\Rank;

class RankApiController extends Controller{

    /**
     *
     */
    public function all(){
        $ranks = Rank::all();
        return response()->json($ranks)->setStatusCode(200);
    }
}