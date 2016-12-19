<?php

namespace clocking;

use clocking\Model;

class Locationable extends Model
{
    protected $fillable = ['locationable_id', 'locationable_type', 'user_id'];

    public function locationable(){
        return $this->morphTo();
    }

    public function user(){
        return $this->belongsTo(User::class, 'user_id');
    }
}
