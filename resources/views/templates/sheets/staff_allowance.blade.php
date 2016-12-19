<table class="table table-bordered" style="width: 100%; margin-bottom: 20px;">
        <thead>
        <tr style="background-color: lightslategray; color: white;">
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">BID</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">NAME</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">RANK</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">BANK</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">BANK BRANCH</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">ACCOUNT NUMBER</th>
            <th style="
                                        padding: 8px;
                                        line-height: 1.42857143;
                                        vertical-align: top;
                                        border-top: 1px solid #dddddd;
                                        vertical-align: bottom;

                                    ">ALLOWANCE</th>
        </tr>
        </thead>
        <tbody>
    @foreach($payload as $b)
        <tr>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["bid"] }}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["name"] }}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["rank"] }}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["bank"] }}</td>

                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["branch"] }}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["account"] }}</td>
                <td style="
                                                padding: 8px;
                                                line-height: 1.42857143;
                                                vertical-align: top;
                                                border-top: 1px solid #dddddd;
                                                text-align: center;
                                            ">{{ $b["allowance"] }}</td>
        </tr>
    @endforeach
        </tbody>
    </table>