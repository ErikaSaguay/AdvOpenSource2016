
(function() {
   'use strict';
   angular
           .module('app', ['ngRoute'])// angular.module is a place where you register that should be available to the application a container of parts
           .factory('PhonesService' , PhonesService);//ou create an object, add properties to it, then return that same object
   
        PhonesService.$inject = ['$http', 'REQUEST'];//is used to retrieve object instances as defined by provider, instantiate types, invoke methods, and load modules.
        
        
   function PhonesService($http, REQUEST ) {
       var url = REQUEST.Phones; // sets the url on the value that was set to phones 
       var service = { // it’s instantiated with the ‘new’ keyword. Because of that, you’ll add properties to ‘this’ and the service will return ‘this’. 
          'getPhones' : getPhones,
          'findPhone' : findPhone
       };
       return service;
       //////////
       function getPhones(){ //links  to get Phones in the service which will return error or data
           return $http.get(url)//Shortcut method to perform GET request.
                   .then(getPhonesComplete, getPhonesFailed); // after you get you to failed or complete
           function getPhonesComplete(response){
               return response.data;//sends data
           }
           function getPhonesFailed(error){
               return [];// returns the data
           }
           
       }
       function findPhone(id){ // finds phone by the id 
           
           return getPhones()// gets all data from phone 
                   .then(function(data){
                       return findPhoneComplete(data);;
                   });
           function findPhoneComplete(data){// takes the data and then loops for the value and key 
               var results = {};
               angular.forEach(data, function (value, key) {
               if ( !results.length){
                   if( value.hasOwnProperty('id') && value.id == id ){
                       results = angular.copy(value);
                   }
               }
           },results);
         }
      }
   }
})();