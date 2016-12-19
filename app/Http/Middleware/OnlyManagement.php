<?php

namespace clocking\Http\Middleware;

use Closure;

class OnlyManagement
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if(auth()->user()->role->id != 8){
            abort(404);
        }
        return $next($request);
    }
}
