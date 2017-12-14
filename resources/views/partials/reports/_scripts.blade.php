<script type="text/javascript">
        $(function(){

            var host = window.location.host;
            var socket = io.connect('https://' + host + ':6001', {secure: true});
            var channel_prefix = 'staff_'+"{{auth()->user()->uuid}}";

            var $content = $('#content');

            var loadingOptions = {
                image       : "",
                fontawesome : "fa fa-refresh fa-spin text-default",
                maxSize     : "30px"
            };

            var levels = [
                {id: 1, text: 'National'},
                {id: 2, text: 'Region'},
                {id: 3, text: 'District'},
                {id: 4, text: 'Location'}
            ];

            var $dateRange = $('input[data-date-type="report"]');

            Vue.directive('select', {
                twoWay: true,
                priority: 1000,

                params: ['options'],
                paramWatchers: {
                    options: function(val, old){
                        var data = [];
                        _.forEach(val, function(value){
                            data.push({id: value.id, text: value.name})
                        });
                        $(this.el).select2({data: data}).trigger('change');
                    }
                },
                bind: function () {
                    var self = this;
                    $(this.el).select2({
                        data: this.params.options,
                        placeholder: "Select Option",
                        allowClear: true}).on('change', function() {
                        self.set(this.value)
                    })
                },
                update: function (value) {
                    $(this.el).val(value).trigger('change')
                },
                unbind: function () {
                    $(this.el).off().select2('destroy')
                }
            });

            new Vue({
                el: "#main-content",
                data: {
                    level: '',
                    region: '',
                    district: '',
                    location: '',
                    dateRange: {
                        start: '',
                        end: ''
                    },
                    dateType: '',
                    fileFormat: 'pdf',
                    regions: [],
                    districts: [],
                    locations: [],
                    modules: [],
                    levels: levels,
                    bid: ''
                },
                computed: {
                    showRegion: function(){
                        if(this.level == 2){
                            return true;
                        }
                    },
                    showDistrict: function(){
                        if(this.level == 3){
                            return true;
                        }
                    },
                    showLocation: function(){
                        if(this.level == 4){
                            return true;
                        }
                    }
                },
                methods: {
                    generate: function(type){
                        $content.LoadingOverlay('show', loadingOptions);
                        console.log(type);
                        var url = "{!! route('api.reports.generate') !!}";
                        var data = this.prepare_form_data(type);
                        // console.log(data);
                        this.$http.post(url, data)
                                .then(function(res){
                                    this.notify("Operation Started ", "success", false);
                                }, function(res){
                                    this.notify("Operation Failed ", "danger", true);
                                    $content.LoadingOverlay('hide', true);
                                });
                    },
                    fetch_data: function(source, target){
                        var url = "internal-api/" + source;
                        var data;
                        // console.log()
                        this.$http.get(url).then(function(response){
                            data = response.data.data;
                            this.$set(target, data);
                        }, function(response){
                            console.log(response);
                        });
                    },
                    set_regions: function(){
                        this.fetch_data('regions', 'regions');
                    },
                    set_districts: function(){
                        this.fetch_data('districts', 'districts');
                    },
                    set_locations: function(){
                        this.fetch_data('locations', 'locations');
                    },
                    set_modules: function(){
                        this.fetch_data('modules', 'modules');
                    },
                    prepare_form_data: function(type){
                        var data = new FormData;
                        data.append('_token', "{!! csrf_token() !!}");
                        data.append('level', this.level);
                        data.append('type', type);
                        data.append('region_id', this.region);
                        data.append('district_id', this.district);
                        data.append('location_id', this.location);
                        data.append('module_id', this.module);
                        data.append('date_type', this.dateType);
                        data.append('format', this.fileFormat);
                        data.append('start', this.dateRange.start);
                        data.append('end', this.dateRange.end);
                        data.append('bid', this.bid);
                        return data;
                    },
                    notify: function(message, status, sticky){
                        $.notific8(
                            message,{
                                sticky:sticky,
                                horizontalEdge:"top",
                                theme: status
                            })
                    },
                    onError: function(error){
                        this.notify(error, "danger", true);
                        $content.LoadingOverlay('hide', true);
                    },
                    onSuccess: function(){
                        $content.LoadingOverlay('hide', true);
                    }
                },
                created: function(){
                    this.set_regions();
                    this.set_districts();
                    this.set_locations();
                    this.set_modules();
                },
                ready: function(){
                    $dateRange.daterangepicker({
                                ranges: {
                                    // 'Today': [moment(), moment()],
                                    // 'Yesterday': [moment().subtract('days', 1), moment().subtract('days', 1)],
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
                                this.$set('dateRange.start', start.format('MMMM D, YYYY'));
                                this.$set('dateRange.end', end.format('MMMM D, YYYY'));
                            }.bind(this)
                    );

                    socket.on(channel_prefix + '_channel:PDF_GENERATED',function(data){
                        this.onSuccess();
                    }.bind(this));

                    socket.on(channel_prefix + '_channel:SHEET_GENERATED',function(data){
                        this.onSuccess();
                    }.bind(this))

                    socket.on(channel_prefix + '_channel:FormsDataGenerationFailed',function(data){
                        var data = JSON.parse(data);
                            this.onError(data.error);
                    }.bind(this));
                }
            });

        });
    </script>