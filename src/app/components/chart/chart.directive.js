(function() {
    'use strict';

    angular
        .module('responsiveChart')
        .directive('barChart', barChart);


    /* @ngInject */
    function barChart(d3) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            scope: {
            }
        };
        return directive;

        function link(scope, element, attrs) {
            element.append("<p>Hola from directive!</p>")
        }
    }

    /* @ngInject */
    function Controller () {
    	console.log('a');

    }
})();