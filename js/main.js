'use strict';
var iphone6S = new Phone('Apple', 'ios', 2250, 'silver');
var samsungGalaxyS6 = new Phone('Samsung', 'android', 1850, 'black');
var onePlusOne = new Phone('OnePlus', 'android', 1700, 'gold');

function Phone(brand, system, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
}

Phone.prototype.getWarrantyCost = function() {
    return this.price * 0.1;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ' with system ' + this.system + ', color is ' + this.color + ' and the price is ' + this.price + '.');
    console.log('We offer you 5 years warranty for only: ' + this.getWarrantyCost());
 };

iphone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();