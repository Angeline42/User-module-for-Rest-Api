var utility = require('./lib/utility');
var user = require('./lib/utility/models/user');
var otheruser  = require('./lib/utility/models/user');
var cart  = require('./lib/utility/models/cart');
utility.sayHi();
console.log(user.getname());
console.log(otheruser.getname());
user.setName("Emily");
console.log(otheruser.getname());

var prod1 = {name:"Chocolate", price:25.00, quantity:2};
var prod2 = {name:"Bread", price:15.00, quantity:1};
var prod3 = {name:"Butter", price:3.50, quantity:2};
cart.additem(prod1);
cart.additem(prod2);
cart.additem(prod3);
cart.getitem();