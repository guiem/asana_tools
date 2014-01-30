'use strict';

/* Controllers */

var asanaToolsApp = angular.module('asanaToolsApp', []);
var asanaBaseUrl = 'https://app.asana.com/api/1.0';

function AuthCtrl($scope,$rootScope,$http) {
    $scope.saveAuth = function() {
        $rootScope.auth = 'Basic ' + window.btoa($scope.apiKey+':');
        $http.defaults.headers.common['Authorization'] = $rootScope.auth;
        $http.get(asanaBaseUrl+'/workspaces').success(function(data) {
        $scope.workspaces = data;
        });
    }
}

function ListTasksCtrl($scope,$rootScope,$http) {
    $scope.listTasks = function() {
        window.alert('hey hey');
        //$rootScope.auth = 'Basic ' + window.btoa($scope.apiKey+':');
        //$http.defaults.headers.common['Authorization'] = $rootScope.auth;
        $http.get(asanaBaseUrl+'/workspaces').success(function(data) {
                                                      $scope.tasks = data;
                                                      });
        window.alert($scope.tasks);
    }
}

