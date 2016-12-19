<?php

namespace clocking;

use clocking\Model;

class BackupSchedule extends Model
{
    protected $fillable = ['uuid', 'frequency'];
}
