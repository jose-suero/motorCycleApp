'use strict';

/* App Module */
/* se crea el modulo del aplicativo*/
var motorcycleApp = angular.module('motorcycleApp', [
  'motorcycleAppControllers',
  'motorcycleAppServices' // se agrega el servicio creado en services.js
]);