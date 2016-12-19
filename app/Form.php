<?php

namespace clocking;

use clocking\Model;

class Form extends Model
{
    protected $fillable = ['code', 'uuid', 'module_id', 'user_id', 'rank_id', 'enrolled', 'image', 'encoded'];

    public function beneficiary(){
        return $this->hasOne(Beneficiary::class, 'form_id');
    }

    public function generator(){
        return $this->belongsTo(User::class, 'user_id');
    }

    public function rank(){
        return $this->belongsTo(Rank::class, 'rank_id');
    }

    public function module(){
        return $this->belongsTo(Module::class, 'module_id');
    }
}
