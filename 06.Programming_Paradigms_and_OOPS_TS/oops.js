"use strict";
//creating a Vehicle Parent class... 
class Vehicle {
    constructor(engine, wheel) {
        this.engine = engine;
        this.wheel = wheel;
    }
}
//for now we are going with two child classes from the abstract vehicle class ...
//this extends wala part is inheritance 
class Car extends Vehicle {
    constructor(engine, wheel, isAc, price) {
        super(engine, wheel); //used for passing arguments to parent constructor class :
        // args ->>parms of class b ---> super() -->pased to class A parent class; 
        //SUPER METHOD IS ACCUTALLY THE CONSTRUCTOR OF THE PARENT CLASS 
        this.isAc = isAc,
            this.price = price;
    }
}
//ceating a instance of car which inherits the property of vehical class ...
let ford = new Car("vs4", 8, true, 5700000);
console.log(ford); //Car { engine: 'vs4', wheel: 8, isAc: true, price: 5700000 }
console.log(ford['isAc']);
