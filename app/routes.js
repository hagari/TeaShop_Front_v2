/**
 * Created by hagar on 12/21/2016.
 */
angular.module('TeaStore').config(function ($routeProvider) {
    $routeProvider.when('/', {templateUrl: 'products.html'}).otherwise({redirectTo: '/'})
});