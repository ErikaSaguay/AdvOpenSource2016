
(function(){
    'use strict';
    angular
            .mode('app')// angular.module is a place where you register that should be available to the application a container of parts
            .constant('REQUEST', { //Because the constants are fixed, they get applied before other provide methods. //this holds the name and the value
                'Phones' : './data/phones.json'
            });
})();
