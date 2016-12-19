<link type="text/css" rel="stylesheet" href="{{ elixir('css/bootstrap/bootstrap.min.css') }}" />
<link type="text/css" rel="stylesheet" href="{{ elixir('css/bootstrap/bootstrap-themes.css') }}" />
<link type="text/css" rel="stylesheet" href="{{ elixir('css/daterangepicker.css') }}" />
<link type="text/css" rel="stylesheet" href="{{ elixir('css/jquery-confirm.css') }}" />
<link type="text/css" rel="stylesheet" href="{{ elixir('css/select2.min.css') }}" />
<link type="text/css" rel="stylesheet" href="{{ asset('css/style.css') }}" />
<style>
    .select2-dropdown{
        z-index: 999999999999999999999999999;
    }

    .select2-container--default .select2-selection--single{
        border-radius: 0;
    }

    .select2-container--default .select2-results__option--highlighted[aria-selected]{
        background-color: #29166f;
    }

    .primary-color {
        color: #29166f;
    }

    body.leftMenu:after{
        background-color: white;
    }

    .v-select .selected-tag{
        border: 0;
        background-color: none;
    }

    .pagination > .active > a, .pagination > .active > span, .pagination > .active > a:hover, .pagination > .active > span:hover, .pagination > .active > a:focus, .pagination > .active > span:focus{
        background-color: #29166f; 
        border-color: #29166f !important;
        color: white;
    }

    ::selection {
        background-color: #29166f !important;
        color: white;
    }

    .form-control:focus {
        border-color: #29166f !important;
    }
    
    [v-cloak] {
        opacity: 0;
    }
</style>
