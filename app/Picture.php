<?php

namespace clocking;

use clocking\Model;

class Picture extends Model
{
    protected $fillable = ['path', 'beneficiary_id', 'encoded'];

    public function beneficiary(){
        return $this->belongsTo(Beneficiary::class, 'beneficiary_id');
    }
}
