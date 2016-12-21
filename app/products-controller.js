angular.module('teaStore').controller('ProductsController', function ($http) {
    var controller = this;
    $http({method: 'GET', url:'/products'}).success(function(data) {
        controller.products = data;
    });
});
