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
                latitude: 37.3851350,
                longitude: -5.9896636
            },
            zoom: 15,
        };
        $scope.options = {
            /* mapTypeId: google.maps.MapTypeId.ROADMAP,                   
             mapTypeControl: false,
             mapTypeControlOptions: {
                 style: google.maps.MapTypeControlStyle.DROPDOWN_MENU,
                 position: google.maps.ControlPosition.BOTTOM_CENTER
             },*/
            minZoom: 15,
            maxZoom: 15,
            draggable: false,
            /* panControlOptions: {
                 position: google.maps.ControlPosition.RIGHT_BOTTOM
             },*/
            disableDefaultUI: true,
            /*panControl: true,
            zoomControl: true,
            scaleControl: false,
            streetViewControl: false,
            overviewMapControl: false,*/
            styles: blackMap
        };

        uiGmapGoogleMapApi.then(function(maps) {

        });
    }
})();
