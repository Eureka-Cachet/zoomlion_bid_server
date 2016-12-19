@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials.enrolment._modals')

        @include('partials._breadcrumb', ["active" => "Enrolment"])

        <div id="content">
            <div class="row">

                <div class="col-xs-12 col-sm-10 col-sm-offset-1 col-md-6 col-md-offset-3">
                    <section v-cloak class="panel" v-show="validated">
                            <header class="panel-heading sm" data-color="theme-inverse">
                                    <h2><strong>Beneficiary Enrolment</strong></h2>
                            </header>
                            <div class="panel-body">
                                    <form class="form-horizontal" @submit.prevent="doNothing" data-collabel="3" data-alignlabel="left">

                                        <!--Personal Information-->

                                        <div class="form-group">
                                            <label class="control-label" for="surname">Surname</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.surname" class="form-control" id="surname">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="forenames">Forenames</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.forenames" class="form-control" id="forenames">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="dob">Date Of Birth</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.dob" data-mask="99/99/9999" class="form-control" id="dob">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="gender">Gender</label>
                                            <div>
                                                <label class="radio-inline">
                                                    <input type="radio" v-model="beneficiary.gender" id="gender" value="male">
                                                    Male 
                                                </label>
                                                <label class="radio-inline">
                                                    <input type="radio" v-model="beneficiary.gender" id="gender" value="female">
                                                    Female 
                                                </label>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="phoneNumber">Phone Number</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.phoneNumber" data-mask="9999999999" class="form-control" id="phoneNumber">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="address">Address</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.address" class="form-control" id="address">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="idType">ID Type</label>
                                            <div>
                                                <v-select
                                                    :value.sync="beneficiary.id.type"
                                                    :options="ids"
                                                    placeholder="choose ID Type..."
                                                    label="type"
                                                >
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="idNumber">ID Number</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.id.number" class="form-control" id="idNumber">
                                            </div>
                                        </div>

                                        <!--Bank Detail-->

                                        <div class="form-group">
                                            <label class="control-label" for="bankName">Name of Bank</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.nameOfBank" class="form-control" id="bankName">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="branchName">Name of Bank Branch</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.nameOfBankBranch" class="form-control" id="branchName">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="accountNumber">Bank Account Number</label>
                                            <div>
                                                <input type="text" v-model="beneficiary.bankAccountNumber" class="form-control" id="accountNumber">
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label" for="allowance">Allowance</label>
                                            <div class="input-group">
                                                <span class="input-group-addon">GHC</span>
                                                <input type="text" v-model="beneficiary.allowance" class="form-control" id="allowance">
                                            </div>
                                        </div>

                                        <!--Official Details-->

                                        <div class="form-group">
                                            <label class="control-label">Region</label>
                                            <div>
                                                <p class="form-control-static">@{{beneficiary.region.name}}</p>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">District</label>
                                            <div>
                                                <p class="form-control-static">@{{beneficiary.district.name}}</p>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Location</label>
                                            <div>
                                                <p class="form-control-static">@{{beneficiary.location.name}}</p>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Module</label>
                                            <div>
                                                <p class="form-control-static">@{{beneficiary.module.department.name}}</p>
                                            </div>
                                        </div>

                                        <div class="form-group">
                                            <label class="control-label">Rank</label>
                                            <div>
                                                <p class="form-control-static">@{{beneficiary.rank.name}}</p>
                                            </div>
                                        </div>

                                        
                                        <div class="form-group offset">
                                            <div>
                                                <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="reviewBioData" class="btn btn-theme" v-if="bioDataReady">Review Bio Data</button>
                                                <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="captureBioData" class="btn btn-theme" v-else>Capture Bio Data</button>
                                                <button @click="submit" class="btn btn-success" v-show="bioDataReady">Submit</button>
                                                <button type="reset" class="btn btn-theme">Reset</button>
                                                <button class="btn btn-theme">Cancel</button>
                                            </div>
                                        </div>
                                    </form>
                            </div>
                    </section>
                </div>
            </div>
        </div>

    </div>

@endsection

@section("scripts")

    @include("partials.enrolment._scripts")

@endsection