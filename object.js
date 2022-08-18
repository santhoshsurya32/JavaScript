let iphone = {
  name: "iphonepro",
  color: "white",
  price: 90000,
};
console.log(iphone.color, iphone.name, iphone.price, typeof iphone);

//object with functions

let samsung = {
  name: "galaxym40",
  price: 14000,
  color: "blue",
  getDiscountedPrice: function () {
    let discountedPrice = this.price - this.price * 0.2;
    return discountedPrice;
  },
};
console.log(samsung, samsung.getDiscountedPrice());

//listed objects
let rajini = {
  name: "sivaji",
  age: 75,
  getRajini: function () {
    console.log(this);
  },
  daughters: {
    name: "Aiswarya",
    spouse: "Dhanush",
  },
};
console.log(rajini, rajini.getRajini());
