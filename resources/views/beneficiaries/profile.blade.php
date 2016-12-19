@extends('partials._main_master')

@section('main-content')

    <div id="main">

        @include('partials._breadcrumbs', ["child" => $b["bid"], "parent" => ["Beneficiaries", route('beneficiaries.index')]]);


        <div class="panel col-md-10 col-md-offset-1">
            <div class="panel" id="profilePanel">
                    <div class="panel-body">

                            <div class="">
                                    <div class="row">
                                            <div class="col-md-4 align-lg-center">
                                                    <img v-if="beneficiary.picture"
                                                         :src="beneficiary.picture.uri"
                                                         class="square"
                                                         style="max-width:200px; border:5px #edece5 solid; margin:10px 0;">

                                                    <div class="row" style="margin: 30px 10px 10px 10px;">
                                                            <button @click="viewImage('TR', 200)" v-cloak type="button" class="btn"> right thumb</button>
                                                    </div>

                                                    <div class="row" style="margin: 10px;">
                                                            <button @click="viewImage('TL', 200)" v-cloak type="button" class="btn"> left thumb</button>
                                                    </div>

                                                    <div class="row" style="margin: 10px;">
                                                            <button @click="viewImage('IR', 200)" v-cloak type="button" class="btn"> right index</button>
                                                    </div>

                                                    <div class="row" style="margin: 10px;">
                                                            <button @click="viewImage('IL', 200)" v-cloak type="button" class="btn"> left index</button>
                                                    </div>

                                                    <div class="row" style="margin: 10px;" v-cloak v-if="beneficiary.form">
                                                            <button @click="viewImage('FO', 500)" type="button" class="btn"> form</button>
                                                    </div>

                                            </div>
                                            <div class="col-md-8" id="profileForm">
                                                    <br>
                                                        <div class="row">
                                                                <div class="col-xs-6">
                                                                        <h3>Personal Information</h3>
                                                                </div>
                                                                <div class="col-xs-6 text-right">
                                                                        <button v-if="beneficiary.active" @click="deactiveBeneficiary" type="button" class="btn btn-theme"> Deactivate</button>
                                                                        <button v-else @click="activeBeneficiary" type="button" class="btn btn-success"> Active</button>
                                                                </div>
                                                        </div>
                                                    <hr>
                                                    <form>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Surname</label>
                                                                            <input type="text" class="form-control" v-model="beneficiary.surname">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Forenames</label>
                                                                            <input type="text" class="form-control" v-model="beneficiary.forenames">
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Date of birth</label>
                                                                            <input type="text" v-model="beneficiary.date_of_birth" data-mask="99/99/9999" class="form-control" id="dob">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Gender</label>
                                                                            <div class="row">
                                                                                <div class="col-md-6" for="male">
                                                                                        <label class="radio-inline">
                                                                                                <input type="radio" v-model="beneficiary.gender" id="male" value="male">
                                                                                                Male
                                                                                        </label>
                                                                                </div>
                                                                                <div class="col-md-6" for="female">
                                                                                        <label class="radio-inline">
                                                                                                <input type="radio" v-model="beneficiary.gender"
                                                                                                        id="female" value="female">
                                                                                                Female
                                                                                        </label>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Phone Number</label>
                                                                            <input type="text" v-model="beneficiary.phone_number"
                                                                                   data-mask="9999999999" class="form-control" id="phoneNumber">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                            <label class="control-label" for="address">Address</label>
                                                                            <input type="text" v-model="beneficiary.address" class="form-control" id="address">
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">

                                                                    <div class="col-md-6">
                                                                            <label class="control-label" for="idType">ID Type</label>
                                                                            <v-select 
                                                                                v-cloak
                                                                                id="idType"
                                                                                :value.sync="beneficiary.identification_type"
                                                                                :options="ids"
                                                                                placeholder="choose ID Type..."
                                                                                label="type"
                                                                                >
                                                                    </div>

                                                                    <div class="col-md-6">
                                                                            <label class="control-label" for="idNumber">Identification Number</label>
                                                                            <input type="text" v-model="beneficiary.identification_number" class="form-control" id="idNumber">
                                                                    </div>
                                                            </div>

                                                            <br>
                                                            <h3>Bank Details</h3>
                                                            <hr>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6">
                                                                            <label class="control-label" for="bankName">Name of Bank</label>
                                                                            <input type="text" v-model="beneficiary.bank_name" class="form-control" id="bankName">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                            <label class="control-label" for="branchName">Name of Bank Branch</label>
                                                                            <input type="text" v-model="beneficiary.bank_location" class="form-control" id="branchName">
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Bank Account Number</label>
                                                                            <input type="text" v-model="beneficiary.account_number" class="form-control" id="accountNumber">
                                                                    </div>
                                                                    <div class="col-md-6">
                                                                            <label class="control-label">Allowance</label>
                                                                            <span class="input-group-addon">GHC</span>
                                                                            <input type="text" v-model="beneficiary.allowance" class="form-control" id="allowance">
                                                                    </div>
                                                            </div>

                                                            <br>
                                                            <h3>Official Details</h3>
                                                            <hr>

                                                            <div class="form-group" v-if="beneficiary.region">
                                                                    <label class="control-label">Region</label>
                                                                    <div>
                                                                            <p style="margin-bottom: 2px;" class="form-control-static">@{{beneficiary.region.name}}</p>
                                                                            <v-select
                                                                                    :value.sync="beneficiary.region"
                                                                                    :options="regions"
                                                                                    :on-change="fetchDistricts"
                                                                                    placeholder="choose region"
                                                                                    label="name"
                                                                            >
                                                                            </v-select>
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6" v-if="beneficiary.district">
                                                                            <label class="control-label">District</label>
                                                                            <div>
                                                                                    <p style="margin-bottom: 2px;" class="form-control-static">@{{beneficiary.district.name}}</p>
                                                                                    <v-select
                                                                                            :value.sync="beneficiary.district"
                                                                                            :options="districts"
                                                                                            :on-change="fetchLocations"
                                                                                            placeholder="choose district"
                                                                                            label="name"
                                                                                    >
                                                                                    </v-select>
                                                                            </div>
                                                                    </div>
                                                                    <div class="col-md-6" v-if="beneficiary.location">
                                                                            <label class="control-label">Location</label>
                                                                            <div>
                                                                                    <p style="margin-bottom: 2px;" class="form-control-static">@{{beneficiary.location.name}}</p>
                                                                                    <v-select
                                                                                            :value.sync="beneficiary.location"
                                                                                            :options="locations"
                                                                                            :on-change="fetchModules"
                                                                                            placeholder="choose location"
                                                                                            label="name"
                                                                                    >
                                                                                    </v-select>
                                                                            </div>
                                                                    </div>
                                                            </div>

                                                            <div class="form-group row">
                                                                    <div class="col-md-6" v-if="beneficiary.module">
                                                                            <label class="control-label">Module</label>
                                                                            <div>
                                                                                    <p style="margin-bottom: 2px;" class="form-control-static">@{{beneficiary.module.department.name}}</p>
                                                                                    <v-select
                                                                                            :value.sync="beneficiary.module.department"
                                                                                            :options="modules"
                                                                                            placeholder="choose module"
                                                                                            label="name"
                                                                                    >
                                                                                    </v-select>
                                                                            </div>
                                                                    </div>
                                                                    <div class="col-md-6" v-if="beneficiary.rank">
                                                                            <label class="control-label">Rank</label>
                                                                            <div>
                                                                                    <p style="margin-bottom: 2px;" class="form-control-static">@{{beneficiary.rank.name}}</p>
                                                                                    <v-select
                                                                                            :value.sync="beneficiary.rank"
                                                                                            :options="ranks"
                                                                                            placeholder="choose rank"
                                                                                            label="name"
                                                                                    >
                                                                                    </v-select>
                                                                            </div>
                                                                    </div>
                                                            </div>
                                                            <hr>
                                                            <div class="form-group">
                                                                    <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="update" type="button" class="btn btn-theme"> Update Record</button>
                                                                    <button @click="goBack" type="button" class="btn"> Go Back</button>
                                                            </div>
                                                    </form>
                                            </div>
                                            <!-- /row-->
                                    </div>
                            </div>

                    </div>
            </div>
        </div>

    </div>

        @include('partials.beneficiaries.profile._modals')

@endsection

@section('scripts')

    @include('partials.beneficiaries.profile._scripts', ["beneficiary" => $b]);

@endsection