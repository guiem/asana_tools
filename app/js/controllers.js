'use strict';

/* Controllers */

var asanaToolsApp = angular.module('asanaToolsApp', []);
var asanaBaseUrl = 'https://app.asana.com/api/1.0';

function MainCtrl($scope,$rootScope,$http) {
    $scope.saveAuth = function() {
        $rootScope.auth = 'Basic ' + window.btoa($scope.apiKey+':');
        $http.defaults.headers.common['Authorization'] = $rootScope.auth;
        $scope.loading = true;
        $http.get(asanaBaseUrl+'/workspaces').success(function(data) {
        $scope.workspaces = data;
        $scope.loading = false;
        });
    }
    
    $scope.getProjects = function(wsId,wsName) {
        $scope.workspace = wsName;
        $scope.loading = true;
        $http.get(asanaBaseUrl+'/workspaces/'+wsId+'/projects').success(function(data) {
                                                                     $scope.projects = data;
                                                    $scope.loading = false;
                                                                     });
    }
    
    $scope.listTasks = function(pId,pName) {
        $scope.project = pName;
        $scope.loading = true;
        $http.get(asanaBaseUrl+'/projects/'+pId+'/tasks').success(function(data) {
                                                      $scope.tasks = data;
                                                    $scope.loading = false;
                                                      });
    }
    
    $scope.setTask = function(taskId) {
        $scope.loading = true;
        $http.get(asanaBaseUrl+'/tasks/'+taskId).success(function(data) {
            $scope.current_task = data;
            $scope.loading = false;
                                                                  });
    }
}

angular.module('asanaToolsApp', [])
.directive('loading', function () {
           return {
           restrict: 'E',
           replace:true,
           template: '<div style="float:left" class="col-md-offset-4 loading"><h2><img src="http://www.nasa.gov/multimedia/videogallery/ajax-loader.gif" width="20" height="20" /><text style="font-size:12px;"> loading...</text></h2></div>',
           link: function (scope, element, attr) {
           scope.$watch('loading', function (val) {
                        if (val)
                        $(element).show();
                        else
                        $(element).hide();
                        });
           }
           }
           })

