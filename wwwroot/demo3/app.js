var app = angular.module('Demo3', ['ngResource', 'ngRoute']);
app.config(function ($routeProvider) {
    $routeProvider.
        when("/:year", {controller: SeasonCtrl, templateUrl: "/demo3/season.html"}).
        when("/circuits/:name", {controller: CircuitCtrl, templateUrl: "/demo3/circuit.html"}).
        otherwise({redirectTo: '/2013'});
});
app.factory('Season', function ($resource) {
    return $resource("/buckets/seasons/keys/:year")
});
app.factory('Circuit', function($resource) {
    return $resource('/buckets/circuits/keys/:id')
});


function SeasonCtrl($scope, $routeParams, Season) {
    $scope.season = Season.get({year: $routeParams.year})
}

function CircuitCtrl($scope, $routeParams, Circuit) {

    $scope.circuit = Circuit.get({id: $routeParams.name});

    $scope.hasSpeed = function (corner) {
        return corner.speed > 0;
    };

    $scope.save = function() {
        $scope.circuit.$save();
    };
}