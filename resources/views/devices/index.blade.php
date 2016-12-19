@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ["active" => "Devices"])
        <!-- //breadcrumb-->

        @include('partials.devices._modals')

        <div id="content">

            <!--<div class="row"> connectedDevices @{{ connectedDevices | json }}</div>-->

            <div class="row">
                <div class="col-xs-12 col-md-8">
                    <section class="panel" id="devices">
                        <header class="panel-heading row">
                            <div class="col-xs-9 col-sm-4">
                                <h4>Active Devices </h4>
                            </div>
                            <div class="col-xs-1 col-sm-4">
                                @if(auth()->user()->role->id == 1)
                                    <a style="color: #29166f;" data-toggle="modal" href="#newDevice" class="pull-right">
                                        <i class="fa fa-plus-square"></i>
                                        <span class="hidden-xs visible-sm-4">New Device</span>
                                    </a>
                                @endif
                            </div>
                            <div class="col-xs-1 col-sm-4">
                                <a style="color: #29166f;" data-toggle="modal" href="#mapDevice" class="pull-right">
                                    <i class="fa fa-flag"></i>
                                    <span class="hidden-xs visible-sm-4">Map Device</span>
                                </a>
                            </div>
                        </header>
                        <device-table></device-table>
                    </section>
                </div>
                <div class="col-xs-12 col-md-4">
                    <section class="panel" id="deviceHistory">
                        <header class="panel-heading row">
                            <div class="col-md-8">
                                <h4><b class="text-uppercase" v-cloak>@{{ selectedDevice.code }}</b> Device History </h4>
                            </div>
                            <div class="col-md-1">
                                <b :class="status.style" v-cloak>@{{ status.name }}</b>
                            </div>
                        </header>
                        <device-history-table></device-history-table>
                    </section>
                </div>

            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->


    </div>

    @include('partials.devices._tables')

    @include('partials.devices._templates')

@endsection

@section('scripts')

    @include('partials.devices._scripts')
    
@endsection