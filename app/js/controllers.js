angular.module('teaStore').controller('AllProductsController', ['teasService','$http','cartService', function (teasService,$http,cartService) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = teasService.getTeas();

    ctrl.getProducts = function() {
        $http.get('/products')
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

    ctrl.teaType = function (item) {
        if (!ctrl.type){
            return true;
        }
        if ((ctrl.type == 'All')){ return true;}
        return (item.name.indexOf(ctrl.type) > -1);
    }

    ctrl.saveCart = function () {
        cartService.save();
    }

    ctrl.getProducts();
}]);

angular.module('teaStore').controller('ProductShowController', ['teasService','$http','$routeParams', function (teasService,$http,$routeParams) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = {
        id:2,
        name:'Green Tea',
        price:19.5,
        type:'Green',
        details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
        soldOut:false,
        canPurchase:true,
        image:"03_green-tea"};

    ctrl.getProductById = function () {
        $http.get('/products/' + $routeParams.id)
            .then(function(response){
                ctrl.products = response.data;
            });
    }
    ctrl.getProductById();
}]);


angular.module('teaStore').controller('HomeController', ['teasService','$http','cartService', function (teasService,$http, cartService) {
    var ctrl = this;
//TODO: next section needs to be removed once GET calls are successful
    ctrl.products = teasService.getTeas();

    ctrl.getHomeProducts = function() {
        $http.get('/')
            .then(function(response) {
                ctrl.products = response.data;
            });
    }

    ctrl.addItem = function (item) {
        cartService.addItem(item);
    }

    ctrl.getHomeProducts();
}]);
