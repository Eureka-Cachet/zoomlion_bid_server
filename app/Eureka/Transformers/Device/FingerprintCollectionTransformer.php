<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/29/16
 * Time: 9:41 PM
 */

namespace Eureka\Transformers\Device;


use clocking\Fingerprint;
use League\Fractal\TransformerAbstract;

class FingerprintCollectionTransformer extends TransformerAbstract
{
    /**
     * @var
     */
    private $decode;

    /**
     * FingerprintCollectionTransformer constructor.
     * @param $decode
     */
    public function __construct($decode)
    {
        $this->decode = $decode;
    }

    public function transform(Fingerprint $fingerprint){
        return [
            "bid" => $fingerprint->beneficiary->bid,
            "fingerprint" => $this->decode ? base64_decode($fingerprint->fingerprint) : $fingerprint->fingerprint,
            "finger_type" => $fingerprint->finger_type
        ];
    }
}