'use strict';
var app = angular.module('motorcycleApp', ['ngRoute'])

.config(function($routeProvider){
	$routeProvider
    .when('/', {
	 	template: '<H1>Home</H1>'
	})
	.when('/motorcycle', {
		template: '<H1>Motorcycle</H1>'
	});
	// .otherwise({
	// 	redirectTo: '/'
	// });
});