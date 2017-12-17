<?php

namespace clocking\Http;

use clocking\Http\Middleware\ApiAuth;
use clocking\Http\Middleware\AttendanceMiddleware;
use clocking\Http\Middleware\Authenticate;
use clocking\Http\Middleware\BackupsMiddleware;
use clocking\Http\Middleware\BeneficiariesMiddleware;
use clocking\Http\Middleware\DashboardMiddleware;
use clocking\Http\Middleware\DevicesMiddleware;
use clocking\Http\Middleware\DownloadsMiddleware;
use clocking\Http\Middleware\EmploymentFormMiddleware;
use clocking\Http\Middleware\EncryptCookies;
use clocking\Http\Middleware\EnrolmentMiddleware;
use clocking\Http\Middleware\LocationsMiddleware;
use clocking\Http\Middleware\LogTrailMiddleware;
use clocking\Http\Middleware\RedirectIfAuthenticated;
use clocking\Http\Middleware\ReportsMiddleware;
use clocking\Http\Middleware\SettingsMiddleware;
use clocking\Http\Middleware\UsersMiddleware;
use Illuminate\Auth\Middleware\AuthenticateWithBasicAuth;
use Illuminate\Cookie\Middleware\AddQueuedCookiesToResponse;
use Illuminate\Foundation\Http\Kernel as HttpKernel;
use Illuminate\Foundation\Http\Middleware\Authorize;
use Illuminate\Foundation\Http\Middleware\CheckForMaintenanceMode;
use Illuminate\Routing\Middleware\ThrottleRequests;
use Illuminate\Session\Middleware\StartSession;
use Illuminate\View\Middleware\ShareErrorsFromSession;
use Tymon\JWTAuth\Middleware\GetUserFromToken;
use Tymon\JWTAuth\Middleware\RefreshToken;

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
        CheckForMaintenanceMode::class,
    ];

    /**
     * The application's route middleware groups.
     *
     * @var array
     */
    protected $middlewareGroups = [
        'web' => [
            EncryptCookies::class,
            AddQueuedCookiesToResponse::class,
            StartSession::class,
            ShareErrorsFromSession::class,
//            \clocking\Http\Middleware\VerifyCsrfToken::class,
        ],

        'api' => [
            'throttle:60,1',
            StartSession::class,
            ApiAuth::class
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
        'auth' => Authenticate::class,
        'auth:api' => ApiAuth::class,
        'auth.basic' => AuthenticateWithBasicAuth::class,
        'can' => Authorize::class,
        'guest' => RedirectIfAuthenticated::class,
        'throttle' => ThrottleRequests::class,
        'session' => StartSession::class,
        'jwt.auth' => GetUserFromToken::class,
        'jwt.refresh' => RefreshToken::class,
        'dashboard' => DashboardMiddleware::class,
        'beneficiaries' => BeneficiariesMiddleware::class,
        'attendance' => AttendanceMiddleware::class,
        'users' => UsersMiddleware::class,
        'locations' => LocationsMiddleware::class,
        'devices' => DevicesMiddleware::class,
        'reports' => ReportsMiddleware::class,
        'form' => EmploymentFormMiddleware::class,
        'enrolment' => EnrolmentMiddleware::class,
        'backups' => BackupsMiddleware::class,
        'logs' => LogTrailMiddleware::class,
        'settings' => SettingsMiddleware::class,
        'download' => DownloadsMiddleware::class
    ];
}
