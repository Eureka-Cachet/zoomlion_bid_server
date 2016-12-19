var elixir = require('laravel-elixir');
require('laravel-elixir-vueify');



elixir(function(mix) {

    mix.browserify('login.js');
    mix.browserify('backups.js');
    mix.browserify('departments.js');
    mix.browserify('devices.js');
    mix.browserify('employment.js');
    mix.browserify('locations.js');
    mix.browserify('reports.js');
    mix.browserify('staff.js');
    mix.browserify('users.js');

    mix.scripts([
        'js/jquery.min.js',
        'js/jquery.ui.min.js',
        'plugins/bootstrap/bootstrap.min.js',

        'js/modernizr/modernizr.js',
        'plugins/mmenu/jquery.mmenu.js',

        'plugins/form/form.js',
        'plugins/datetime/datetime.js',
        'plugins/pluginsForBS/pluginsForBS.js',
        'plugins/miscellaneous/miscellaneous.js',
        'js/bootstrap-inputmask.min.js',
        'js/bootstrap-confirmation.js',
        'js/loadingoverlay.js',
        'js/moment.min.js',
        'js/lodash.js',
        'js/socket.io.js',

        'js/caplet.custom.js',
    ], 'public/js/all_scripts.js')
        .version([
            'css/bootstrap/bootstrap.min.css',
            'css/bootstrap/bootstrap-themes.css',
            'css/daterangepicker.css',
            'css/jquery-confirm.css',
            'css/select2.min.css',

            'plugins/datable/jquery.dataTables.min.js',
            'plugins/datable/dataTables.bootstrap.js',

            'public/js/all_scripts.js',
            'public/js/vue-table.js',
            'public/js/vue.js',
            'public/js/vue-resource.js',

            'public/js/login.js',
            'public/js/backups.js',
            'public/js/departments.js',
            'public/js/devices.js',
            'public/js/employment.js',
            'public/js/locations.js',
            'public/js/reports.js',
            'public/js/staff.js',
            'public/js/users.js',

            'js/fileDownload.js',
            'js/jquery.min.js',
            'js/jquery.ui.min.js',
            'plugins/bootstrap/bootstrap.min.js',

            'js/modernizr/modernizr.js',
            'plugins/mmenu/jquery.mmenu.js',

            'plugins/form/form.js',
            'plugins/datetime/datetime.js',
            'plugins/pluginsForBS/pluginsForBS.js',
            'plugins/miscellaneous/miscellaneous.js',
            'js/bootstrap-inputmask.min.js',
            'js/loadingoverlay.js',
            'js/jquery-confirm.js',
            'js/lodash.js',
            'js/socket.io.js',
            'js/moment-with-locales.js',
            'js/select2.full.min.js',
            'js/vue-select.js',
            'js/date_fns.js',

            'js/caplet.custom.js',
        ]);
});
