'use strict';

/* Controllers */

var motorcycleAppControllers = angular.module('motorcycleApp', []);

motorcycleAppControllers.controller('motorcycleAppController', ['$scope', '$http', function($scope, $http) {
	$http.get('motorcycles/motorcycles.json')
	     .then(function(res){
	     	//motorcycle data received.
	     	$scope.motorcycles = res.data;
	     });
}]);