<template id="deviceTable">
    <div class="panel-tools" align="left">
        <div class="form-inline form-group">
            <div class="input-group col-xs-8">
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
                    api-url="{!! route('api.devices.all') !!}"
                    pagination-path=""
                    :fields="fields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="fa fa-sort-up"
                    descending-icon="fa fa-sort-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="actions"
                    :append-params="moreParams"
                    ></vuetable>
        </div>
    </div>
</template>

<template id="deviceHistoryTable">
    <div class="panel-body">
        <div class="table-responsive">
            <vuetable
                    :api-url="logsUrl"
                    pagination-path=""
                    :fields="fields"
                    :sort-order="sortOrder"
                    table-class="table table-bordered table-striped table-hover"
                    ascending-icon="fa fa-sort-up"
                    descending-icon="fa fa-sort-down"
                    pagination-class=""
                    pagination-info-class=""
                    pagination-component-class=""
                    pagination-component="vuetable-pagination-bootstrap"
                    :item-actions="historyActions"
                    :append-params="params"
                    ></vuetable>
        </div>
    </div>
</template>