<table>
    <thead>
    <tr>
        <th>{{ strtoupper($level_type) }}</th>
        <th>ENROLLED</th>

        <th>PENDING</th>
        <th>TOTAL</th>
    </tr>
    </thead>
    <tbody>
    @foreach($payload as $location)
        <tr>
            <td>{!! $location['name'] !!}</td>
            <td>{!! $location['total_enrolled'] !!}</td>
            <td>{!! $location['total_not_enrolled'] !!}</td>
            <td>{!! $location['total_form'] !!}</td>
        </tr>
    @endforeach
    </tbody>
    <tfoot>
        <tr>
            <td>TOTAL</td>
            <td>{!! $all_enrolled !!}</td>
            <td>{!! $all_not_enrolled !!}</td>
            <td>{!! $all_total !!}</td>
        </tr>
    </tfoot>
</table>