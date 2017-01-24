'use strict';
var app = angular.module('motorcycleApp', [
	'motorcycleAppControllers', 
	'motorcycleAppServices', 
	'ngRoute',
	'ngAnimate'
]);

app.config(function($routeProvider){ //, $locationProvider){
	$routeProvider
    .when('/motorcycles', {
	 	templateUrl: 'templates/home.html',
	 	controller: 'homeController'
	})
	.when('/motorcycles/:motorcycleId/', {
		templateUrl: 'templates/motorcycle.html',
		controller: 'motorcycleDetailsController'
	})
	.otherwise({
		redirectTo: '/motorcycles'
	});

    // configure html5 to get links working on jsfiddle
    // $locationProvider.html5Mode({
    // 	enabled: true
    // });
});