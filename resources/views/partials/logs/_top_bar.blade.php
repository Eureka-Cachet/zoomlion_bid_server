<div class="row">
    <div class="col-xs-12">
        <section class="panel" id="topBar">
            <header class="panel-heading row">
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <span>User</span>
                    <v-select
                        :value.sync="filter.user"
                        :options="users"
                        placeholder="choose user..."
                        label="full_name"
                    >
                    </v-select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-5 col-lg-5">
                    <span>Date Range</span>
                    <input required type="text" data-date-type="logs" class="form-control">
                </div>
                <div class="col-xs-12 col-sm-12 col-md-2 col-lg-2">
                    <span style="color: transparent; opacity: 0;">.</span>
                    <button style="background: #29166f; color: #fff; border-color: #29166f;" @click="filterDown" class="btn btn-block" type="button">filter</button>
                </div>
            </header>
        </section>
    </div>
</div>