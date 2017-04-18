(function() {
  'use strict';

  angular.module('app').config(config)

  config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider']

   function config($stateProvider, $urlRouterProvider, $locationProvider){

     $locationProvider.html5Mode(true)

     $stateProvider
       .state({ name: 'list-character', url: '/', component: 'characterList' })
       .state({ name: 'edit-character', url: '/{id}', component: 'characterEdit' })
   }
}());
