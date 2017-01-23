'use strict';

/* Controllers */
angular.module('motorcycleAppControllers', [])

.controller('homeController', ['$scope', 'Motorcycle', function($scope, Motorcycle) {
	$scope.propertyName = 'Nombre';
    $scope.reverse = false;

    $scope.sortBy = function(propertyName) {
    	$scope.reverse = ($scope.propertyName === propertyName) ? !$scope.reverse : false;
    	$scope.propertyName = propertyName;
    }

    $scope.motorcycles = Motorcycle.query();
	// $http.get('motorcycles/motorcycles.json')
	//      .then(function(res){
	//      	$scope.motorcycles = res.data;
	//      });
}])

.controller('motorcycleDetailsController', [
	'$scope', 
	'$routeParams', 
	'Motorcycle', 
	'Fabricante', 
	'Motor', 
	function($scope, $routeParams, Motorcycle, Fabricante, Motor){
		$scope.motorcycleId = $routeParams.motorcycleId;
		$scope.motorcycle = Motorcycle.get({motorcycleId: $routeParams.motorcycleId}, function(Motorcycle){
	    	$scope.motorcycle.Fabricante = Fabricante.get({fabricanteId: Motorcycle.IdFabricante});
	    	$scope.motorcycle.Motor = Motor.get({motorId: Motorcycle.IdMotor});

	    	$scope.mainImageUrl = Motorcycle.Imagenes[0];
	    });

	    $scope.setImage = function(imageUrl) {
	      $scope.mainImageUrl = imageUrl;
	    }
    }]
);