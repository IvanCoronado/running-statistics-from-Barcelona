(function() {
    'use strict';

    angular
        .module('responsiveChart')
        .factory('d3', d3);

    /* @ngInject */
    function d3() {
        /* We could declare locals or other D3.js
			specific configurations here. */
        return d3;
    }
})();
