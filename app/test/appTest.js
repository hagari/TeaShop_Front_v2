(function(angular) {
    'use strict';
    var myAppDev = angular.module('myAppE2E', ['teaStore', 'ngMockE2E']);

    myAppDev.run(function($httpBackend) {
        var teas = [
            {
                id:1,
                name:'White Tea',
                price:17.5,
                details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
                soldOut:false,
                canPurchase:true,
                image:"02_white-tea-with-jasmine"},
            {
                id:2,
                name:'Green Tea',
                price:19.5,
                details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
                soldOut:false,
                canPurchase:true,
                image:"03_green-tea"},
        ]

        console.log("inside $httpBackend");
        $httpBackend.whenGET('/products').respond(teas);

    });
})(window.angular);



