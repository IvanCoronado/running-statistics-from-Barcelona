(function() {
    'use strict';

    angular
        .module('responsiveChart')
        .directive('barChart', barChart);


    /* @ngInject */
    function barChart($window, d3Service) {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: Controller,
            controllerAs: 'vm',
            link: link,
            restrict: 'EA',
            scope: {
                data: '='
            }
        };
        return directive;

        function link(scope, element, attrs, Controller) {
            // Create a SVG root element
            var svg = d3Service.select(element[0]).append('svg').style('width', '100%');

            

            // Define the dimensions for the chart
            var height = 200;


            // Browser onresize event
            window.onresize = function() {
                scope.$apply();
            };


            // Watch for resize event
            scope.$watch(function() {
                return angular.element($window)[0].innerWidth;
            }, function(width) {
                Controller.render(svg, width, height);
            });
        }
    }

    /* @ngInject */
    function Controller(d3Service) {
        var vm = this;

        vm.render = render;


        function render(svg, width, height) {
            // remove all previous items before render
            svg.selectAll('*').remove();



            svg
                .attr('width', width)
                .attr('height', height);
                
            svg.append('g').attr('class', 'x-axis axis');

            var y = d3.scale.linear().range([height, 0]);
            var x = d3.scale.ordinal()
                .rangeRoundBands([0, width], .85)
                .domain(vm.data.map(function(d) {
                    return d.x;
                }));

            // Define x-axis
            var xAxis = d3Service.svg.axis()
                .scale(x)
                .orient('bottom')
                .ticks(30)
                .innerTickSize(0)
                .outerTickSize(1)
                .tickPadding(17);

            // Draw x-axis
            svg.select('.x-axis')
                .attr("transform", "translate(0," + (height - 40) + ")")
                .call(xAxis)
                .selectAll("text")
                .style("text-anchor", "middle");


            y.domain([0, d3.max(vm.data, function(d) {
                return d.y;
            })]);


            var bars = svg.selectAll("bar")
                .data(vm.data)
                .enter().append("rect")
                .style("fill", "#C1157C")
                .attr("x", function(d) {
                    return x(d.x);
                })
                .attr("width", x.rangeBand())
                .attr("y", height);

            bars.transition()
                .duration(200)
                .attr("y", function(d) {
                    return y(d.y) - 40;
                })
                .attr("height", function(d) {
                    return height - y(d.y);
                });
        }
    }

})();
