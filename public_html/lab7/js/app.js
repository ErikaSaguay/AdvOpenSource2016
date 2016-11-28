
(function() {
   'use strict';
   angular
           .module('app', ['ngRoute']) // angular.module is a place where you register that should be available to the application a container of parts
           .config(config); //gets executed during the provider registrations and configuration phase
   config.$inject = ['$routeProvider'];//is used to retrieve object instances as defined by provider, instantiate types, invoke methods, and load modules.
   function config($routeProvider) {
       $routeProvider.
               when('/',{ //Wraps an object that might be a value or a then-able promise into a $routerProvider
                   templateUrl:'js/phone-list.template.html',
                   controller: 'PhoneListController',
                   controllerAs: 'vm'
               }).
               when('/phones/:phoneId', {
                   templateUrl: 'js/phone-detail.template.html',
                   controller: 'PhoneDetailController',
                   controllerAs: 'vm'
               }).  
               otherwise({ //Sets route definition that will be used on route change when no other route definition is matched.
                   redrirectTo: '/'
               })
   }
})();