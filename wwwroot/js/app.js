'use strict';

var module = angular.module('todo', []);

function ListsCtrl($scope) {
    $scope.lists = [
        {name: "Angular geeknight"},
        {name: "Personlige opgaver"}
    ]

}
