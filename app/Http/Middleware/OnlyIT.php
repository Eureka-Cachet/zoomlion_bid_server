<?php

namespace clocking\Http\Middleware;

use Closure;

class OnlyIT
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
        if(auth()->user()->roles->first()->id != 5){
            abort(404);
        }
        return $next($request);
    }
}
