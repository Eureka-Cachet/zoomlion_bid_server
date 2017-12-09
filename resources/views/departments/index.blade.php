@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ["active" => "Attendance"])
        <!-- //breadcrumb-->

        @include('partials.departments._modals');


        <div id="content">

            @if(collect([1, 7])->contains(auth()->user()->roles->first()->id))
                @include('partials.departments._top_bar');
            @endif

            @if(collect([2])->contains(auth()->user()->roles->first()->id))
                @include('partials.departments._top_bar_mini');
            @endif

            <div class="row">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <section class="panel" id="departments">
                        <header class="panel-heading row">
                            <div class="col-xs-12 col-sm-6">
                                <h4>Modules </h4>
                            </div>
                            <!--<div class="col-xs-12 col-sm-6 text-right">
                                <a style="color: #29166f;" data-toggle="modal" href="#newModule" class="pull-right">
                                    <i class="fa fa-plus-square"></i>
                                    Assign Module
                                </a>
                            </div>-->
                        </header>
                        <vuetable-departments></vuetable-departments>
                    </section>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-7 col-lg-7">
                    <section class="panel" id="staff">
                        <header class="panel-heading row">
                            <div class="col-xs-12 col-sm-12 col-md-5">
                                <h4><b v-cloak>@{{ selectedDepartmentName }}</b> Beneficiaries Attendance </h4>
                            </div>
                            <div class="col-xs-12 col-sm-12 col-md-7 text-right">
                                <h4><b v-cloak>@{{ selectedLocation }}</b></h4>
                            </div>
                        </header>
                        <vuetable-Beneficiaries></vuetable-Beneficiaries>
                    </section>
                </div>

            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->


    </div>

    @include('partials.departments._tables');
    
@endsection

@section('scripts')
    @include('partials.departments._scripts')
@endsection