'use strict';

/* Controllers */

var asanaToolsApp = angular.module('asanaToolsApp', []);
var asanaBaseUrl = 'https://app.asana.com/api/1.0';

function MainCtrl($scope,$rootScope,$http) {
    $scope.saveAuth = function() {
        $rootScope.auth = 'Basic ' + window.btoa($scope.apiKey+':');
        $http.defaults.headers.common['Authorization'] = $rootScope.auth;
        $http.get(asanaBaseUrl+'/workspaces').success(function(data) {
        $scope.workspaces = data;
        });
    }
    
    $scope.getProjects = function(wsId,wsName) {
        $scope.workspace = wsName;
        $http.get(asanaBaseUrl+'/workspaces/'+wsId+'/projects').success(function(data) {
                                                                     $scope.projects = data;
                                                                     });
    }
    
    $scope.listTasks = function(pId,pName) {
        $scope.project = pName;
        $http.get(asanaBaseUrl+'/projects/'+pId+'/tasks').success(function(data) {
                                                      $scope.tasks = data;
                                                      });
    }
}

