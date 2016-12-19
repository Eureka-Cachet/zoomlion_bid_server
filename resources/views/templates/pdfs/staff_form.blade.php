@extends('partials._template_master')

@section('style-content')
    <style>
        .table {
            border-collapse: collapse !important;
        }
        .table-bordered th,
        .table-bordered td {
            border: 1px solid #ddd !important;
        }
        .table > tfoot > tr > td {
            padding: 8px;
            line-height: 1.42857143;
            vertical-align: top;
            border-top: 1px solid #dddddd;
        }
    </style>
@endsection


@section('body-content')
    <body>
    <img class="pull-right" style="display: inline;" width="50" src="{!! $zoom_logo !!}">
    <span style="color: #29166f; margin-left: 150px;">BENEIFICAIRIES MANAGEMENT SYSTEM</span>
    <hr>

    <div style="text-align: center;">
        <span style="color: #29166f;">REPORT</span>
    </div>

    <h4 style="text-align: center;">
        FORMS GENERATED
        FOR {{ strtoupper($level_name) }} {{ strtoupper(str_plural($level_type)) }}
        FROM {{ \Carbon\Carbon::parse($start)->toFormattedDateString() }}
        TO {{ \Carbon\Carbon::parse($end)->toFormattedDateString() }}
    </h4>


    <div style="width: 100%;">
        <table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
            <thead>
                <tr style="background-color: lightslategray; color: white;">
                    <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">{{ strtoupper($level_type) }}</th>
                    <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">ENROLLED</th>

                    <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">PENDING</th>
                    <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">TOTAL</th>
                </tr>
            </thead>
            <tbody>
                @foreach($payload as $location)
                    <tr>
                        <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['name'] !!}</td>
                        <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_enrolled'] !!}</td>
                        <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_not_enrolled'] !!}</td>
                        <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{!! $location['total_form'] !!}</td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
            <tr style="text-align: center;">
                <td>TOTAL</td>
                <td>{!! $all_enrolled !!}</td>
                <td>{!! $all_not_enrolled !!}</td>
                <td>{!! $all_total !!}</td>
            </tr>
            </tfoot>
        </table>
    </div>

    </body>
@endsection