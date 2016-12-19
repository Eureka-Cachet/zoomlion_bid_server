@extends('partials._main_master')

@section('main-content')
    <div id="main">

        <div class="row">
            <div class="col-sm-8 col-sm-offset-2">
                <div class="tabbable">

                    <ul id="profile-tab" class="nav nav-tabs" data-provide="tabdrop">
                        <li><a href="#" id="prevtab" data-change="prev"><i class="fa fa-chevron-left"></i></a></li>
                        <li><a href="#" id="nexttab" class="change" data-change="next"><i class="fa fa-chevron-right"></i></a></li>
                        <li class="active"><a href="#beneficiaries" data-toggle="tab">Beneficiaries</a></li>
                        <li><a href="#users" data-toggle="tab">Users</a></li>
                    </ul>

                    <div class="tab-content row resultSearch">

                        <div class="tab-pane fade in active" id="beneficiaries">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th> Photo </th>
                                        <th> Fullname </th>
                                        <th> Section </th>
                                        <th>  View</th>
                                    </tr>
                                    </thead>
                                    <tbody align="center">
                                    <tr>
                                        <td><img src="{{ asset('img/avatar.png') }}" alt="" class="avatar-small"></td>
                                        <td> Mark Nilson </td>
                                        <td> Cleaning </td>
                                        <td><a class="btn btn-theme" href="#"><i class="fa fa-eye"></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div class="tab-pane fade" id="users">
                            <div class="table-responsive">
                                <table class="table table-striped table-bordered table-hover">
                                    <thead>
                                    <tr>
                                        <th> Fullname </th>
                                        <th> Role </th>
                                        <th> Region </th>
                                        <th>  View</th>
                                    </tr>
                                    </thead>
                                    <tbody align="center">
                                    <tr>
                                        <td> Mark Nilson </td>
                                        <td> IT </td>
                                        <td> Greater Accra </td>
                                        <td><a class="btn btn-theme" href="#"><i class="fa fa-eye"></a></td>
                                    </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </div>
@endsection

@section('scripts')
    <script></script>
@endsection