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
        <span style="color: #29166f; margin-left: 150px;">BENEFICIARIES MANAGEMENT SYSTEM</span>
        <hr>

        <div style="text-align: center;">
            <span style="color: #29166f;">REPORT</span>
        </div>

        <h4 style="text-align: center;">
            NUMBER OF ENROLLED BENEFICIARIES PER {{ strtoupper($level_type) }} IN {{ strtoupper($level_name) }}
            @if($gender)
                {{ "({$gender})" }}
            @endif
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

                                        ">{{ $level_type }}</th>
                        <th style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            vertical-align: bottom;

                                        ">Total</th>
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
                                        ">{!! $location['total_enrolment'] !!}</td>
                        </tr>
                    @endforeach
                </tbody>
                <tfoot>
                    <tr style="text-align: center;">
                        <td>TOTAL </td>
                        <td>{!! $all_total !!}</td>
                    </tr>
                </tfoot>
            </table>
        </div>

    </body>

@endsection