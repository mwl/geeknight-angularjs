'use strict';

var module = angular.module('todo', []);

function ListsCtrl($scope, $http) {
    $scope.lists = []

    $http({method: 'GET', url: '/buckets/lists/keys/mwl', cache: false}).
        success(function (data, status, headers, config) {
            $scope.lists = data.lists;
        }).
        error(function (data, status, headers, config) {

        }
    );
}
