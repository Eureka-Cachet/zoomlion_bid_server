<div class="row">
    <div class="col-xs-12">
        <section class="panel" id="topBar">
            <header class="panel-heading row">
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <span>Region</span>
                    <v-select
                        :value.sync="region"
                        :on-change="fetchDistricts"
                        :options="regions"
                        placeholder="choose region..."
                        label="name"
                    >
                    </v-select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <span>District</span>
                    <v-select
                        :value.sync="district"
                        :on-change="fetchLocations"
                        :options="districts"
                        placeholder="choose district..."
                        label="name"
                    >
                    </v-select>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-4 col-lg-4">
                    <span>Location</span>
                    <v-select
                        :value.sync="location"
                        :on-change="fetchModules"
                        :options="locations"
                        placeholder="choose location..."
                        label="name"
                    >
                    </v-select>
                </div>
            </header>
        </section>
    </div>
</div>