angular.module('store-directives', []);

angular.module('teaStore').directive("product", function(){
    return {
        restrict: 'E',
        templateUrl: 'product.html'
    };
});

angular.module('teaStore').directive("filters", function(){
    return {
        restrict: 'E',
        templateUrl: 'productsFilters.html'
    };
});

