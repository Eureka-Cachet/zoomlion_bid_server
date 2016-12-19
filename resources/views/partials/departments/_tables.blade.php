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
                <a @click="loadPage('next')">
                    <i class="glyphicon glyphicon-chevron-right"></i>
                </a>
            </li>
        </ul>
    </nav>
</template>

<template id="vuetable-departments">
    <div class="panel-body">
        <div class="table-responsive">
            <vuetable
                    :api-url="departmentUrl"
                    pagination-path=""
                    :fields="departmentFields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="fa fa-sort-up"
                    descending-icon="fa fa-sort-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="departmentActions"
                    :append-params="moreParams"
                    ></vuetable>
        </div>
    </div>
</template>

<template id="vuetable-beneficiaries">
    <div class="panel-tools" align="left">
        <div class="">
            <div class="input-group col-xs-12">
                <input v-model="searchFor" placeholder="search ..." @keyup.enter="search"
                        class="form-control input-sm">
                                <span class="input-group-btn">
                                    <button class="btn btn-sm" @click="search"
                                    type="button"><i class="fa fa-search"></i></button>
                                    <button class="btn btn-sm" @click="reset"
                                    type="button"><i class="fa fa-times"></i></button>
                                </span>
            </div>
        </div>
    </div>
    <div class="panel-body">
        <div class="table-responsive">
            <vuetable
                    :api-url="beneficiariesUrl"
                    pagination-path=""
                    :fields="beneficiariesFields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="glyphicon glyphicon-chevron-up"
                    descending-icon="glyphicon glyphicon-chevron-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="beneficiariesActions"
                    :append-params="moreParams"
                    ></vuetable>
        </div>
    </div>
</template>