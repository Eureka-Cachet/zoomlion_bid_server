<div class="widget-top-search">
    <span class="icon"><a href="#" class="close-header-search"><i class="fa fa-times"></i></a></span>
    <form id="top-search" action="{{ route('search') }}" method="get">
        {!! csrf_field() !!}
        <h2>Search Beneficiary</h2>
        <div class="input-group">
            <input  type="text" name="q" placeholder="by name..." class="form-control" />
                <span class="input-group-btn">
                    <button class="btn" type="submit" title="Search"><i class="fa fa-search"></i></button>
                </span>
        </div>
    </form>
</div>