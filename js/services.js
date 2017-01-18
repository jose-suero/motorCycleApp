'use strict';

/* Services */
/* Se aplica el uso de servicios*/
var motorcycleAppServices = angular.module('motorcycleAppServices', []);

//Se declara el servicio Car! con una sola propiedad
motorcycleAppServices.factory('Motorcycle', [
  function(){
    return {
    	notify: function(msg){
    		alert(msg);
    	},
    	getCars: function(){
    		return null;
    	}
    }
  }]);
