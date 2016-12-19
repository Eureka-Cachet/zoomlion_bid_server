@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ["active" => "Employment"])
        <!-- //breadcrumb-->

        <div id="content">

            <div class="row">
                <div class="col-sm-6 col-sm-offset-3">
                    <div class="row">
                        <div class="col-xs-12">
                            <section class="panel" id="newEnrollmentForm">
                                <header class="panel-heading row">
                                    <div class="col-md-6">
                                        <h4>Enrollment Form </h4>
                                    </div>
                                    <div class="col-md-4">
                                        <div v-cloak class="label label-success" v-show="show_generating">
                                            <i class="fa fa-spinner fa-spin"></i>
                                            Generating...
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="panel-tools panel-tools-mini color " align="right" data-toolscolor="#736086">
                                            <ul class="tooltip-area">
                                                <li><a href="javascript:void(0)" class="btn btn-inverse btn-collapse" title="Collapse"><i class="fa fa-sort-amount-asc"></i></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </header>
                                <div class="panel-body">
                                    
                                    @include('partials.employment._form')

                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </div>
            <!-- //content > row-->


        </div>
        <!-- //content-->


    </div>
@endsection

@section('scripts')
    
    @include('partials.employment._scripts')

@endsection