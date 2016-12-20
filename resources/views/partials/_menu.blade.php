<nav id="menu"  data-search="close" style="background: #29166f; color: white;">
    <ul>
        @if(collect([1, 8])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('dashboard') || Request::is('dashboard/*') ? "mm-selected" :  '' }} ">
                <a href="{!! route('dashboard') !!}"><i style="color: white;" class="icon  fa fa-laptop"></i> Dashboard </a>
            </li>
        @endif

        @if(collect([1, 2])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('beneficiaries') || Request::is('beneficiaries/*') ? "mm-selected" :  '' }} ">
                <a href="{!! route('beneficiaries.index') !!}"><i style="color: white;" class="icon  fa fa-users"></i> Beneficiaries </a>
            </li>
        @endif

        @if(collect([1, 5])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('users') || Request::is('users/*') ? "mm-selected" :  '' }} ">
                <a href="{!! route('users.index') !!}"><i style="color: white;" class="icon  fa fa-users"></i> Users </a>
            </li>
        @endif

        @if(collect([1, 2])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('clocking') || Request::is('clocking/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('clocking.index') !!}"><i style="color: white;" class="icon  fa fa-calendar"></i> Attendance </a>
            </li>
        @endif

        @if(collect([1, 5])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('locations') || Request::is('locations/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('locations.index') !!}"><i style="color: white;" class="icon  fa fa-map-marker"></i> Locations </a>
            </li>
        @endif

        @if(collect([1, 5])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('devices') || Request::is('devices/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('devices.index') !!}"><i style="color: white;" class="icon  fa fa-mobile-phone"></i> Devices </a>
            </li>
        @endif

        @if(collect([1, 2, 4, 3])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('reports') || Request::is('reports/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('reports.index') !!}"><i style="color: white;" class="icon  fa fa-file"></i> Reports </a>
            </li>
        @endif

        @if(collect([1, 2])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('employment') || Request::is('employment/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('employment.index') !!}"><i style="color: white;" class="icon  fa fa-paperclip"></i> Enrolment Form</a>
            </li>
        @endif

        @if(collect([1, 2])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('enrolment') || Request::is('enrolment/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('enrolment.index') !!}"><i style="color: white;" class="icon  fa fa-book"></i> Enrolment </a>
            </li>
        @endif

        @if(collect([1, 5])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('backup') || Request::is('backup/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('backups.index') !!}"><i style="color: white;" class="icon  fa fa-cloud"></i> Backups & Restore </a>
            </li>
        @endif

        @if(collect([1, 5])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('logs') || Request::is('logs/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('logs.index') !!}"><i style="color: white;" class="icon  fa fa-list-alt"></i> Activity Logs </a>
            </li>
        @endif

        @if(collect([1])->contains(auth()->user()->role->id))
            <li class="{{ Request::is('settings') || Request::is('settings/*') ? "mm-selected":  '' }} ">
                <a href="{!! route('settings.index') !!}"><i style="color: white;" class="icon  fa fa-gear"></i> Settings </a>
            </li>
        @endif

    </ul>
</nav>
