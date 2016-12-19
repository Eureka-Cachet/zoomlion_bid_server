<?php
    $env = $app->detectEnvironment(function(){
        $environmentPath = __DIR__.'/../.env';

        $setEnv = trim(file_get_contents($environmentPath));

        if (file_exists($environmentPath))
        {
            $setEnv = trim(file_get_contents($environmentPath));
            putenv('APP_ENV='.$setEnv);

            //if you are using Laravel 5.1 uncomment out this code to use.
            //Dotenv::load(__DIR__ . '/../', '.' . getenv('APP_ENV') . '.env');


            // LARAVEL 5.2  - use this below..
            $dotenv = new Dotenv\Dotenv(__DIR__ . '/../', '.' . getenv('APP_ENV') . '.env');
            $dotenv->overload(); //this is important
        }
    });