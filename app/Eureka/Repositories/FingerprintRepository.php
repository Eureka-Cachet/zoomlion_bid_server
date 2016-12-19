<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/29/16
 * Time: 9:20 PM
 */

namespace Eureka\Repositories;


use clocking\Beneficiary;
use clocking\District;
use clocking\Fingerprint;

class FingerprintRepository
{
    /**
     * @var Fingerprint
     */
    private $fingerprint;
    /**
     * @var Beneficiary
     */
    private $beneficiary;

    /**
     * FingerprintRepository constructor.
     * @param Fingerprint $fingerprint
     * @param Beneficiary $beneficiary
     */
    public function __construct(Fingerprint $fingerprint, Beneficiary $beneficiary)
    {
        $this->fingerprint = $fingerprint;
        $this->beneficiary = $beneficiary;
    }

    public function all(){
        return $this->fingerprint->all();
    }

    public function single($bid){
        $beneficiary = $this->beneficiary
            ->with('fingerprint')
            ->where('form_id', $bid)
            ->first();
        return $beneficiary->fingerprint;
    }

    /**
     * @param $data
     */
    public function add($data)
    {
        $this->fingerprint->create($data);
    }

    /**
     * @param $location_id
     * @return mixed
     */
    public function all_for_location($location_id)
    {
        $location = District::with('beneficiaries', 'beneficiaries.fingerprints')
            ->find($location_id)->region;
        $fingerprints = $location->beneficiaries->reject(function(Beneficiary $b){
            return collect($b->fingerprints)->isEmpty();
        })->map(function($b){
            return $b->fingerprints->all();
        })->flatten(1);
//            ->map(function($f){
//            return [
//                'bid' => $f->beneficiary->bid,
//                'fingerprint' => $f->fingerprint,
//                'finger_type' => $f->finger_type
//            ];
//        });

        return $fingerprints;
    }
}