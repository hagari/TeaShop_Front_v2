(function() {

  angular.module('teaStore', [
      'store-directives',
      'ngRoute',
      'cart'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
    //  $locationProvider.hashPrefix('!');

      $routeProvider
          .when('/', {
              templateUrl: 'templates/home.html',
              controller: 'HomeController',
              controllerAs: 'homeCtrl'
          })
          .when('/products', {
                  templateUrl: 'templates/products.html',
                  controller: 'ProductsController',
                  controllerAs: 'productsCtrl'
              })
          .when('/products/:id', {
              templateUrl: 'productShow.html',
              controller: 'ProductShowController',
              controllerAs: 'showCtrl'})
          .when('/cart', {
              templateUrl: 'templates/cart.html',
              controller: 'CartController',
              controllerAs: 'cartCtrl'
              })
          .otherwise({redirectTo: '/'});
  }]);

    angular.module('teaStore').service('teasService', function() {
        var teas = [
            {
                id:1,
                name:'White Tea',
                price:17.5,
                type:'White',
                details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
                soldOut:false,
                canPurchase:true,
                image:"02_white-tea-with-jasmine"},
            {
                id:2,
                name:'Green Tea',
                price:19.5,
                type:'Green',
                details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
                soldOut:false,
                canPurchase:true,
                image:"03_green-tea"},
        ]

        this.getTeas = function(){
            return teas;
        }

        this.addTea = function(){
            //..
        }

    });

    angular.module('teaStore').controller('StoreController', function() {
        this.products = teas;
  });

    angular.module('teaStore').controller('HomeController', ['teasService','$http', function (teasService,$http) {
        var ctrl = this;

        ctrl.products = teasService.getTeas();
        ctrl.getHomeProducts = function() {
            $http.get('/')
                .then(function(response) {
                    ctrl.products = response.data;
                });
        }

        ctrl.getHomeProducts();
    }]);

    angular.module('teaStore').controller('ProductsController', ['teasService','$http', function (teasService,$http) {
        var ctrl = this;

        ctrl.products = teasService.getTeas();
        ctrl.getProducts = function() {
            $http.get('/products')
                .then(function(response) {
                    ctrl.products = response.data;
                });
        };

        ctrl.getProducts();
    }]);

    angular.module('teaStore').controller('ProductShowController', ['teasService','$http','$routeParams', function (teasService,$http,$routeParams) {
        var ctrl = this;

        ctrl.products = teasService.getTeas();

        ctrl.getProductById = function () {
            $http.get('/products/' + $routeParams.id)
                .then(function(response){
                    ctrl.products = response.data;
                });
        }
        ctrl.getProductById();
    }]);


  var teas = [
        {
            id:1,
            name:'White Tea',
            price:17.5,
            type:'White',
            details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
            soldOut:false,
            canPurchase:true,
            image:"02_white-tea-with-jasmine"},
        {
            id:2,
            name:'Green Tea',
            price:19.5,
            type:'Green',
            details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
            soldOut:false,
            canPurchase:true,
            image:"03_green-tea"},
    ]
  var cart = [];
})();
