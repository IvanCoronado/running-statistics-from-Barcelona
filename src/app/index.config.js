(function() {
    'use strict';

    angular
        .module('map')
        .config(config);

    /** @ngInject */
    function config(uiGmapGoogleMapApiProvider) {
        uiGmapGoogleMapApiProvider.configure({
            key: 'AIzaSyDIDijs1bqGvrhZ6wj-f2kcQRL394yfVrQ',
            v: '3.20', //defaults to latest 3.X anyhow
            libraries: 'weather,geometry,visualization'
        });
    }

})();
