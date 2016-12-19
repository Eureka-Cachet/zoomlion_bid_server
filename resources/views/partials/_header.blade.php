<div id="header" style="border-bottom-color: #29166f;">

    <!-- <div class="logo-area clearfix">
        <a href="#" class="logo"></a>
    </div> -->
    <!-- //logo-area-->

    <div class="tools-bar">
        <ul class="nav navbar-nav nav-main-xs">
            <li><a href="#" class="icon-toolsbar nav-mini"><i style="color: #29166f;" class="fa fa-bars"></i></a></li>
        </ul>
        <ul class="nav navbar-nav navbar-right tooltip-area">
            <!--<li><button class="btn btn-circle btn-header-search" ><i class="fa fa-search"></i></button></li>-->

            <li class="dropdown">
                <a style="color: #29166f;" href="#" class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">
                    <em><strong>Hi</strong>, {{ ucwords(auth()->user()->full_name) }} </em> <i class="dropdown-icon fa fa-angle-down"></i>
                </a>
                <ul class="dropdown-menu pull-right icon-right arrow">
                    <li><a href="{!! route('user.profile', ['id' => auth()->user()->uuid]) !!}"><i style="color: #29166f;" class="fa fa-user"></i> Profile</a></li>
                    <li class="divider"></li>
                    <li><a href="{!! route('logout') !!}"><i style="color: #29166f;" class="fa fa-sign-out"></i> Signout </a></li>
                </ul>
                <!-- //dropdown-menu-->
            </li>
             <li class="visible-lg">
                <a href="#" class="h-seperate fullscreen" data-toggle="tooltip" title="Full Screen" data-container="body"  data-placement="left">
                    <i class="fa fa-expand"></i>
                </a>
            </li> 
        </ul>
    </div>
    <!-- //tools-bar-->

</div>
