<?php

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| Here you may define all of your model factories. Model factories give
| you a convenient way to create models for testing and seeding your
| database. Just tell the factory how a default model should look.
|
*/

use Carbon\Carbon;
use clocking\Attendance;
use clocking\Beneficiary;
use clocking\Country;
use clocking\Department;
use clocking\Device;
use clocking\District;
use clocking\Location;
use clocking\Rank;
use clocking\Region;
use clocking\Role;

$factory->define(Country::class, function (Faker\Generator $faker) {
    return [
        'name' => 'Ghana',
    ];
});

$factory->define(Role::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
    ];
});

$factory->define(Region::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'country_id' => 1
    ];
});

$factory->define(District::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'region_id' => collect(range(1,5))->random()
    ];
});

$factory->define(Location::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->name,
        'district_id' => collect(range(1,10))->random()
    ];
});

$factory->define(Department::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word,
        'location_id' => collect(range(1,20))->random(),
        'beneficiary_id' => collect(range(1,50))->random()
    ];
});

$factory->define(Rank::class, function (Faker\Generator $faker) {
    return [
        'name' => $faker->word
    ];
});

$factory->define(Attendance::class, function(Faker\Generator $faker) {

    $start = Carbon::now()->startOfWeek()->timestamp;
    $end = Carbon::now()->endOfWeek()->timestamp;
    $timestamp = rand($start, $end);
    $date = Carbon::createFromTimestamp($timestamp);

    return [
        'beneficiary_id' => collect(Beneficiary::all())->random()->id,
        'date' => $date,
        'time' => $date,
        'device_id' => Device::first()->id
    ];
});
