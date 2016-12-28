angular.module('teaStore').service('teasService', function() {

    var teas = [
        {
            id:1,
            name:'Pure White Tea with Jasmine',
            price:17.5,
            details:'Delicate, premium white tea subtly flavored with natural, sweet Arabian jasmin flowers.',
            soldOut:false,
            canPurchase:true,
            image:"02_white-tea-with-jasmine"},
        {
            id:2,
            name:'Green Tea',
            price:19.5,
            details:'100% pure Green tea carefully chosen from the best highland plantations.',
            soldOut:false,
            canPurchase:true,
            image:"03_green-tea"},
        {
            id:3,
            name:'English Black Tea',
            price:16.5,
            details:'An uplifting blend of zesty Ceylon teas expertly combined with rich, robust Indian teas.',
            soldOut:false,
            canPurchase:true,
            image:"04_earl-grey-tea"
        }
    ]

    this.getTeas = function(){
        return teas;
    }
});

angular.module('teaStore').service('cartService', function () {

    var cart = [];
    var _service = this;
    var savedCart = localStorage.getItem("cart");

    if(!!savedCart){
        cart = angular.fromJson(savedCart);
    }

    this.isItemInCart = function (id) {
        var i = 0, len = cart.length, res = false;
        for (; i < len; i++) {
            if (cart[i].id == id) {
                res = true;
            }
        }
        return res;
    }

    this.createNewCartItem = function (item) {
        var newCartItem = {};
        newCartItem.id = item.id;
        newCartItem.name = item.name;
        newCartItem.price = item.price;
        newCartItem.quantity = 1;

        return newCartItem;
    }

    this.incrementItemQuantity = function (id) {
        var i = 0, len = cart.length;
        for (; i < len; i++) {
            if (cart[i].id == id) {
                cart[i].quantity++;
            }
        }
    }

    this.addItem = function (item) {
     var res = _service.isItemInCart(item.id);
     var newCartItem = _service.createNewCartItem(item);

     if (!res) {
         cart.push(newCartItem);
     } else {
         _service.incrementItemQuantity(item.id)
         }
     }

    this.total = function(){
        var i = 0, len = cart.length, sum = 0;
        for (; i < len; i++) {
            sum += (cart[i].price * cart[i].quantity);
        }

        return sum;
    }

    this.getCart = function () {
        return cart;
    }

    this.saveToLocalStorage = function(){
        var cartToSave = angular.toJson(cart);
        localStorage.setItem("cart", cartToSave);
    }
})