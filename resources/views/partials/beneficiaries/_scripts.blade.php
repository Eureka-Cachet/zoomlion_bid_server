<script type="text/javascript">

    $(function(){

        var tableColumns = [
                {
                    title: '# BID',
                    name: 'bid',
                    dataClass: 'text-center'
                },
                {
                    title: 'Full Name',
                    name: 'full_name',
                    sortField: 'full_name',
                    dataClass: 'text-center'
                },
                {
                    title: 'Module',
                    name: 'module',
                    dataClass: 'text-center'
                },
                {
                    title: 'Status',
                    name: 'status',
                    dataClass: 'text-center',
                    callback: 'formatStatus'
                },
                {
                    name: '__component:actions',
                    title: 'Actions',
                    dataClass: 'text-center'
                }
            ];

            var $beneficiariesTable = $('#beneficiariesTable');

            var tableActions = [
                    { 
                        name: 'view-beneficiary', 
                        label: 'view', 
                        icon: 'fa fa-eye', 
                        class: 'btn btn-xs'
                    }
                ];

            var loadingOptions = {
                image       : "",
                fontawesome : "fa fa-refresh fa-spin",
                maxSize: "20"
            };

            Vue.component('actions', {
                template: [
                    '<div>',
                        '<button class="btn btn-xs" v-if="rowData.status" @click="itemAction(\'view-beneficiary\', rowData)"><i class="fa fa-eye"></i>view</button>',
                        '<button class="btn btn-xs" v-else @click="itemAction(\'update-beneficiary\', rowData)"><i class="fa fa-pencil"></i>update</button>',
                    '</div>'
                ].join(''),

                props: {
                    rowData: {
                        type: Object,
                        required: true
                    }
                },
                methods: {
                    itemAction: function(action, beneficiary) {
                        switch(action){
                            case 'view-beneficiary':
                                this.viewProfile(beneficiary);
                                break;
                            case 'update-beneficiary':
                                this.updateProfile(beneficiary);
                                break;
                        }
                        console.log('custom-action: ' + action);
                    },
                    viewProfile: function(beneficiary){
                        window.location.href = '/beneficiaries/' + beneficiary.uuid;
                    },
                    updateProfile: function(beneficiary){
                        window.location.href = '/beneficiaries/' + beneficiary.uuid + "/update";
                    }
                }
            })

            Vue.component('vuetable-pagination-bootstrap', {
                template: '#vuetable-pagination-bootstrap-template',
                // mixins: [paginationMixin],
                methods: {
                    loadPage: function(page) {
                        this.$dispatch('vuetable-pagination:change-page', page)
                    }
                }
            });


            new Vue({
                el: '#content',
                computed: {},
                data: {
                    search: {
                        type: '',
                        q: ''
                    },
                    fields: tableColumns,
                    sortOrder: [{
                        field: 'full_name',
                        direction: 'asc'
                    }],
                    paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                    // itemActions: tableActions,
                    moreParams: []
                },
                methods: {
                    setFilter: function() {
                        this.moreParams = [
                            'search=' + this.search.q
                        ];
                        this.$nextTick(function() {
                            this.$broadcast('vuetable:refresh')
                        });
                    },
                    resetFilter: function() {
                        this.search.q = '';
                        this.setFilter();
                    },viewProfile: function(beneficiary){
                        window.location.href = 'beneficiaries/' + beneficiary.uuid;
                    },
                    doSearch: function(){
                        this.setFilter();
                    },
                    formatStatus: function(status){
                        if(status){
                            return "<span class='label label-success'>valid</span>";
                        }else{
                            return "<span class='label label-danger'>not valid</span>"
                        }
                    }
                },
                ready: function(){},
                events: {
                    'vuetable:action': function(action, data) {
                        switch (action){
                            case "view-beneficiary":
                                this.viewProfile(data);
                                break;
                        }
                    },
                    'vuetable:loaded': function() {
                        $beneficiariesTable.LoadingOverlay('hide');
                    },
                    'vuetable:loading': function(){
                        $beneficiariesTable.LoadingOverlay('show', loadingOptions);
                    },
                    'vuetable:load-success': function(data){
                        console.log(data);
                    }
                }
            });


    })
        
</script>