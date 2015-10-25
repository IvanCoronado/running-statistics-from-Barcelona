(function() {
    'use strict';

    angular
        .module('map')
        .directive('mouseWheelIntercept', mouseWheelIntercept);

    /* @ngInject */
    function mouseWheelIntercept () {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            link: link,
            restrict: 'A'
        };
        return directive;

        function link(scope, element, attrs) {
        	element[0].addEventListener( 'mousewheel', wheelEvent, true );

        	function wheelEvent(){
        		scope.vm.hideAllTooltips();
        	}
        }
    }

})();