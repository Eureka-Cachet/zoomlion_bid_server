<?php

namespace clocking\Http\Controllers;

use clocking\Region;
use Eureka\Repositories\BeneficiaryRepository;
use Eureka\Transformers\Internal\BeneficiaryCollectionTransformer;
use Illuminate\Http\Request;

use clocking\Http\Requests;
use League\Fractal\Manager;
use League\Fractal\Resource\Item;

class BeneficiaryController extends Controller
{
    /**
     * @var BeneficiaryRepository
     */
    private $beneficiaryRepository;
    /**
     * @var Manager
     */
    private $manager;

    /**
     * BeneficiaryController constructor.
     * @param BeneficiaryRepository $beneficiaryRepository
     * @param Manager $manager
     */
    public function __construct(BeneficiaryRepository $beneficiaryRepository, Manager $manager)
    {
        $this->beneficiaryRepository = $beneficiaryRepository;
        $this->manager = $manager;
    }

    public function index()
    {
        return view('beneficiaries.index');
    }

    public function single($uuid, Request $request)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($uuid);
        if(is_null($beneficiary)) abort(404);

        $data = $this->manager
            ->createData(new Item($beneficiary, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
//        dd($data);
        return view('beneficiaries.profile', ["b" => $data["data"]]);
    }

    public function update($uuid, Request $request)
    {
        $beneficiary = $this->beneficiaryRepository->get_by_uuid($uuid);
        if(is_null($beneficiary)) abort(404);

        $data = $this->manager
            ->createData(new Item($beneficiary, new BeneficiaryCollectionTransformer(false)))
            ->toArray();
//        dd($data);
        return view('beneficiaries.update_profile', ["b" => $data["data"]]);
    }
}
