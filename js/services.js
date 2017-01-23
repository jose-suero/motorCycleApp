'use strict';

var motorcycleAppServices = angular.module('motorcycleAppServices', ['ngResource']);

motorcycleAppServices.factory('Motorcycle', ['$resource', function($resource){
    return $resource(
        'motorcycles/motorcycle:motorcycleId.json', 
        {}, 
        {
            query: {
                method: 'GET',
                params: {
                    motorcycleId:'s'
                },
                isArray:true
            }
        }
    );
}]);

motorcycleAppServices.factory('Fabricante', ['$resource', function($resource){
    return $resource(
        'fabricantes/fab:fabricanteId.json', 
        {}, 
        {
            query: {
                method: 'GET',
                params: {
                    fabricanteId:'ricantes' //Para completar la palaba fabricantes
                },
                isArray:true
            }
        }
    );
}]);

motorcycleAppServices.factory('Motor', ['$resource', function($resource){
    return $resource(
        'motores/motor:motorId.json', 
        {}, 
        {
            query: {
                method: 'GET',
                params: {
                    motorId:'es' //Para completar la palaba motores 
                    //NOTA: "el archivo motores.json no fue definido, no hay un listado de motores en la aplicación."
                },
                isArray:true
            }
        }
    );
}]);