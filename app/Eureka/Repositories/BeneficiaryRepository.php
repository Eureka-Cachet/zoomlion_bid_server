<?php
/**
 * Created by PhpStorm.
 * User: guru
 * Date: 12/1/16
 * Time: 9:08 PM
 */

namespace Eureka\Repositories;


use clocking\Beneficiary;
use clocking\Form;
use Eureka\Helpers\CodeGenerator;
use Eureka\Helpers\Config;
use Illuminate\Http\Request;
use Illuminate\Support\Collection;

class BeneficiaryRepository
{
    /**
     * @var Beneficiary
     */
    private $beneficiary;

    /**
     * BeneficiaryRepository constructor.
     * @param Beneficiary $beneficiary
     */
    public function __construct(Beneficiary $beneficiary)
    {
        $this->beneficiary = $beneficiary;
    }

    /**
     * @param $data
     * @return Beneficiary
     */
    public function add($data)
    {
        return $this->beneficiary->create($data);
    }

    /**
     * @param $uuid
     * @return mixed
     */
    public function get_by_uuid($uuid)
    {
        return $this->beneficiary->with('module.department')->where('uuid', $uuid)
            ->first();
    }

    /**
     * @param Request $request
     * @return mixed
     */
    public function get_all_paginated(Request $request)
    {
        if ($request->has('sort')) {
            list($sortCol, $sortDir) = explode('|', $request->get('sort'));
            $query = $this->beneficiary->with(['form', 'module'])
                ->orderBy($sortCol, $sortDir);
        } else {
            $query = $this->beneficiary->with(['form', 'module'])
                ->orderBy('full_name', 'asc');
        }

        if ($request->exists('search')) {
            $query->where(function($q) use($request) {
                $value = "%{$request->search}%";
                $q->where('full_name', 'like', $value)
                    ->orWhere('bid', 'like', $value);
            });
        }

        $perPage = $request->has('per_page') ? (int) $request->get('per_page') : null;

        $data = $query->paginate($perPage);

        return $data;
    }

    /**
     * @param $uuid
     * @param Collection $data
     * @return Beneficiary
     */
    public function update($uuid, Collection $data)
    {
        $beneficiary = $this->get_by_uuid($uuid);
        $beneficiary->update($data->toArray());
        return $this->get_by_uuid($uuid);
    }

    /**
     * @param $uuid
     * @return Beneficiary
     */
    public function deactivate($uuid)
    {
        return $this->toggle_active(false, $uuid);
    }

    /**
     * @param $uuid
     * @return Beneficiary
     */
    public function activate($uuid)
    {
        return $this->toggle_active(true, $uuid);
    }

    /**
     * @param $active
     * @param $uuid
     * @return Beneficiary
     */
    private function toggle_active($active, $uuid)
    {
        $beneficiary = $this->get_by_uuid($uuid);
        $beneficiary->update([
            "active" => $active
        ]);
        return $this->get_by_uuid($uuid);
    }

    /**
     * @param $bid
     * @return mixed
     */
    public function get_by_bid($bid)
    {
        return $this->beneficiary
            ->where('bid', $bid)
            ->first();
    }

    /**
     * @param $increment
     * @return int
     */
    public static function get_new_bid($increment)
    {
        $generator = new CodeGenerator();
        $next_increment = $increment;

        $last_beneficiary =  self::get_last_beneficiary();
        $last_form_generated = self::get_last_form();

        if(! $last_form_generated && !$last_beneficiary){
            dump('no form, no beneficiary');
            return $generator->encode(CodeGenerator::make($increment));
        }

        if(! $last_beneficiary && $last_form_generated){
            dump('no beneficiary');
            $last_form_code = $generator->decode((int) substr($last_form_generated->code, -7));
            $next_increment =  $last_form_code + $increment;
        }

        if(!$last_form_generated && $last_beneficiary){
            dump('no form');
            $last_beneficiary_bid = $generator->decode((int) substr($last_beneficiary->bid, -7));
            $next_increment = $last_beneficiary_bid + $increment;
        }

        if($last_beneficiary && $last_form_generated){
            dump('there is form and beneficiary');
            $form_seq = $generator->decode(self::extract_code($last_form_generated->code));
            $beneficiary_seq = $generator->decode(self::extract_code($last_beneficiary->bid));
            $bid = collect([$form_seq, $beneficiary_seq])->max();
            dump('form sequence -> ', $form_seq);
            dump('beneficiary sequence -> ', $beneficiary_seq);
            dump('max sequence -> ', $bid);
            $code = $generator->decode((int) substr($bid, -7));
            dump('old code -> ', $code);
            $next_increment = $code + $increment;
        }
        dump('next increment -> ', $next_increment);
        $new_encoded = $generator->encode(CodeGenerator::make($next_increment));
        dump('new code -> ', $new_encoded);
        return $new_encoded;
    }

    /**
     * @return mixed|null
     */
    public static function get_last_beneficiary()
    {
        $code = new CodeGenerator();
        $last = Beneficiary::all()->filter(function ($b) {
            return starts_with($b->bid, Config::getInitials());
        })->sortBy(function($b) use ($code) {
            return $code->decode(substr($b->bid, -7));
        })->last();

        if(!$last) return null;

        return $last;
    }

    /**
     * @return mixed
     */
    public static function get_last_form()
    {
        return Form::orderBy('id', 'desc')->first();
    }

    /**
     * @param $bid
     * @return string
     */
    public static function extract_code($bid)
    {
        return substr($bid, -7);
    }

}