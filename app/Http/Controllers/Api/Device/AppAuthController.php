<?php

namespace clocking\Http\Controllers\Api\Device;


use Carbon\Carbon;
use clocking\Device;
use clocking\DeviceHistory;
use clocking\Events\FingerprintsUpdated;
use clocking\Fingerprint;
use clocking\Http\Controllers\Controller;
use clocking\User;
use Dingo\Api\Routing\Helpers;
use Eureka\Helpers\CodeGenerator;
use Eureka\Repositories\UsersRepository;
use Eureka\Transformers\Device\FingerprintCollectionTransformer;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;
use Tymon\JWTAuth\Exceptions\JWTException;
use Tymon\JWTAuth\Facades\JWTAuth;

class AppAuthController extends Controller
{

    use Helpers;

    /**
     * @var Guard
     */
    private $guard;
    /**
     * @var UsersRepository
     */
    private $usersRepository;

    /**
     * AppAuthController constructor.
     * @param Guard $guard
     * @param UsersRepository $usersRepository
     */
    public function __construct(Guard $guard, UsersRepository $usersRepository)
    {
        $this->guard = $guard;
        $this->usersRepository = $usersRepository;
    }

    public function login(Request $request){

        $credentials = $request->only('pin', 'device_id');
        try{
            $user = $this->usersRepository->get_by_pin_and_device_id($credentials["pin"], $credentials["device_id"]);
//            dd($user);

            if(! $user) return $this->respondForAuth("error", 401, "Invalid Credentials");

            $token = JWTAuth::fromUser($user);

            if( ! $token ){
                return $this->respondForAuth("error", 401, "Invalid Credentials");
            }
        } catch(JWTException $e){
            return $this->respondForAuth("error", 500, "Could not create token");
        }
        //dispatch supervisor login event
        $log_uuid = $this->updateHistoryLogsForConnect($user);

        $this->test_fingerprints($user);

        return $this->respondForAuth('success', '200', 'login successful',
            $token, $user->uuid, $log_uuid, $user->roles->first()->id, $user->district->code);
    }

    /**
     * @return \Symfony\Component\HttpFoundation\Response
     */
    public function logout(){
        $user = $this->auth()->user();
        if(! $user) return $this->respondForAuth('error', '402', 'Unauthorized');

        $log_uuid = request()->get('log_uuid');

//        dd($log_uuid);

        if(!$this->updateHistoryLogsForDisconnect($user, $log_uuid)){
            return $this->respondForAuth('error', '402', 'logout failed');
        }
        return $this->respondForAuth("success", '200', 'logout successful');
    }

    private function respondForAuth($status, $code, $message, $token = null, $userUUID = null,
                                    $log_uuid = null, $role_id = null, $district_code = null)
    {
        return response()->json([
            "status" => $status,
            "message" => $message,
            "code" => $code,
            "token" => $token,
            "userUUID" => $userUUID,
            "logUUID" => $log_uuid,
            "userRoleId" => $role_id,
            "districtCode" => $district_code
        ])->setStatusCode($code);
    }

    /**
     * @param User $user
     * @return string
     */
    private function updateHistoryLogsForConnect(User $user)
    {
        $uuid = CodeGenerator::uuid();
        $time = Carbon::now();

        if ($user->roles->first()->id == 1){
            Device::first()->logs()->create([
                "connected_time" => $time,
                "uuid" => $uuid,
                "disconnected_time" => $time
            ]);
            return $uuid;
        }

        $device = $user->device;
//        dd($device);
        $device->logs()->create([
            "connected_time" => $time,
            "uuid" => $uuid,
            "disconnected_time" => $time
        ]);
        return $uuid;
    }

    /**
     * @param $user
     * @param $log_uuid
     * @return bool
     */
    private function updateHistoryLogsForDisconnect($user, $log_uuid)
    {
        $now = Carbon::now();
        $log = DeviceHistory::where("uuid", $log_uuid)->first();

        if($user->roles->first()->id == 1){
            $log->update(["disconnected_time" => $now]);
            return true;
        }

        if($user->device->id != $log->device_id){
            return false;
        }

        $log->update(["disconnected_time" => $now]);
        return true;
    }

    private function getAllFingerprints($district_code)
    {
        $fingerprints = Fingerprint::all()->filter(function(Fingerprint $f) use($district_code){
            return !is_null($f->beneficiary)
                && $f->beneficiary->district->code == $district_code;
        });
        $data = (new Manager())->createData(
            new Collection($fingerprints,
                new FingerprintCollectionTransformer(false)))
            ->toArray();
        return $data["data"];
    }

    private function get_finger_prints_updated_channel(User $user)
    {
        $beneficiary_district = $user->district->code;
        return "{$beneficiary_district}_FINGERPRINTS";
    }

    private function test_fingerprints(User $user)
    {
        $channel = $this->get_finger_prints_updated_channel($user);
        event(new FingerprintsUpdated([], $channel));
    }
}