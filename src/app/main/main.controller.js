(function() {
    'use strict';

    angular
        .module('map')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, uiGmapGoogleMapApi) {
        var vm = this;
        var blackMap = [{
            "featureType": "all",
            "elementType": "labels.text.fill",
            "stylers": [{
                "saturation": 36
            }, {
                "color": "#000000"
            }, {
                "lightness": 40
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.text.stroke",
            "stylers": [{
                "visibility": "on"
            }, {
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "all",
            "elementType": "labels.icon",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "all",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry",
            "stylers": [{
                "visibility": "on"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }, {
                "weight": 1.2
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "administrative",
            "elementType": "labels.text",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 20
            }]
        }, {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 21
            }]
        }, {
            "featureType": "poi",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 17
            }]
        }, {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 29
            }, {
                "weight": 0.2
            }]
        }, {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 18
            }]
        }, {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 16
            }]
        }, {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [{
                "color": "#000000"
            }, {
                "lightness": 19
            }]
        }, {
            "featureType": "transit",
            "elementType": "labels",
            "stylers": [{
                "visibility": "off"
            }]
        }, {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [{
                "color": "#394951"
            }, {
                "lightness": 17
            }]
        }];
        $scope.map = {
            center: {
                latitude: 41.3710614,
                longitude: 2.1485521
            },
            zoom: 14
        };
        $scope.options = {
            draggable: false,
            fit:true,
            minZoom: 13,
            maxZoom: 14,
            disableDefaultUI: true,
            styles: blackMap
        };

        $scope.randomMarkers = [{
            id: 0,
            latitude: 41.374565,
            longitude: 2.189239,
            title: "m0"
        }];

        //http://google-maps-utility-library-v3.googlecode.com/svn/tags/markerwithlabel/1.1.9/docs/reference.html
        $scope.markers = [{
            id: 101,
            latitude: 41.374565,
            longitude: 2.185239,
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
