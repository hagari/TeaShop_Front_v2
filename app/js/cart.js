angular.module('teaStore').controller('CartController', ['cartService', function(cartService) {

    this.total = function () {
        return cartService.total();
    }

    this.getCart = function () {
        return cartService.getCart();
    }
}]);


