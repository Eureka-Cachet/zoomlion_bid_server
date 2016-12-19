<?php

namespace clocking;

use clocking\Model;

class Department extends Model
{
    protected $fillable = ['name', 'code'];

    public function ranks(){
        return $this->belongsToMany(Rank::class);
    }
}
