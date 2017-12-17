<?php

namespace clocking\Http\Middleware;

use Closure;

class DownloadsMiddleware
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
        if(is_null($request->get('filename') && is_null($request->get('type')))){
            if($request->ajax() || $request->wantsJson()){
                return response('File Not Found.', 404);
            }
            abort(404);
        }
        return $next($request);
    }
}
