<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/29/16
 * Time: 8:07 PM
 */

namespace clocking\Http\Controllers\Api\Device;


use clocking\Fingerprint;
use clocking\Http\Controllers\Controller;
use Dingo\Api\Routing\Helpers;
use Eureka\Helpers\CodeGenerator;
use Eureka\Repositories\DeviceRepository;
use Eureka\Repositories\FingerprintRepository;
use Eureka\Transformers\Device\FingerprintCollectionTransformer;
use League\Fractal\Manager;
use League\Fractal\Resource\Collection;

class FingerprintsApiController extends Controller
{
    use Helpers;
    /**
     * @var FingerprintRepository
     */
    private $fingerprintRepository;
    /**
     * @var Manager
     */
    private $manager;
    /**
     * @var DeviceRepository
     */
    private $deviceRepository;

    /**
     * FingerprintsDeviceController constructor.
     * @param FingerprintRepository $fingerprintRepository
     * @param Manager $manager
     * @param DeviceRepository $deviceRepository
     */
    public function __construct(FingerprintRepository $fingerprintRepository, Manager $manager, DeviceRepository $deviceRepository)
    {
        $this->fingerprintRepository = $fingerprintRepository;
        $this->manager = $manager;
        $this->deviceRepository = $deviceRepository;
    }

    public function all($device_id){
        $device_location = $this->get_device_location($device_id);

        if(! $device_location) return [];

        $fingerprints = $this->fingerprintRepository->all_for_location($device_location->id);

        $transformed = $this->manager->createData(new Collection($fingerprints,
            new FingerprintCollectionTransformer(false)))
            ->toArray()["data"];

        return CodeGenerator::array_utf8_encode($transformed);
    }

    /**
     * @param $device_id
     * @return mixed
     */
    private function get_device_location($device_id)
    {
        return $this->deviceRepository->get_device_location($device_id);
    }
}