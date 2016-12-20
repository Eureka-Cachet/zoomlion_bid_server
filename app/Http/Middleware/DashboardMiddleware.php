<?php

namespace clocking\Http\Middleware;

use Closure;

class DashboardMiddleware
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
        $role_id = auth()->user()->role->id;
        if(
            !collect([1, 8, 5])->contains($role_id)
        ){
            if($request->ajax() || $request->wantsJson()){
                return response('Unauthorized.', 401);
            }
            return redirect()->back();
        }
        return $next($request);
    }
}
