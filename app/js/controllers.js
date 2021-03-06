angular.module('teaStore').controller('AllProductsController', ['teasService','$http','cartService', function (teasService,$http,cartService) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = teasService.getTeas();

    ctrl.getProducts = function() {
        $http.get('http://localhost:3000/products')
            .then(function(response) {
                ctrl.products = response.data;
            });
    };

    ctrl.addItem = function (item) {
        cartService.addItem(item);
    }

    ctrl.priceGreaterThan = function(){
        return function(item){
           if (!ctrl.from){
               return true;
           }

           return (item.price >= ctrl.from);
        }
    }

    ctrl.priceSmallerThan = function(){
        return function(item){
            if (!ctrl.to){
                return true;
            }

           return (item.price <= ctrl.to);
        }
    }

    ctrl.teaType = function () {
        return function (item) {
            if (!ctrl.type) {
                return true;
            }
            if ((ctrl.type == 'All')) {
                return true;
            }
            return (item.name.indexOf(ctrl.type) > -1);
        }
    }
    ctrl.saveCart = function () {
        cartService.saveToLocalStorage();
    }

    ctrl.getProducts();
}]);

angular.module('teaStore').controller('ProductShowController', ['teasService','$http','$routeParams','cartService', function (teasService,$http,$routeParams,cartService) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = {
        id:2,
        name:'Green Tea with Ginger and Lemon',
        price:19.5,
        type:'Green',
        details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
        soldOut:false,
        canPurchase:true,
        image:"03_green-tea"};

    ctrl.getProductById = function () {
        $http.get('http://localhost:3000/products/' + $routeParams.id)
            .then(function(response){
                ctrl.products = response.data;
            });
    }

    ctrl.addItem = function (item) {
        cartService.addItem(item);
    }

    ctrl.getProductById();
}]);

angular.module('teaStore').controller('HomeController', ['teasService','$http','cartService', function (teasService,$http, cartService) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = teasService.getTeas();

    ctrl.getHomeProducts = function() {
        $http.get('http://localhost:3000/')
            .then(function(response) {
                ctrl.products = response.data;
            });
    }

    ctrl.addItem = function (item) {
        cartService.addItem(item);
    }

    ctrl.getHomeProducts();
}]);
