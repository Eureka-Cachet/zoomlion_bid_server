@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ["active" => "Locations"])
        <!-- //breadcrumb-->

        @include('partials.locations._modals');

        <div id="content">

            <div class="row">
                <div class="col-xs-12 col-md-4">
                    <section id="regionsPanel" class="panel">
                        <header class="panel-heading row">
                            <div class="col-xs-6">
                                <h4><b>Regions</b> </h4>
                            </div>
                            <div class="col-xs-6">
                                @if(auth()->user()->roles->first()->id == 1)
                                    <a style="color: #29166f;" data-toggle="modal" href="#newRegion" class="pull-right">
                                        <i class="fa fa-plus-square"></i>
                                        New Region
                                    </a>
                                @endif
                                
                            </div>
                        </header>
                        <div class="panel-body">
                            <div class="table-responsive">
                                <vuetable-regions></vuetable-regions>
                            </div>
                        </div>
                    </section>
                </div>
                <div class="col-xs-12 col-md-4">
                    <section id="districtsPanel" class="panel">
                        <header class="panel-heading row">
                            <div class="col-xs-12 col-sm-9 text-uppercase">
                                <h4><b v-cloak>@{{ selectedRegion.name }}</b> Districts </h4>
                            </div>
                            <div class="col-xs-12 col-sm-3" v-if="regionSelected">
                                @if(auth()->user()->roles->first()->id == 1)
                                    <a style="color: #29166f;" data-toggle="modal" href="#newDistrict" class="pull-right">
                                        <i class="fa fa-plus-square"></i>
                                        New District
                                    </a>
                                @endif
                            </div>
                        </header>
                        <vuetable-districts></vuetable-districts>
                    </section>
                </div>
                <div class="col-xs-12 col-md-4">
                    <section id="locationsPanel" class="panel">
                        <header class="panel-heading row">
                            <div class="col-xs-12 col-sm-9">
                                <h4><b v-cloak>@{{ selectedDistrict.name }}</b> Locations </h4>
                            </div>
                            <div class="col-xs-12 col-sm-3" v-if="districtSelected">
                                @if(auth()->user()->roles->first()->id == 1)
                                    <a style="color: #29166f;" data-toggle="modal" href="#newLocation" class="pull-right">
                                        <i class="fa fa-plus-square"></i>
                                        New Location
                                    </a>
                                @endif
                            </div>
                        </header>
                        <vuetable-locations></vuetable-locations>
                    </section>
                </div>
            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->
    </div>

    @include('partials.locations._templates');

@endsection

@section('scripts')

    @include('partials.locations._scripts');
    
@endsection