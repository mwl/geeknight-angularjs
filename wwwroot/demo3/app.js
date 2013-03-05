var app = angular.module('Demo3', ['ngResource']);
app.config(function ($routeProvider, $locationProvider) {
    $routeProvider.
        when("/", {controller: SeasonCtrl, templateUrl: "/demo3/season.html"}).
        when("/circuits/:name", {controller: CircuitCtrl, templateUrl: "/demo3/circuit.html"}).
        otherwise({redirectTo: '/'});
    //$locationProvider.html5Mode(true);
});
app.factory('Circuit', function($resource) {
    return $resource('/buckets/circuits/keys/:name', {name: '@handle'})
});



function SeasonCtrl($scope, $routeParams) {
    $scope.year = $routeParams.year;
    $scope.circuits = [
        {handle: "spa", name: "Spa-Francorchamps"}
    ]
}

function CircuitCtrl($scope, $routeParams, Circuit) {

    $scope.circuit = Circuit.get({name: 'spa'});

    $scope.hasSpeed = function(corner) {
        return corner.speed > 0;
    }
}