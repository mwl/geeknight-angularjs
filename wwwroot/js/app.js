var module = angular.module('todo', []);
module.config(function ($routeProvider) {
    $routeProvider.
        when('/', {controller: HomeCtrl, templateUrl: 'home.html'}).
        when('/lists/:listname/', {controller: ListCtrl, templateUrl: 'list.html'}).
        otherwise({redirectTo: '/'});
});
function HomeCtrl($scope) {
}

function ListCtrl($scop) {

}
