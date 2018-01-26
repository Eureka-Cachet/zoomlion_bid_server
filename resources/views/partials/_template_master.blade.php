<!DOCTYPE html>
<html>
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <head>
        @yield('style-content')
        <style>
             .page-break {
                    page-break-after: always;
                }
             thead {
                 display: table-header-group;
             }
             tfoot {
                 display: table-row-group;
             }
             tr {
                 page-break-inside: avoid;
             }
        </style>
    </head>
    @yield('body-content')
</html>