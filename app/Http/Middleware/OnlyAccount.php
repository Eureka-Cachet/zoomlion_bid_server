<?php

namespace clocking\Http\Middleware;

use Closure;
use Eureka\Helpers\Constants;

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
        if(auth()->user()->roles->first()->id != Constants::ACCOUNT_ROLE){
            abort(404);
        }
        return $next($request);
    }
}
