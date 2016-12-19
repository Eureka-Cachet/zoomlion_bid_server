@extends('partials._main_master')

@section('main-content')

    <div id="main">

        @include('partials._breadcrumb', ["active" => "Beneficiaries"])


        <div id="content">

            <div class="row">
                <div class="col-sm-12 col-md-8 col-md-offset-2 col-lg-8 col-md-offset-2">
                    <section class="panel" id="topBar">
                        <header class="panel-heading row">

                            <div class="col-xs-9 col-sm-9 col-md-8 col-lg-9 text-center">
                                <input v-model="search.q" placeholder="search ..."
                                               class="form-control input-sm">
                            </div>
                            <div class="col-sm-3 col-xs-3 col-md-4 col-lg-3 text-right">
                                        <span class="input-group-btn btn-block">
                                        <button style="background: #29166f; color: #fff; border-color: #29166f;" class="btn btn-sm" @click="setFilter"
                                        type="button"><i class="fa fa-search"></i>
                                            <span class="hidden-xs">Search</span>
                                        </button>
                                        <button class="btn btn-sm" @click="resetFilter"
                                        type="button"><i class="fa fa-times"></i>
                                            <span class="hidden-xs">Reset</span>
                                        </button>
                                    </span>
                            </div>

                        </header>
                    </section>
                </div>
            </div>

            
            <div class="row">

                <div class="col-sm-12">
                    <section class="panel" id="beneficiariesTable">
                        <div class="panel-body">
                            <div class="table-responsive">
                                <vuetable
                                    api-url="{!! route('api.beneficiary.all') !!}"
                                    pagination-path=""
                                    :fields="fields"
                                    :sort-order="sortOrder"
                                    table-class="table table-bordered table-striped table-hover"
                                    ascending-icon="glyphicon glyphicon-chevron-up"
                                    descending-icon="glyphicon glyphicon-chevron-down"
                                    pagination-component="vuetable-pagination-bootstrap"
                                    :item-actions="itemActions"
                                    :append-params="moreParams"
                                    ></vuetable>
                            </div>
                        </div>
                    </section>
                </div>

            </div>

        </div>

    </div>

    <template id="vuetable-pagination-bootstrap-template">
        <nav>
            <ul class="pagination">
                <li class="@{{isOnFirstPage ? disabledClass : ''}}">
                    <a @click="loadPage('prev')"><i class="glyphicon glyphicon-chevron-left"></i></a>
                </li>
                <template v-for="n in totalPage">
                    <li class="@{{isCurrentPage(n+1) ? ' active' : ''}}">
                        <a @click="loadPage(n+1)"> @{{ n+1 }}</a>
                    </li>
                </template>
                <li class="@{{isOnLastPage ? disabledClass : ''}}">
                    <a @click="loadPage('next')"><i class="glyphicon glyphicon-chevron-right"></i></a>
                </li>
            </ul>
        </nav>
    </template>

@endsection

@section('scripts')

    @include('partials.beneficiaries._scripts')

@endsection