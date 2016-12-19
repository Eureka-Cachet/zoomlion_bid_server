<?php

namespace clocking\Http\Middleware;

use Closure;
use Illuminate\Routing\UrlGenerator;
use Illuminate\Support\Facades\Auth;

class Authenticate
{

    /**
     * @var UrlGenerator
     */
    private $urlGenerator;

    public function __construct(UrlGenerator $urlGenerator){
        $this->urlGenerator = $urlGenerator;
    }
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @param  string|null  $guard
     * @return mixed
     */
    public function handle($request, Closure $next, $guard = null)
    {
        if (Auth::guard($guard)->guest()) {
            if ($request->ajax() || $request->wantsJson()) {
                if(!$this->there_is_any_login_in_session()){
                    return response('Unauthorized.', 401);
                }
            }
            session()->put('url.intended', $this->urlGenerator->full());
            return redirect()->route('login');
        }

        return $next($request);
    }

    /**
     * @return bool
     */
    private function there_is_any_login_in_session()
    {
        return !! auth()->user();
    }
}
