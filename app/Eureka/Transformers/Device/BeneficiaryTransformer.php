<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/4/16
 * Time: 10:16 PM
 */

namespace Eureka\Transformers\Device;


use clocking\Beneficiary;
use League\Fractal\TransformerAbstract;

class BeneficiaryTransformer extends TransformerAbstract
{
    /**
     * @var
     */
    private $collection;

    /**
     * BeneficiaryTransformer constructor.
     * @param $collection
     */
    public function __construct($collection)
    {
        $this->collection = $collection;
    }

    public function transform(Beneficiary $beneficiary)
    {
        if($this->collection){
            return $this->transform_collection($beneficiary);
        }
        return [
            'picture' => $beneficiary->picture->encoded,
            'name' => $beneficiary->full_name,
            'bid' => $beneficiary->bid
        ];
    }

    private function transform_collection(Beneficiary $beneficiary)
    {
        return [];
    }
}