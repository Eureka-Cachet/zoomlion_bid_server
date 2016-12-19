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
    <!-- Styleswitch if  you don't chang theme , you can delete -->
    {{--@include('partials._themes')--}}

</head>
<body class="full-lg">


@yield('content')


@include('partials._scripts')

@yield('scripts')

</body>
</html>
