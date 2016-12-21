
(function() {
  var app = angular.module('teaStore', [
      'store-directives',
  ]);



  app.controller('StoreController', function() {
    this.products = teas;
  });




  var teas = [
      {
        name:'White Tea',
        price:17.5,
        details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
        soldOut:false,
        canPurchase:true,
        image:"02_white-tea-with-jasmine"},
      {
          name:'Green Tea',
          price:19.5,
          details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
          soldOut:false,
          canPurchase:true,
          image:"03_green-tea"},
]
})();
