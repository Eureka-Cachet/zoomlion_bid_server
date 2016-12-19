<?php

namespace clocking;

use clocking\Model;

class Rank extends Model
{
    protected $fillable = ['name', 'code'];

    public function departments(){
        return $this->belongsToMany(Department::class);
    }

    public function beneficiaries(){
        return $this->hasMany(Beneficiary::class, 'rank_id');
    }
}
