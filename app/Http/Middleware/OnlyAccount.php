<?php

namespace clocking\Http\Middleware;

use Closure;

class OnlyAccount
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
        if(auth()->user()->role->id != 4){
            abort(404);
        }
        return $next($request);
    }
}
