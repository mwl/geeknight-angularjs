var app = angular.module('Demo2', []);
app.filter('speed', function() {
    return function(speedInKph, showMph) {
        if (showMph) {
            return Math.round(speedInKph / 1.609344) + " mph"
        }
        else {
            return speedInKph + " kph";
        }
    }
});

function DemoCtrl($scope) {
    $scope.corners = [
        {name: "La source",        number:  1, speed:  65},
        {name: "Eau Rouge",        number:  2},
        {name: "Eau Rouge",        number:  3},
        {name: "Raidillon",        number:  4, speed: 297},
        {name: "Les Combes",       number:  5, speed: 140},
        {name: "Les Combes",       number:  6, speed: 170},
        {name: "Malmedy",          number:  7, speed: 177},
        {name: "Rivage",           number:  8},
        {name: "Rivage",           number:  9, speed: 152},
        {name: "Pouhon",           number: 10, speed: 290},
        {name: "Pouhon",           number: 11},
        {name: "Fagnes",           number: 12},
        {name: "Fagnes",           number: 13, speed: 170},
        {name: "Curve Paul Frere", number: 14, speed: 250},
        {name: "Curve Paul Frere", number: 15, speed: 245},
        {name: "Blanchimont",      number: 16, speed: 305},
        {name: "Blanchimont",      number: 17, speed: 297},
        {name: "Chicane",          number: 18},
        {name: "Chicane",          number: 19}
    ];

    $scope.hasSpeed = function(corner) {
        return corner.speed > 0;
    };

    $scope.save = function () {
        if ($scope.newCornerForm.$valid) {
            $scope.corners.push(_.clone($scope.newcorner));
            $scope.newcorner = {};
    }
        else {
            alert("Form is not valid")
        }
    };
}