'use strict';

var motorcycleApp = angular.module('motorcycleApp', ['ngRoute']);

motorcycleApp.config(function($routeProvider, $locationProvider) {
	debugger;
	$routeProvider.when('/motorcyle/:motoId', {
		templateUrl: 'index.html',
		controller: motorcycleController
	})
});