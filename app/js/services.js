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
});

angular.module('teaStore').service('cartService', function () {

    var cart = [];
    var savedCard = localStorage.getItem("cart");

    if(!!savedCard){
        cart = angular.fromJson(savedCard);
    }

    this.addItem = function(item){
        cart.push(item);
    }

    this.total = function(){
        return cart.length;
    }

    this.getCart = function () {
        return cart;
    }

    this.save = function(){
        var cartToSave = angular.toJson(cart);
        localStorage.setItem("cart", cartToSave);
    }
})