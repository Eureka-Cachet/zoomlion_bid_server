<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/13/16
 * Time: 9:16 AM
 */

namespace clocking\Http\Controllers\Api\Internal;


use clocking\Http\Controllers\Controller;
use clocking\Identification;

class IdApiController extends Controller
{
    /**
     * @var Identification
     */
    private $identification;

    /**
     * IdApiController constructor.
     * @param Identification $identification
     */
    public function __construct(Identification $identification)
    {
        $this->identification = $identification;
    }

    public function all()
    {
        return $this->identification->all();
    }
}