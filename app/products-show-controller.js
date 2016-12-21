/**
 * Created by hagar on 12/21/2016.
 */
angular.module('teaStore').controller('ProductsShowController', function ($http, $routeParams) {
   var controller = this;
   $http({method: 'GET', url:'/products/' + $routeParams.id}).success(function(data) {
       controller.product = data;
   });
});
