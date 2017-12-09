<script src="{!! elixir('js/vue-select.js') !!}"></script>
<script>

    $(function(){
        Vue.component('v-select', VueSelect.VueSelect);

        var loadingOptions = {
                image       : "",
                fontawesome : "fa fa-refresh fa-spin text-default",
                maxSize     : "30px"
            };

        var $dateRange = $('input[data-date-type="logs"]');
        var $logsTablePanel = $('#logsTablePanel');

        var tableColumns = [
                {
                    title: 'Date / Time',
                    name: 'date_time',
                    dataClass: 'text-center'
                },
                {
                    title: 'User',
                    name: 'name',
                    dataClass: 'text-center'
                },
                {
                    title: 'Role',
                    name: 'role',
                    dataClass: 'text-center'
                },
                {
                    title: 'Action',
                    name: 'action',
                    dataClass: 'text-center'
                }
            ];

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
            el: "#main-content",
            computed: {
                logsUrl: function(){
                    return "internal-api/activity-logs";
                }
            },
            data: {
                fields: tableColumns,
                sortOrder: [],
                paginationInfoTemplate: '???? {from} ??? {to} ?????????? {total} ??????',
                itemActions: [
                    { name: 'view-user', label: 'view', icon: 'fa fa-user', class: 'btn btn-xs' }
                ],
                moreParams: [],
                filter: {
                    user: '',
                    dateRange: {
                        start: '',
                        end: ''
                    }
                },
                currentFilterState: {},
                users: []
            },
            methods: {
                viewUser: function(user){},
                filterDown: function(){
                    console.log('filtering...');
                    if(this.filter.user){
                        var filter = "filter=" + this.filter.user.id;
                        this.moreParams.push(filter);
                    }

                    if(this.filter.dateRange.start && this.filter.dateRange.end){
                        var start = "start=" + this.filter.dateRange.start;
                        var end = "end=" + this.filter.dateRange.end;
                        this.moreParams.push(start);
                        this.moreParams.push(end);
                    }

                    if(_.isEmpty(this.moreParams)) return;

                    this.$nextTick(function() {
                        this.$broadcast('vuetable:refresh')
                    });
                },
                loadUsers: function(){
                    this.$http.get("internal-api/users").then(function(resp){
                        this.users = resp.data.data;
                    }, function(error){
                        console.log(error);
                    });
                }
            },
            ready: function(){
                this.loadUsers();

                $dateRange.daterangepicker({
                        ranges: {
                            'Today': [moment(), moment()],
                            'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
                            'Last 7 Days': [moment().subtract('days', 6), moment()],
                            'This Month': [moment().startOf('month'), moment().endOf('month')],
                            'Last Month': [moment().subtract('month', 1).startOf('month'), moment().subtract('month', 1).endOf('month')]
                        },
                        opens: 'left',
                        drops: 'up',
                        buttonClasses: ['btn-sm'],
                        applyClass: 'btn-inverse',
                        cancelClass: 'btn-inverse',
                        format: 'LL',
                        separator: ' to ',
                        locale: {
                            fromLabel: 'From',
                            toLabel: 'To',
                            customRangeLabel: 'Choose Range',
                            daysOfWeek: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr','Sa'],
                            monthNames: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
                        }
                    },
                    function(start, end) {
                        $dateRange.find('span').html(start.format('MMMM D, YYYY') + ' - ' + end.format('MMMM D, YYYY'));
                        this.$set('filter.dateRange.start', start.format('MMMM D, YYYY'));
                        this.$set('filter.dateRange.end', end.format('MMMM D, YYYY'));
                    }.bind(this)
                );
            },
            events: {
                'vuetable:action': function(action, data) {
                    switch (action){
                        case "view-user":
                            console.log(data);
                            break;
                    }
                },
                'vuetable:loaded': function() {
                    $logsTablePanel.LoadingOverlay('hide', true);
                },
                'vuetable:loading': function(){
                    $logsTablePanel.LoadingOverlay('show', loadingOptions);
                },
            }
        });
    })

</script>