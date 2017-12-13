<?php
/**
 * Created by PhpStorm.
 * User: GURU
 * Date: 5/8/2016
 * Time: 2:03 PM
 */

namespace Eureka\Repositories;


use clocking\Form;

class FormRepository
{
    /**
     * @var Form
     */
    private $form;

    /**
     * @param Form $form
     */
    public function __construct(Form $form){
        $this->form = $form;
    }

    /**
     * @return mixed
     */
    public function get_last_generated()
    {
        return $this->form->orderBy('id', 'desc')->first();
    }

    /**
     * @param $bid
     * @return \Illuminate\Database\Eloquent\Model|null|static
     */
    public function check($bid){
        $bid = $this->form->with(['rank', 'module', 'module.location',
            'module.location.district',
            'module.location.district.region',
            'module.department'])
            ->where(['enrolled' => 0, 'code' => $bid])
            ->first();

        $user_district = auth()->user()->district;
        $bid_district = $bid->module->location->district;

        if(!$user_district) return null;

        return $bid_district->id == $user_district->id ? $bid : null;
    }

    /**
     * @param $random
     * @return bool
     */
    public function isUniq($random)
    {
        $unique = false;
        if($this->check($random)){
            $unique = true;
        }
        return $unique;
    }
}