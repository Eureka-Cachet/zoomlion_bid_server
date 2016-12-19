<?php

namespace clocking\Http;

use Illuminate\Foundation\Http\Kernel as HttpKernel;

class Kernel extends HttpKernel
{
    /**
     * The application's global HTTP middleware stack.
     *
     * These middleware are run during every request to your application.
     *
     * @var array
     */
    protected $middleware = [
        \Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            \clocking\Http\Middleware\EncryptCookies::class,
            \Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse::class,
            \Illuminate\Session\Middleware\StartSession::class,
            \Illuminate\View\Middleware\ShareErrorsFromSession::class,
//            \clocking\Http\Middleware\VerifyCsrfToken::class,
        ],

        'api' => [
            'throttle:60,1',
            \Illuminate\Session\Middleware\StartSession::class,
            \clocking\Http\Middleware\ApiAuth::class
        ],
    ];

    /**
     * The application's route middleware.
     *
     * These middleware may be assigned to groups or used individually.
     *
     * @var array
     */
    protected $routeMiddleware = [
        'auth' => \clocking\Http\Middleware\Authenticate::class,
        'auth:api' => \clocking\Http\Middleware\ApiAuth::class,
        'auth.basic' => \Illuminate\Auth\Middleware\AuthenticateWithBasicAuth::class,
        'can' => \Illuminate\Foundation\Http\Middleware\Authorize::class,
        'guest' => \clocking\Http\Middleware\RedirectIfAuthenticated::class,
        'throttle' => \Illuminate\Routing\Middleware\ThrottleRequests::class,
        'session' => \Illuminate\Session\Middleware\StartSession::class,
        'jwt.auth' => \Tymon\JWTAuth\Middleware\GetUserFromToken::class,
        'jwt.refresh' => \Tymon\JWTAuth\Middleware\RefreshToken::class,
        'dashboard' => \clocking\Http\Middleware\DashboardMiddleware::class,
        'beneficiaries' => \clocking\Http\Middleware\BeneficiariesMiddleware::class,
        'attendance' => \clocking\Http\Middleware\AttendanceMiddleware::class,
        'users' => \clocking\Http\Middleware\UsersMiddleware::class,
        'locations' => \clocking\Http\Middleware\LocationsMiddleware::class,
        'devices' => \clocking\Http\Middleware\DevicesMiddleware::class,
        'reports' => \clocking\Http\Middleware\ReportsMiddleware::class,
        'form' => \clocking\Http\Middleware\EmploymentFormMiddleware::class,
        'enrolment' => \clocking\Http\Middleware\EnrolmentMiddleware::class,
        'backups' => \clocking\Http\Middleware\BackupsMiddleware::class,
        'logs' => \clocking\Http\Middleware\LogTrailMiddleware::class,
        'settings' => \clocking\Http\Middleware\SettingsMiddleware::class
    ];
}
