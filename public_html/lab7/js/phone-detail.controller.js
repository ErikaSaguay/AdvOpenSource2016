
(function() {
   'use strict';
   angular
           .module('app')// angular.module is a place where you register that should be available to the application a container of parts
           .controller('PhoneDetailController', PhoneDetailController); //controller here is used tp add a method in order to react to events or execute computation 
   PhoneDetailController.$inject = ['$routeParams', 'PhonesService']; //is used to retrieve object instances as defined by provider, instantiate types, invoke methods, and load modules.
   function PhoneDetailController($routeParams, PhonesService) {
        var vm = this; //variable vm 
        
        vm.phone = {}; //this will hold the values 
        var id = $routeParams.phodeId; //creating data into the scope
        activate(); //calls function
        
        //////////
        
        function activate(){
            PhonesService.findPhone(id).then(function(response) {
                vm.phone = reponse; // call on PhonesService and goes ot findphone places the id and then add the response to the variable phone 
            });
        }

   }
})();