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
        .page-break {
            page-break-after: always;
        }
    </style>
@endsection

@section('body-content')

    <body style="font-size: .8em;">
        <img class="pull-right" style="display: inline;" width="50" src="{!! $zoom_logo !!}">
        <span style="color: #29166f; margin-left: 150px;">BENEFICIARIES MANAGEMENT SYSTEM</span>
        <hr>

        <div style="text-align: center;">
            <span style="color: #29166f;">REPORT</span>
        </div>

        <h4 style="text-align: center; color: #29166f;">
            STAFF INFORMATION FOR {{ strtoupper($level_name) }} {{ strtoupper($level_type) }}
            @if($gender)
                {{ "({$gender})" }}
            @endif
        </h4>

        <?php $i = 0; ?>

        <div style="width: 100%;">
            @foreach($payload as $staff)

                <?php $i ++; ?>

                <table class="table table-bordered" style="width: 100%; margin-bottom: 5px;">
                    <thead>
                        <tr style="background-color: lightslategray; color: white; font-size: 1em;">
                            <th style="
                                                padding: 4px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                vertical-align: bottom;

                                            ">REGION</th>
                            <th style="
                                                padding: 4px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                vertical-align: bottom;

                                            ">DISTRICT</th>
                            <th style="
                                                padding: 4px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                vertical-align: bottom;

                                            ">MODULE</th>
                        </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            text-align: center;
                                        ">{!! $staff['region'] !!}</td>
                        <td style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            text-align: center;
                                        ">{!! $staff['district'] !!}</td>
                        <td style="
                                            padding: 8px;
                                            line-height: 1.42857143;
                                            vertical-align: top;
                                            border-top: 1px solid #dddddd;
                                            text-align: center;
                                        ">{!! $staff['module'] !!}</td>
                    </tr>
                    <tr>
                        <td style="text-align: center;">
                            <?php $beneficiary = clocking\Beneficiary::with('picture')->find($staff["id"]); ?>
                            <img width="100" src="{{ $beneficiary->picture
                            ? "data:image/jpg;base64," . $beneficiary->picture->encoded
                            : $zoom_logo}}">
                        </td>
                        <td colspan="2" style="padding: 5px; font-size: .9em;">
                            <p><b>BID : </b>{!! $staff['bid'] !!}</p>
                            <p><b>Staff Name :</b> {!! $staff['full_name'] !!}</p>
                            <p><b>Phone Number :</b> {!! $staff['phone_number'] !!}</p>
                            <p><b>Date of Employment :</b> {!! $staff['date_of_employment'] !!}</p>
                            <p><b>Rank :</b> {!! $staff['rank'] !!}</p>
                            <p><b>Bank Name :</b> {!! $staff['bank_name'] !!}</p>
                            <p><b>Bank Location :</b> {!! $staff['bank_branch'] !!}</p>
                            <p><b>Bank Account Number :</b> {!! $staff['account_number'] !!}</p>
                        </td>
                    </tr>
                    </tbody>
                </table>
                @if($i % 3 == 0 )
                    <div class="page-break"></div>
                @endif
            @endforeach

        </div>
    </body>

@endsection