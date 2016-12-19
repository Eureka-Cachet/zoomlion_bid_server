@extends('partials._main_master')

@section('main-content')
    <div id="main">

        @include('partials._breadcrumb', ['active' => 'Users Activities'])
        <!-- //breadcrumb-->

        <div id="content"></div>

    </div>

@endsection