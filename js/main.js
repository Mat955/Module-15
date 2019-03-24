'use strict';
var iphone6S = new Phone('Apple', 'ios', 2250, 'silver', 0.1);
var samsungGalaxyS6 = new Phone('Samsung', 'android', 1850, 'black', 0.1);
var onePlusOne = new Phone('OnePlus', 'android', 1700, 'gold', 0.1);

function Phone(brand, system, price, color, getWarrantyCost) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
    this.warranty = price * getWarrantyCost;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ' with system ' + this.system + ', color is ' + this.color + ' and the price is ' + this.price + '.' + 'We have premium Warranty for every model cost for ' + this.brand + ' is ' + this.warranty + '.');
};

iphone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();