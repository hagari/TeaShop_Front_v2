angular.module('teaStore', [
  'store-directives',
  'ngRoute',
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $routeProvider
      .when('/', {
          templateUrl: 'templates/home.html',
          controller: 'HomeController',
          controllerAs: 'homeCtrl'
      })
      .when('/products', {
              templateUrl: 'templates/allProducts.html',
              controller: 'AllProductsController',
              controllerAs: 'productsCtrl'
      })
      .when('/products/:id', {
          templateUrl: 'templates/productShow.html',
          controller: 'ProductShowController',
          controllerAs: 'showCtrl'
      })
      .when('/cart', {
          templateUrl: 'templates/cart.html',
          controller: 'CartController',
          controllerAs: 'cartCtrl'
      })
      .otherwise({redirectTo: '/'});
}]);








