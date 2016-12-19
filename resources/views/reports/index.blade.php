@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ['active' => 'Reports'])
        <!-- //breadcrumb-->

        <div >

            <div id="content" class="row">
                <div class="col-xs-12 col-md-8 col-md-offset-2">
                    
                @if(collect([1, 4])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiaries Allowance </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#736086">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <form @submit.prevent="generate('staff allowance')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                    <div class="form-group">
                                        <label class="control-label">Level</label>
                                        <div>
                                            <select required class="form-control"
                                                    :options="levels" v-select="level">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showRegion">
                                        <label class="control-label">Region</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    :options="regions" v-select="region">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showDistrict">
                                        <label class="control-label">District</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    v-select="district" :options="districts">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showLocation">
                                        <label class="control-label">Location</label>
                                        <div>
                                            <select required class="form-control" v-select="location"
                                                    style="width: 100%;" :options="locations">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">File Format</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input required type="radio" id="xlsx" disabled="disabled" value="xlsx" name="file_format" checked>
                                                <label>XLSX</label>
                                            </div>
                                            <div class="col-md-6"> 
                                                <!--<input required type="radio" id="pdf" disabled="disabled" value="pdf" name="file_format" >
                                                <label>PDF</label>-->
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group offset">
                                        <div>
                                            <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                <i class="fa fa-download"></i>
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                @endif
                    
                @if(collect([1, 3])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiaries Enrolment Forms </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#736086">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <form @submit.prevent="generate('staff form')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                    <div class="form-group">
                                        <label class="control-label">Level</label>
                                        <div>
                                            <select required class="form-control"
                                                    :options="levels" v-select="level">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showRegion">
                                        <label class="control-label">Region</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    :options="regions" v-select="region">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showDistrict">
                                        <label class="control-label">District</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    v-select="district" :options="districts">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showLocation">
                                        <label class="control-label">Location</label>
                                        <div>
                                            <select required class="form-control" v-select="location"
                                                    style="width: 100%;" :options="locations">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Date Range</label>
                                        <div>
                                            <div class="row">
                                                <div class="input-group col-lg-12" >
                                                    <input required type="text" data-date-type="report" class="form-control" name="date_range">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">File Format</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input required type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="file_format">
                                                <label>XLSX</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input required  type="radio" id="pdf" value="pdf" v-model="fileFormat" name="file_format" checked>
                                                <label>PDF</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group offset">
                                        <div>
                                            <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                <i class="fa fa-download"></i>
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                @endif
                    
                @if(collect([1, 3])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiaries Enrollment </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#736086">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <form @submit.prevent="generate('staff enrolment')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                    <div class="form-group">
                                        <label class="control-label">Level</label>
                                        <div>
                                            <select required class="form-control"
                                                    :options="levels" v-select="level">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showRegion">
                                        <label class="control-label">Region</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    :options="regions" v-select="region">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showDistrict">
                                        <label class="control-label">District</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    v-select="district" :options="districts">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showLocation">
                                        <label class="control-label">Location</label>
                                        <div>
                                            <select required class="form-control" v-select="location"
                                                    style="width: 100%;" :options="locations">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Date Range</label>
                                        <div>
                                            <div class="row">
                                                <div class="input-group col-lg-12" >
                                                    <input required type="text" data-date-type="report" class="form-control" name="date_range">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">File Format</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input required type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="file_format">
                                                <label>XLSX</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input required  type="radio" id="pdf" value="pdf" v-model="fileFormat" name="file_format" checked>
                                                <label>PDF</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group offset">
                                        <div>
                                            <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                <i class="fa fa-download"></i>
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                @endif
                    
                @if(collect([1, 4, 3])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiary Count </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#736086">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <form @submit.prevent="generate('staff count')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                    <div class="form-group">
                                        <label class="control-label">Level</label>
                                        <div>
                                            <select required class="form-control"
                                                    :options="levels" v-select="level">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showRegion">
                                        <label class="control-label">Region</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    :options="regions" v-select="region">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showDistrict">
                                        <label class="control-label">District</label>
                                        <div>
                                            <select required class="form-control" style="width: 100%;"
                                                    v-select="district" :options="districts">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group" v-show="showLocation">
                                        <label class="control-label">Location</label>
                                        <div>
                                            <select required class="form-control" v-select="location"
                                                    style="width: 100%;" :options="locations">
                                            </select>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Date Range</label>
                                        <div>
                                            <div class="row">
                                                <div class="input-group col-lg-12" >
                                                    <input required type="text" data-date-type="report" class="form-control">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                                                        </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">Date Type</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input required type="radio" name="date_type" id="employmentDate"
                                                       value="employment_date" v-model="dateType">
                                                <label>Employment Date</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input required type="radio" name="date_type" id="registrationDate"
                                                        value="registration_date" v-model="dateType">
                                                <label >Registration Date</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group">
                                        <label class="control-label">File Format</label>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <input required type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="file_format">
                                                <label>XLSX</label>
                                            </div>
                                            <div class="col-md-6">
                                                <input required  type="radio" id="pdf" value="pdf" v-model="fileFormat" name="file_format" checked>
                                                <label>PDF</label>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="form-group offset">
                                        <div>
                                            <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                <i class="fa fa-download"></i>
                                                Generate
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </section>
                    </div>
                @endif
                    
                @if(collect([1, 2, 4, 3])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiary Details </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#29166f">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <div class="tabbable">
                                    <ul id="profile-tab" class="nav nav-tabs" data-provide="tabdrop" style="background-color: white;">
                                        <li class="active"><a href="#single" data-toggle="tab">
                                                <span style="color: #29166f;" class="fa fa-user"></span>
                                                Single</a></li>
                                        <li><a href="#multiple" data-toggle="tab">
                                                <span style="color: #29166f;" class="fa fa-users"></span>
                                                Multiple</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade in active" id="single">
                                            <form @submit.prevent="generate('staff information')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                                <div class="form-group" id="district">
                                                    <label class="control-label">Beneficiary ID</label>
                                                    <div>
                                                        <input v-model="bid" required type="text" class="form-control">
                                                    </div>
                                                </div>

                                                <!--<div class="form-group">
                                                    <label class="control-label">File Format</label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <input required disabled type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="file_format">
                                                            <label>XLSX</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input required disabled type="radio" id="pdf" value="pdf" v-model="fileFormat" name="file_format" checked>
                                                            <label>PDF</label>
                                                        </div>
                                                    </div>
                                                </div>-->

                                                <div class="form-group offset">
                                                    <div>
                                                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                            <i class="fa fa-download"></i>
                                                            Generate
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="multiple">
                                            <form @submit.prevent="generate('multiple staff information')" class="form-horizontal" data-collabel="3" data-alignlabel="left">

                                                <div class="form-group">
                                                    <label class="control-label">Level</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                :options="levels" v-select="level">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showRegion">
                                                    <label class="control-label">Region</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                :options="regions" v-select="region">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showDistrict">
                                                    <label class="control-label">District</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                v-select="district" :options="districts">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showLocation">
                                                    <label class="control-label">Location</label>
                                                    <div>
                                                        <select required class="form-control" v-select="location"
                                                                style="width: 100%;" :options="locations">
                                                        </select>
                                                    </div>
                                                </div>

                                                <!--<div class="form-group">
                                                    <label class="control-label">File Format</label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <input required disabled type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="file_format">
                                                            <label>XLSX</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input required disabled type="radio" id="pdf" value="pdf" v-model="fileFormat" name="file_format" checked>
                                                            <label>PDF</label>
                                                        </div>
                                                    </div>
                                                </div>-->

                                                <div class="form-group offset">
                                                    <div>
                                                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                            <i class="fa fa-download"></i>
                                                            Generate
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    
                    </div>
                @endif
                    
                @if(collect([1, 4, 3])->contains(auth()->user()->role->id))
                    <div class="col-xs-12">
                        <section class="panel">
                            <header class="panel-heading row">
                                <div class="col-md-6">
                                    <h4>Beneficiaries Clocks </h4>
                                </div>
                                <div class="col-md-6">
                                    <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#29166f">
                                        <ul class="tooltip-area">
                                            <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </header>
                            <div class="panel-body">
                                <div class="tabbable">
                                    <ul id="profile-tab" class="nav nav-tabs" data-provide="tabdrop" style="background-color: white;">
                                        <li class="active"><a href="#singleClocks" data-toggle="tab">
                                                <span style="color: #29166f;" class="fa fa-user"></span>
                                                Single</a></li>
                                        <li><a href="#multipleClocks" data-toggle="tab">
                                                <span style="color: #29166f;" class="fa fa-users"></span>
                                                Multiple</a></li>
                                    </ul>
                                    <div class="tab-content">
                                        <div class="tab-pane fade in active" id="singleClocks">
                                            <form class="form-horizontal" @submit.prevent="generate('staff attendance')">

                                                <div class="form-group">
                                                    <label class="control-label">Beneficiary ID</label>
                                                    <div>
                                                       <input v-model="bid" required type="text" class="form-control">
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Date Range</label>
                                                    <div>
                                                        <div class="row">
                                                            <div class="input-group col-lg-12" >
                                                                <input required type="text" data-date-type="report" class="form-control" name="date_range">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">File Format</label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <input required type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="format">
                                                            <label>XLSX</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input required  type="radio" id="pdf" value="pdf" v-model="fileFormat" name="format" checked>
                                                            <label>PDF</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group offset">
                                                    <div>
                                                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                            <i class="fa fa-download"></i>
                                                            Generate
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                        <div class="tab-pane fade" id="multipleClocks">
                                            <form @submit.prevent="generate('staff attendances')" class="form-horizontal">

                                                <div class="form-group">
                                                    <label class="control-label">Level</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                :options="levels" v-select="level">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showRegion">
                                                    <label class="control-label">Region</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                :options="regions" v-select="region">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showDistrict">
                                                    <label class="control-label">District</label>
                                                    <div>
                                                        <select required class="form-control" style="width: 100%;"
                                                                v-select="district" :options="districts">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group" v-show="showLocation">
                                                    <label class="control-label">Location</label>
                                                    <div>
                                                        <select required class="form-control" v-select="location"
                                                                style="width: 100%;" :options="locations">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">Date Range</label>
                                                    <div>
                                                        <div class="row">
                                                            <div class="input-group col-lg-12" >
                                                                <input required type="text" data-date-type="report" class="form-control" name="date_range">
                                                        <span class="input-group-btn">
                                                            <button class="btn btn-default" type="button"><i class="fa fa-calendar"></i></button>
                                                        </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group">
                                                    <label class="control-label">File Format</label>
                                                    <div class="row">
                                                        <div class="col-md-6">
                                                            <input required type="radio" id="xlsx" value="xlsx" v-model="fileFormat" name="format">
                                                            <label>XLSX</label>
                                                        </div>
                                                        <div class="col-md-6">
                                                            <input required  type="radio" id="pdf" value="pdf" v-model="fileFormat" name="format" checked>
                                                            <label>PDF</label>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="form-group offset">
                                                    <div>
                                                        <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                                                            <i class="fa fa-download"></i>
                                                            Generate
                                                        </button>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    
                    </div>
                @endif
                
                </div>
            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->


    </div>
@endsection

@section('scripts')
    @include("partials.reports._scripts")
@endsection