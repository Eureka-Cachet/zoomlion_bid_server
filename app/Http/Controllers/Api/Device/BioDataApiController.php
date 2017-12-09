<?php

namespace clocking\Http\Controllers\Api\Device;


use clocking\Http\Controllers\Controller;
use Illuminate\Http\Request;

class BioDataApiController extends Controller
{

    public function __construct()
    {
    }

    public function fingers(Request $request){
        $thumb_right = $request->file('thumbRight');
        $thumb_left = $request->file('thumbLeft');
        $index_right = $request->file('indexRight');
        $index_left = $request->file('indexLeft');
    }

    public function face(Request $request){

    }
}