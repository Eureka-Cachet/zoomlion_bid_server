<?php

namespace clocking;

use clocking\Model;

class Fingerprint extends Model
{
    protected $fillable = ['path', 'finger_type', 'fingerprint', 'beneficiary_id', 'encoded'];

    public function beneficiary(){
        return $this->belongsTo(Beneficiary::class, 'beneficiary_id');
    }
}
