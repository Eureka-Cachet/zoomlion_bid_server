<?php

namespace clocking\Http\Controllers;

use Illuminate\Foundation\Bus\DispatchesJobs;
use Illuminate\Routing\Controller as BaseController;
use Illuminate\Foundation\Validation\ValidatesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesRequests;
use Illuminate\Foundation\Auth\Access\AuthorizesResources;

class Controller extends BaseController
{
    use AuthorizesRequests, AuthorizesResources, DispatchesJobs, ValidatesRequests;

    public function onFailedRequest($message = null)
    {
        return response()->json([
            'success' => false,
            'message' => is_null($message) ? "" : $message
        ])->setStatusCode(500);
    }

    public function onSuccessRequest()
    {
        return response()->json([
            'success' => true
        ]);
    }
}
