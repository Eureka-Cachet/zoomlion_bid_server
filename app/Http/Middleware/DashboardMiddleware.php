<?php

namespace clocking\Http\Middleware;

use Closure;
use Eureka\Helpers\Constants;

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
        $role_id = auth()->user()->roles->first()->id;
        if(
            !collect([Constants::SYSADMIN_ROLE, Constants::ADMIN_ROLE, Constants::MANAGEMENT_ROLE, Constants::IT_ROLE])->contains($role_id)
        ){
            if($request->ajax() || $request->wantsJson()){
                return response('Unauthorized.', 401);
            }
            return redirect()->back();
        }
        return $next($request);
    }
}
