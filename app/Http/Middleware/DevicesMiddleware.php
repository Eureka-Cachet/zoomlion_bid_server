<?php

namespace clocking\Http\Middleware;

use Closure;

class DevicesMiddleware
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
        $role_id = auth()->user()->roles->first()->id;
        if(
        !collect([1, 5])->contains($role_id)
        ){
            if($request->ajax() || $request->wantsJson()){
                return response('Unauthorized.', 401);
            }
            abort(404);
        }
        return $next($request);
    }
}
