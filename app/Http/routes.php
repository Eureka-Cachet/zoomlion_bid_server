<?php

Route::get('/auth/login', ['as' => 'login', 'uses' => 'ServerAuthController@getLogin']);
Route::post('/auth/login', ['as' => 'postLogin', 'uses' => 'ServerAuthController@postLogin']);
Route::get('/auth/logout', ['as' => 'logout', 'uses' => 'ServerAuthController@logout']);

Route::group(['middleware' => ['web', 'auth']], function(){
    Route::get('/', ['as' => 'index', 'uses' => 'PagesController@index']);
    Route::get('/dashboard', ['middleware' => 'dashboard', 'as' => 'dashboard', 'uses' => 'PagesController@dashboard']);

    Route::get('/settings', ['as' => 'settings.index', 'uses' => 'PagesController@settings']);

    Route::get('/logs', ['as' => 'logs.index', 'uses' => 'PagesController@logs']);

    Route::get('/users', ['as' => 'users.index', 'uses' => 'UsersController@index']);
    Route::get('/users/{id}', ['as' => 'user.profile', 'uses' => 'UsersController@profile']);

    Route::get('/beneficiaries', ['as'=> 'beneficiaries.index', 'uses'=> 'BeneficiaryController@index']);
    Route::get('/beneficiaries/{id}', ['as'=> 'beneficiaries.profile', 'uses'=> 'BeneficiaryController@single']);
    Route::get('/beneficiaries/{id}/update', ['as'=> 'beneficiaries.profile.update', 'uses'=> 'BeneficiaryController@update']);

    Route::get('/locations', ['middleware' => 'locations', 'as' => 'locations.index', 'uses' => 'PagesController@locations']);

    Route::get('/devices', ['middleware' => 'devices', 'as' => 'devices.index', 'uses' => 'PagesController@devices']);

    Route::get('/clocking', ['middleware' => 'attendance', 'as' => 'clocking.index', 'uses' => 'PagesController@clocking']);

    Route::get('/reports', ['middleware' => 'reports', 'as' => 'reports.index', 'uses' => 'PagesController@reports']);

    Route::get('/employment', ['middleware' => 'form', 'as' => 'employment.index', 'uses' => 'PagesController@employment']);

    Route::get('/enrolment', ['middleware' => 'enrolment', 'as' => 'enrolment.index', 'uses' => 'PagesController@enrolment']);

    Route::get('/backup', ['middleware' => 'backups', 'as' => 'backups.index', 'uses' => 'PagesController@backups']);

    Route::get('/download', ['as' => 'pdf.download', 'uses' => 'PagesController@download']);
});

