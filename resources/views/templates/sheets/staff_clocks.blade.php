<table>
    <thead>
    <tr>
        <th>DATE</th>
        <th>CLOCK IN</th>
        <th>CLOCK OUT</th>
    </tr>
    </thead>
    <tbody>
        @foreach($payload as $clock)
            <tr>
        <td>{{$clock["date"]}}</td>
        <td>{{$clock["clock_in"]}}</td>

        <td>{{$clock["clock_out"]}}</td>
    </tr>
        @endforeach
    </tbody>
</table>