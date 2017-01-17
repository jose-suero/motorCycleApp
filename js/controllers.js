'use strict';

/* Controllers */

var motorcycleAppControllers = angular.module('motorCycleApp', []);

//Inyectamos el servicio Car creaado en services JS, que nos permite extraer los vehiculos del proyecto
motorcycleAppControllers.controller('MotorCycleListCtrl', ['$scope', 'MotorCycle', '$http',
  	function($scope, MotorCycle, $http) {
    	/*Extraemos nuestros vehiculos desde cars.json*/
  		$http.get('motorCycles/motorCycles.json').success(function(data) {
    		$scope.motorCycles = data;
  		});
  	}]);

