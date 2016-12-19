<form v-cloak @submit.prevent="generate" class="form-horizontal" id="applicantForm">

    <div class="form-group">
        <label class="control-label">District</label>
        <div>
            <v-select
                :value.sync="formData.district"
                :on-change="fetchLocations"
                :options="districts"
                placeholder="choose district..."
                label="name"
            >
            </v-select>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label">Location</label>
        <div>
            <v-select
                :value.sync="formData.location"
                :on-change="fetchModules"
                :options="locations"
                placeholder="choose location..."
                label="name"
            >
            </v-select>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label">Modules</label>
        <div>
            <v-select
                :value.sync="formData.module"
                :options="modules"
                placeholder="choose module..."
                label="name"
            >
            </v-select>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label">Rank</label>
        <div>
            <v-select
                :value.sync="formData.rank"
                :options="ranks"
                placeholder="choose rank..."
                label="name"
            >
            </v-select>
        </div>
    </div>

    <div class="form-group">
        <label class="control-label">How Many?</label>
        <div>
            <div class="input-icon right"> <i class="fa fa-file-o ico "></i>
                <input v-model="formData.number" required type="number" class="form-control" name="number_of_form">
            </div>
        </div>
    </div>

    <div class="form-group offset">
        <div>
            <button style="background: #29166f; color: #fff; border-color: #29166f;" type="submit" class="btn btn-theme btn-block">
                <i class="fa fa-download"></i>
                Generate
            </button>
        </div>
    </div>
</form>