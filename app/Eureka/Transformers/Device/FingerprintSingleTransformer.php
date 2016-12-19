<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 11/29/16
 * Time: 9:50 PM
 */

namespace Eureka\Transformers\Device;


use clocking\Fingerprint;
use League\Fractal\TransformerAbstract;

class FingerprintSingleTransformer extends TransformerAbstract
{
    public function transform(Fingerprint $fingerprint){
        return [
            "bid" => $fingerprint->beneficiary->form_id,
            "fingerprint" => $fingerprint->fingerprint,
            "finger_type" => $fingerprint->finger_type
        ];
    }
}