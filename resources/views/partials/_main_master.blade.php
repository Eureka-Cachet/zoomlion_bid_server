<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta information -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <!-- Title-->
    <title>Beneficiary Management System</title>
    <!-- Favicons -->
    @include('partials._ico')
    <!-- CSS Stylesheet-->
    @include('partials._styles')

</head>
<body class="leftMenu nav-collapse in" style="background-color: #29166f;">
<div id="wrapper">
    <!--
    /////////////////////////////////////////////////////////////////////////
    //////////     HEADER  CONTENT     ///////////////
    //////////////////////////////////////////////////////////////////////
    -->
    @include('partials._header')
    <!-- //header-->


    <!--
    /////////////////////////////////////////////////////////////////////////
    //////////     SLIDE LEFT CONTENT     //////////
    //////////////////////////////////////////////////////////////////////
    -->
    {{--@include('partials._nav')--}}
    <!-- //nav-->


    <!--
    /////////////////////////////////////////////////////////////////////////
    //////////     TOP SEARCH CONTENT     ///////
    //////////////////////////////////////////////////////////////////////
    -->
    <!-- //widget-top-search-->




    <!--
    /////////////////////////////////////////////////////////////////////////
    //////////     MAIN SHOW CONTENT     //////////
    //////////////////////////////////////////////////////////////////////
    -->
    <div id="main-content">
        @yield('main-content')
    </div>
    <!-- //main-->

    <footer id="site-footer" class="fixed hidden-xs" style="background: transparent;">
        <section>

            <!-- START Copyright -->
            <div id="copyright">
                <p>Powered by <a style="color: #29166f;" href="#" class="link-1">Eureka-cachet &trade;</a></p>
            </div>
            <!-- END Copyright -->

        </section>
    </footer>

    <!--
    //////////////////////////////////////////////////////////////
    //////////     LEFT NAV MENU     //////////
    ///////////////////////////////////////////////////////////
    -->
    @include('partials._menu')
    <!-- //nav left menu-->

</div>
    @include('partials._scripts')

    <script>
        $(function(){

            var channel_prefix = 'staff_'+"{{auth()->user()->uuid}}";

            @if(!auth()->user()->password_updated)
            setTimeout(function () {
                        $.notific8('Hi {{ ucwords(auth()->user()->full_name) }} , Kindly change the <strong>default password</strong> if you have not done so.',{ sticky:true, horizontalEdge:"top", theme:"inverse"})
                    }, 1000);
            @endif

                new Vue({
                el: '#header',
                methods: {
                    downloadPdf: function(filename){
                        var url = "{!! route('pdf.download') !!}" + "?filename=" +filename;
                        this.$http.get(url).then(function(res){
                            if(!res.data.success){
                                $.alert('file download failed');
                                return false;
                            }
                            $.alert('file downloaded');
                        }, function(res){
                            $.alert('file download failed');
                        })
                    },

                    downloadFile: function(data, type, folder){
                                var filename = data.link;
                                console.log(filename);
                                if(filename != null){
                                    var url = "{!! route('pdf.download') !!}" + "?filename=" + filename + "&type=" + type + "&folder=" + folder;
                                    var downloadButton = "<a class='btn btn-lg' href=" + url + "> <i style='color: #29166f;' class='fa fa-cloud-download fa-1x'></i></a>";
                                    $.dialog("Click " + downloadButton + " to download.");
                                }
                    }
                },
                ready: function(){
                    socket.on(channel_prefix + '_channel:FormsTemplateReady',
                            function(data){
                                this.downloadFile(JSON.parse(data), "form");
                            }.bind(this));

                    socket.on(channel_prefix + '_channel:PDF_GENERATED',function(data){
                        var data = JSON.parse(data);
                            this.downloadFile(data[0], "report", "pdfs");
                    }.bind(this));

                    socket.on(channel_prefix + '_channel:SHEET_GENERATED',function(data){
                        var data = JSON.parse(data);
                            this.downloadFile(data[0], "report", "sheets");
                    }.bind(this))
                },
                created: function(){
                }
            });
        });
    </script>

    @yield('scripts')
</body>
</html>