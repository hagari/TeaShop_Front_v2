var app = angular.module('store-directives', []);

app.directive("products", function(){
    return {
        restrict: 'E',
        templateUrl: 'products.html'
    };
});