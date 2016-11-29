
(function() {
   'use strict';
   angular
           .module('app')// angular.module is a place where you register that should be available to the application a container of parts
           .controller('PhoneListController', PhoneListController); //controller here is used tp add a method in order to react to events or execute computation 
   PhoneListController.$inject = ['PhonesService'];//is used to retrieve object instances as defined by provider, instantiate types, invoke methods, and load modules.
   function PhoneListController(PhonesService) {
        var vm = this;
        
        vm.phones = [];//this will hold the values`
        
        activate();
        
        //////////
        
        function activate(){
            PhonesService.getPhones().then(function(response){
                vm.phones = response;
            });
        }

   }
})();