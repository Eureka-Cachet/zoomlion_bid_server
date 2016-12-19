@extends("partials._auth_master")

@section('content')

    <div id="forgot-password" class="modal fade">
        <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-hidden="true"><i class="fa fa-times"></i></button>
            <h4 class="modal-title">Forgot Password ?</h4>
        </div>
        <!-- //modal-header-->
        <div class="modal-body">
            <p>Kindly contact the system admin for assistance. Thank you &hellip;</p>
        </div>
        <!-- //modal-body-->
    </div>

    <div id="wrapper">
        <div id="loading-top">
            <div id="canvas_loading"></div>
            <span>Checking...</span>
        </div>
        <div id="main" style="background: #fff;">
            <div class="container">

                <div class="row">
                    <div class="col-lg-12">
                        <div class="account-wall" style="margin-top: 9.375em;">

                            <section style="margin-bottom: 50px;" class="align-lg-center">
                                <img width="250" style="margin-top: 25px;" src="/img/zoom.jpg" alt="">
                                <h1 style="font-size: 3em; color: #29166f;" class="login-title"><span>BENEFICIARIES MANAGEMENT SYSTEM</span></h1>
                            </section>

                            <form id="form-signin" class="form-signin">
                                {!! csrf_field() !!}
                                <section>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i style="color: #29166f;" class="fa fa-user"></i></div>
                                        <input type="text" class="form-control" name="username" placeholder="Username">
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-addon"><i style="color: #29166f;" class="fa fa-key"></i></div>
                                        <input type="password" class="form-control" name="password" placeholder="Password">
                                    </div>
                                    <button style="background-color: #29166f; border-color: #29166f; color: white;" class="btn btn-lg btn-block" type="submit" id="sign-in">Sign in</button>
                                </section>
                                <section class="clearfix">
                                    <a style="color: #29166f;" href="#forgot-password" data-toggle="modal" class="help">Forget Password? </a>
                                </section>
                            </form>
                            
                        </div>
                        <!-- //account-wall-->

                    </div>
                    <!-- //col-sm-6 col-md-4 col-md-offset-4-->
                </div>
                <!-- //row-->

                <div style="margin-top: 5em;" class="row text-center">

                    <a style="color: #29166f; margin-top: 70px;" href="#" class="footer-link pull-left">
                        Designed by E-C &trade;<img width="25" src="/img/ec_logo.png" alt="">  
                    </a>

                    <img class="pull-right" width="200" src="/img/cid_logo.png" alt="">
                    <img class="pull-right" style="margin-right: 20px" width="100" src="/img/mg_logo.jpg" alt="">

                </div>
            </div>
            <!-- //container-->

        </div>
    </div>

@endsection


@section('scripts')
    <script type="text/javascript">
        $(function() {
            //Login animation to center
            function toCenter(){
                var mainH=$("#main").outerHeight();
                console.log(mainH);
                var accountH=$(".account-wall").outerHeight();
                console.log(accountH);
                var marginT=(mainH-accountH)/2;
                console.log(marginT);
                if(marginT>30){
                    $(".account-wall").css("margin-top",marginT-103);
                }else{
                    $(".account-wall").css("margin-top",30);
                }
            }
            toCenter();
            var toResize;
            $(window).resize(function(e) {
                clearTimeout(toResize);
                toResize = setTimeout(toCenter(), 500);
            });

            //Canvas Loading
            var throbber = new Throbber({  size: 32, padding: 17,  strokewidth: 2.8,  lines: 12, rotationspeed: 0, fps: 15 });
            throbber.appendTo(document.getElementById('canvas_loading'));
            throbber.start();

            //Set note alert
//            setTimeout(function () {
//                $.notific8('Hi Guest , you can use Username : <strong>demo</strong> and Password: <strong>demo</strong> to  access account.',{ sticky:true, horizontalEdge:"top", theme:"inverse" ,heading:"LOGIN DEMO"})
//            }, 1000);


            $("#form-signin").submit(function(event){
                event.preventDefault();
                var main=$("#main");
                //scroll to top
                main.animate({
                    scrollTop: 0
                }, 500);
                main.addClass("slideDown");

                // send username and password to php check login
                $.ajax({
                    url: "{{ route('postLogin') }}",
                    data: $(this).serialize(),
                    type: "POST",
                    dataType: 'json',
                    success: function (e) {
                        setTimeout(function () {
                            main.removeClass("slideDown")
                        }, !e.status ? 500:3000);

                        if (!e.success) {
                            $.notific8('Check Username or Password again !! ',
                                    {
                                        life:5000,
                                        horizontalEdge:"bottom",
                                        theme:"danger" ,
                                        heading:" ERROR :); "
                                    });
                            return false;
                        }
                        $.notific8('Login Successful ',
                                {
                                    life:5000,
                                    horizontalEdge:"center",
                                    theme:"success" ,
                                    heading:" Welcome :); "
                                });
                        setTimeout(function () {
                            $("#loading-top span").text("Yes, account is access...")
                        }, 500);
                        setTimeout(function () {
                            $("#loading-top span").text("Redirect to account page...")
                        }, 1500);
                        console.log(e.url);
                        setTimeout( "window.location.href='"+ e.url + "'", 1000 );
                    }
                });

            });
        });
    </script>

@endsection