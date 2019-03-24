'use strict';
var iphone6S = new Phone('Apple', 'ios', 2250, 'silver');
var samsungGalaxyS6 = new Phone('Samsung', 'android', 1850, 'black');
var onePlusOne = new Phone('OnePlus', 'android', 1700, 'gold');
var getWarrantyCost = new Cost(225, 185, 170);

function Phone(brand, system, price, color) {
    this.brand = brand;
    this.price = price;
    this.color = color;
    this.system = system;
}

function Cost(appleCost, samsungCost, oneplusCost) {
    this.apple = appleCost;
    this.samsung = samsungCost;
    this.oneplus = oneplusCost;
}

Phone.prototype.printInfo = function () {
    console.log('The phone brand is ' + this.brand + ' with system ' + this.system + ', color is ' + this.color + ' and the price is ' + this.price + '.');
};

Cost.prototype.printInfo = function () {
    console.log('Exclusive Warranty for Apple Phones cost is ' + this.apple + ' for samsung you pay only ' + this.samsung + ' and for OnePlus Warranty costb per YEAR is ' + this.oneplus + '.');
};

iphone6S.printInfo();
samsungGalaxyS6.printInfo();
onePlusOne.printInfo();
getWarrantyCost.printInfo();