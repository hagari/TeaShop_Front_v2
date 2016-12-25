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
              controller: function($http){
                  var ctrl = this;
                  ctrl.getHomePage  = function(){
                      $http.get('/')
                          .then(function(response) {
                              ctrl.products = response.data;
                          });
                  }
              },
              controllerAs: 'homeCtrl'
          })
          .when('/products', {
                  templateUrl: 'templates/products.html',
                  controller: function($http){
                      var ctrl = this;

                      ctrl.getProducts = function() {
                          $http.get('/products')
                              .then(function(response) {
                              ctrl.products = response.data;
                              console.log("inside $http.get('/products')");
                              console.log(response.data.toString());
                          });
                      };

                      ctrl.getProducts();
                  },
                  controllerAs: 'productsCtrl'
              })
          .when('/products/:id', {
              templateUrl: 'productShow.html',
              controller: function($http, $routeParams){
                  var ctrl = this;

                  ctrl.getProductById = function () {
                      $http.get('/products/' + $routeParams.id)
                          .then(function(response){
                              ctrl.products = response.data;
                          });
                  }
                  ctrl.getProductById();
              },
              controllerAs: 'showCtrl'})
          .when('/cart', {
              templateUrl: 'templates/cart.html',
              controller: 'CartController',
              controllerAs: 'cartCtrl'
              })
          .otherwise({redirectTo: '/'});
  }]);

    angular.module('teaStore').controller('StoreController', function() {
        this.products = teas;
  });

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
