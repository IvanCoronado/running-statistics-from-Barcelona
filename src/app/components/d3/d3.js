(function() {
    'use strict';

    angular
        .module('d3', [

        ]);
})();

(function() {
    'use strict';

    angular
        .module('d3')
        .factory('d3Service', d3Service);

    /* @ngInject */
    function d3Service() {
        /* We could declare locals or other D3.js
specific configurations here. */
        return d3;
    }
})();
