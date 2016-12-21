
(function() {
  angular.module('teaStore', [
      'store-directives',
      'ngRoute'
  ]).
  config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.when('/', {templateUrl: 'products.html'})
                    .when('/products', {templateUrl: 'products.html', controller: 'ProductsController', controllerAs: 'productsCtrl'})
                    .when('/products/:id', {templateUrl: 'product.html', controller: 'ProductsShowController', controllerAs: 'showCtrl'})
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
        details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
        soldOut:false,
        canPurchase:true,
        image:"02_white-tea-with-jasmine"},
      {
          id:2,
          name:'Green Tea',
          price:19.5,
          details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
          soldOut:false,
          canPurchase:true,
          image:"03_green-tea"},
]
})();
