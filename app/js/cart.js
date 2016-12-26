angular.module('cart', []);

angular.module('teaStore').service('cartService', function () {
    
}).controller('CartController',
    function(){
    this.addItem = function(){
        //service.add
    }
    this.item = {};
        this.addItem = function (product) {
            this.item.name = product.name;
            this.item.price = product.price;
        }

        this.total = function(){
            return 0;
        }
    }
);

