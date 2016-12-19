<?php

namespace clocking\Http\Controllers;

use Illuminate\Http\Request;

use clocking\Http\Requests;

class SearchController extends Controller
{
    public function search(Request $request)
    {
        $result = [];
        $q = $request->get('q');

        session()->put('result', $result);
        return redirect()->route('search.result');
    }

    public function result()
    {
        $result = session()->get('result');

        return view('search.index')->with('users', $result);
    }
}
