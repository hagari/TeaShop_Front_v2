angular.module('store-directives', []);

angular.module('teaStore').directive("product", function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/product.html'
    };
});

angular.module('teaStore').directive("filters", function(){
    return {
        restrict: 'E',
        templateUrl: 'templates/productsFilters.html',
        scope:{
            from:'=',
            to:'=',
            type:'=',
        }
    };
});

