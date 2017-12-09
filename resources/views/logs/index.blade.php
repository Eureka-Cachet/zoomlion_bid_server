@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ['active' => 'Activity Logs'])
        <!-- //breadcrumb-->

        <div id="content">
        
            @include('partials.logs._top_bar')


            <div class="row">
                <div class="col-xs-12">
                    <section class="panel" id="logsTablePanel">
                        <div class="panel-body">
                            <div class="table-responsive">
                                <vuetable
                                        :api-url="logsUrl"
                                        pagination-path=""
                                        :fields="fields"
                                        :sort-order="sortOrder"
                                        table-class="table table-bordered table-striped table-hover"
                                        ascending-icon="glyphicon glyphicon-chevron-up"
                                        descending-icon="glyphicon glyphicon-chevron-down"
                                        pagination-class=""
                                        pagination-info-class=""
                                        pagination-component-class=""
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
    @include('partials.logs._scripts')
@endsection