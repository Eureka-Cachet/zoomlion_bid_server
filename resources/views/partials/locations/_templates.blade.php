<template id="vuetable-pagination-bootstrap-template">
    <nav>
        <ul class="pagination">
            <li class="@{{isOnFirstPage ? disabledClass : ''}}">
                <a style="color: #29166f;" @click="loadPage('prev')"><i class="glyphicon glyphicon-chevron-left"></i></a>
            </li>
            <template v-for="n in totalPage">
                <li class="@{{isCurrentPage(n+1) ? ' active' : ''}}">
                    <a @click="loadPage(n+1)"> @{{ n+1 }}</a>
                </li>
            </template>
            <li class="@{{isOnLastPage ? disabledClass : ''}}">
                <a style="color: #29166f;" @click="loadPage('next')"><i class="glyphicon glyphicon-chevron-right"></i></a>
            </li>
        </ul>
    </nav>
</template>

<template id="vuetable-regions">
    <vuetable
            :api-url="regionUrl"
            pagination-path=""
            :fields="regionFields"
            :sort-order="sortOrder"
            table-class="table table-bordered table-striped table-hover"
            ascending-icon="glyphicon glyphicon-chevron-up"
            descending-icon="glyphicon glyphicon-chevron-down"
            pagination-class=""
            pagination-info-class=""
            pagination-component-class=""
            pagination-component="vuetable-pagination-bootstrap"
            :item-actions="regionActions"
            :append-params="moreParams"
            ></vuetable>
</template>

<template id="vuetable-districts">
    <div class="panel-tools" align="left">
        <div class="form-inline form-group">
            <div class="input-group col-xs-12">
                <input v-model="searchFor" placeholder="search ..."
                        class="form-control input-sm"
                        @keyup.enter="setFilter">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm" @click="setFilter"
                                    type="button"><i class="fa fa-search"></i></button>
                                    <button class="btn btn-sm" @click="resetFilter"
                                    type="button"><i class="fa fa-times"></i></button>
                                </span>
            </div>
        </div>
    </div>
    <div class="panel-body">
        <div class="table-responsive">
            <vuetable
                    :api-url="districtUrl"
                    pagination-path=""
                    :fields="districtFields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="glyphicon glyphicon-chevron-up"
                    descending-icon="glyphicon glyphicon-chevron-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="districtActions"
                    :append-params="moreParams"
                    ></vuetable>
        </div>
    </div>
</template>

<template id="vuetable-locations">
    <div class="panel-tools" align="left">
        <div class="form-inline form-group">
            <div class="input-group col-xs-12">
                <input v-model="searchFor" placeholder="search ..."
                        class="form-control input-sm"
                        @keyup.enter="setFilter">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm" @click="setFilter"
                                    type="button"><i class="fa fa-search"></i></button>
                                    <button class="btn btn-sm" @click="resetFilter"
                                    type="button"><i class="fa fa-times"></i></button>
                                </span>
            </div>
        </div>
    </div>
    <div class="panel-body">
        <div class="table-responsive">
            <vuetable
                    :api-url="locationsUrl"
                    pagination-path=""
                    :fields="locationFields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="glyphicon glyphicon-chevron-up"
                    descending-icon="glyphicon glyphicon-chevron-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="locationActions"
                    :append-params="moreParams"
                    ></vuetable>
        </div>
    </div>
</template>