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

    public function check($bid){
        return $this->form->with(['rank', 'module', 'module.location',
            'module.location.district',
            'module.location.district.region',
            'module.department'])
            ->where(['enrolled' => 0, 'code' => $bid])
            ->first();
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