Route::group(['prefix' => 'internal-api','namespace' => 'Api\Internal', 'middleware' => ['api']], function(){

    Route::get('/dashboard/clocking', ['as' => 'api.dash.clocking', 'uses' => 'DashboardApiController@clocking']);
    Route::get('/dashboard/devices', ['as' => 'api.dash.devices', 'uses' => 'DashboardApiController@devices']);
    Route::get('/dashboard/regions', ['as' => 'api.dash.regions', 'uses' => 'DashboardApiController@regions']);
    Route::get('/dashboard/beneficiaries', ['as' => 'api.dash.beneficiaries', 'uses' => 'DashboardApiController@beneficiaries']);

    Route::get('/users', ['as'=>'api.users.all', 'uses'=>'UserApiController@all']);
    Route::get('/users/{id}', ['as'=>'api.user', 'uses'=>'UserApiController@single']);
    Route::post('/users', ['as'=>'api.users.create', 'uses'=>'UserApiController@add']);
    Route::post('/users/{id}/update', ['as'=>'api.user.update', 'uses'=>'UserApiController@update']);
    Route::post('/users/{id}/delete', ['as'=>'api.user.delete', 'uses'=>'UserApiController@delete']);
    Route::post('/users/{id}/reset', ['as'=>'api.user.reset', 'uses'=>'UserApiController@reset']);


    Route::get('/backups', ['as'=>'api.backups.all', 'uses'=>'DbOperationApiController@get_all_dumps']);
    Route::post('/backups', ['as'=>'api.backups.new', 'uses'=>'DbOperationApiController@backup']);
    Route::post('/backups/{key}/restore', ['as'=>'api.backups.restore', 'uses'=>'DbOperationApiController@restore']);
    Route::post('/backups/{key}', ['as'=>'api.backups.delete', 'uses'=>'DbOperationApiController@delete_backup']);
    Route::post('/backups-delete/', ['as'=>'api.backups.delete_multiple', 'uses'=>'DbOperationApiController@remove_lot']);

    Route::get('/schedules', ['as'=>'api.schedules.all', 'uses'=>'DbOperationApiController@all_schedules']);
    Route::post('/schedules', ['as'=>'api.schedules.new', 'uses'=>'DbOperationApiController@schedule']);
    Route::post('/schedules/delete', ['as'=>'api.schedules.delete', 'uses'=>'DbOperationApiController@delete_schedule']);


    Route::get('/roles', ['as'=>'api.roles.all', 'uses'=>'RoleApiController@all']);
    
    Route::get('/ranks', ['as' => 'api.ranks.all', 'uses' => 'RankApiController@all']);

    Route::get('/countries', ['as'=>'api.countries.all', 'uses'=>'CountryApiController@all']);

    Route::get('/regions', ['as'=>'api.regions.all', 'uses'=>'RegionApiController@all']);
    Route::get('/regions/{id}/districts', ['as'=>'api.regions.districts', 'uses'=>'RegionApiController@get_districts']);
    Route::put('/regions/{id}', ['as'=>'api.regions.update', 'uses'=>'RegionApiController@get_districts']);
    Route::post('/regions', ['as'=>'api.regions.new', 'uses'=>'RegionApiController@get_districts']);
    Route::delete('/regions/{id}/districts', ['as'=>'api.regions.delete', 'uses'=>'RegionApiController@get_districts']);

    Route::get('/districts', ['as'=>'api.districts.all', 'uses'=>'DistrictApiController@all']);
    Route::post('/districts', ['as'=>'api.districts.new', 'uses'=>'DistrictApiController@add_new_district']);
    Route::get('/districts/{id}/locations', ['as'=>'api.districts.locations', 'uses'=>'DistrictApiController@get_locations']);
    Route::delete('/districts/{id}', ['as'=>'api.districts.delete', 'uses'=>'DistrictApiController@delete_district']);
    Route::put('/districts/{id}', ['as'=>'api.districts.update', 'uses'=>'DistrictApiController@update_district']);

    Route::get('/locations', ['as'=>'api.locations.all', 'uses'=>'LocationApiController@all']);
    Route::get('/locations/{id}/modules', ['as'=>'api.locations.modules', 'uses'=>'LocationApiController@modules']);
    Route::put('/locations/{id}', ['as'=>'api.locations.update', 'uses'=>'LocationApiController@update_location']);
    Route::delete('/locations/{id}', ['as'=>'api.locations.delete', 'uses'=>'LocationApiController@delete_location']);
    Route::post('/locations', ['as'=>'api.locations.new', 'uses'=>'LocationApiController@add_new_location']);

    Route::get('/departments', ['as'=>'api.departments.all', 'uses'=>'ModuleApiController@all']);
    Route::post('/departments', ['as'=>'api.departments.new', 'uses'=>'ModuleApiController@add']);
    Route::get('/departments/{id}/staff', ['as'=>'api.departments.staff', 'uses'=>'ModuleApiController@staff']);
    Route::delete('/departments/{id}', ['as'=>'api.departments.delete', 'uses'=>'ModuleApiController@delete']);
    Route::put('/departments/{id}', ['as'=>'api.departments.update', 'uses'=>'ModuleApiController@update']);

    Route::get('/modules', ['as'=>'api.modules.all', 'uses'=>'DepartmentApiController@all']);

    Route::get('/clocking', ['as' => 'api.clocking.all', 'uses' => 'ClockingApiController@all']);
    Route::get('/clocking/{bid}', ['as' => 'api.clocking.single', 'uses' => 'ClockingApiController@single']);

    Route::post('/employments/form', ['as' => 'api.employment.form', 'uses' => 'EmploymentApiController@generate_form']);

    Route::post('/enrolment/check-bid', ['as' => 'api.enrolment.checkBid', 'uses' => 'EnrolmentApiController@checkBid']);
    Route::post('/enrolment', ['as' => 'api.enrolment.new', 'uses' => 'EnrolmentApiController@enrol']);
    Route::post('/enrolment/capture-bio', ['as' => 'api.enrolment.bio', 'uses' => 'EnrolmentApiController@captureBio']);

    Route::get('/beneficiaries', ['as' => 'api.beneficiary.all', 'uses' => 'BeneficiaryApiController@all']);
    Route::post('/beneficiaries', ['as' => 'api.beneficiary.new', 'uses' => 'BeneficiaryApiController@add']);
    Route::get('/beneficiaries/{id}', ['as' => 'api.beneficiary.single', 'uses' => 'BeneficiaryApiController@single']);
    Route::post('/beneficiaries/{id}/activate', ['as' => 'api.beneficiary.activate', 'uses' => 'BeneficiaryApiController@activate']);
    Route::post('/beneficiaries/{id}/deactivate', ['as' => 'api.beneficiary.deactivate', 'uses' => 'BeneficiaryApiController@deactivate']);
    Route::post('/beneficiaries/{id}', ['as' => 'api.beneficiary.update', 'uses' => 'BeneficiaryApiController@update']);

    Route::get('/devices', ['as' => 'api.devices.all', 'uses' => 'DeviceApiController@all']);
    Route::post('/devices', ['as' => 'api.devices.add', 'uses' => 'DeviceApiController@add']);
    Route::get('/devices/{id}', ['as' => 'api.devices.show', 'uses' => 'DeviceApiController@show']);
    Route::delete('/devices/{id}', ['as' => 'api.devices.delete', 'uses' => 'DeviceApiController@delete']);
    Route::put('/devices/{id}', ['as' => 'api.devices.update', 'uses' => 'DeviceApiController@update']);

    Route::get('/ids', ['as' => 'api.ids.all', 'uses' => 'IdApiController@all']);

    Route::post('/reports/generate', ['as' => 'api.reports.generate', 'uses' => 'ReportApiController@generate']);
});

$api = app('Dingo\Api\Routing\Router');
$api->version('v1', function($api){
    $api->post('/login', ['uses' => 'clocking\Http\Controllers\Api\Device\AppAuthController@login']);

    $api->group(['middleware' => 'api.auth'], function($api){
        $api->post('/logout', ['uses' => 'clocking\Http\Controllers\Api\Device\AppAuthController@logout']);

        $api->get('/fingerprints/{device_id}', ['uses' => 'clocking\Http\Controllers\Api\Device\FingerprintsApiController@all']);

        $api->post('/clocks', ['uses' => 'clocking\Http\Controllers\Api\Device\ClockApiController@add']);
    });
});

