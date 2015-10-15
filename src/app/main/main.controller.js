(function() {
    'use strict';

    angular
        .module('map')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController(uiGmapGoogleMapApi, mapStyles) {
        var vm = this;

        vm.map = {
            center: {
                latitude: 41.3710614,
                longitude: 2.1485521
            },
            zoom: 14
        };
        vm.options = {
            draggable: false,
            fit:true,
            minZoom: 13,
            maxZoom: 14,
            disableDefaultUI: true,
            styles: mapStyles.shades
        };

        //http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/docs/reference.html
        vm.markers = [{
            id: 101,
            latitude: 41.374565,
            longitude: 2.185239,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•••",
            /*
             *  The name of the CSS class defining the styles for the label. 
             *  Note that style values for position, overflow, top, left, zIndex, display, marginLeft, and marginTop are ignored; 
             *  these styles are for internal use only.
             **/
            labelClass: "marker",
            /*
             *  An object literal whose properties define specific CSS style values to be applied to the label. 
             *  Style values defined here override those that may be defined in the labelClass style sheet. 
             *  If this property is changed after the label has been created, all previously set styles (except those defined in the style sheet) are removed from the label before the new style values are applied.
             **/
            labelStyle: {
                width: (30+(3*5))+"px",
                height: (30+(3*5))+"px",
                lineHeight: (30+(3*5))+"px"
            }
        }, {
            id: 102,
            latitude: 41.378565,
            longitude: 2.15,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•",
            labelClass: "marker",
            labelStyle: {
                width: (30+(1*5))+"px",
                height: (30+(1*5))+"px",
                lineHeight: (30+(1*5))+"px"
            }
        }, {
            id: 103,
            latitude: 41.387965,
            longitude: 2.156,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•",
            labelClass: "marker",
            labelStyle: {
                width: (30+(1*5))+"px",
                height: (30+(1*5))+"px",
                lineHeight: (30+(1*5))+"px"
            }
        }, {
            id: 104,
            latitude: 41.382965,
            longitude: 2.16750,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•",
            labelClass: "marker",
            labelStyle: {
                width: (30+(1*5))+"px",
                height: (30+(1*5))+"px",
                lineHeight: (30+(1*5))+"px"
            }
        }, {
            id: 105,
            latitude: 41.373,
            longitude: 2.16,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•",
            labelClass: "marker",
            labelStyle: {
                width: (30+(1*5))+"px",
                height: (30+(1*5))+"px",
                lineHeight: (30+(1*5))+"px"
            }
        }, {
            id: 106,
            latitude: 41.375965,
            longitude: 2.17400,
            labelAnchor: "15 15",
            icon: "false",
            labelContent: "•",
            labelClass: "marker",
            labelStyle: {
                width: (30+(1*5))+"px",
                height: (30+(1*5))+"px",
                lineHeight: (30+(1*5))+"px"
            }
        }];
        uiGmapGoogleMapApi.then(function(maps) {

        });
    }
})();
