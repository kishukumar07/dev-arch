"use strict";
// POLYMORPHISM ... 
// there is a dog and a bird they have movement() but the have movement in their own way like dog moves by walking while bird moves by fling .
//there can be some classes which are of same name .. but there implementations can be different  
class Vehicle_ {
    constructor(engine, wheel) {
        this.engine = engine;
        this.wheel = wheel;
    }
    startEngine() {
        console.log(this.engine, "started");
        //totally new complex code .... 
    }
}
//inheritance  
class Truck extends Vehicle_ {
    constructor(engine, wheel, no_of_seats, ticket) {
        super(engine, wheel);
        this.no_of_seats = no_of_seats,
            this.ticket = ticket;
    }
    startEngine() {
        console.log(this.engine + "Started343"); //totally new complex code .... 
    }
}
//does polymorphism has any issues ... 
//it is just a funcion  with the same name  but with diff implementation in parent vs child class THAT'S IT...
let ashokaTruck = new Truck("eng2", 36, 3, 1400);
console.log(ashokaTruck); //this will have diff implementations of that fun  
console.log(ashokaTruck.startEngine());
//EXPLORE WHAT ARE THE LIMITATIONS OF POLYMORPHISM ....
//ENCAPSULATION  ....
let id_counter = 1;
class Students {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id_counter;
        id_counter++; //auto increment 
    }
}
const s = new Students("a", 20, 458232);
//can you do this ...?
s.name = "abc";
s.age = 23;
//but would you allow user to change there id ...
// s.id=3434343;  //should it be allowed ... we make the this privet key 
let id_counter2 = 1;
class Instructor {
    constructor(name, age, id) {
        this.name = name;
        this.age = age;
        this.id = id_counter;
        id_counter2++; //auto increment 
    }
    get ID() {
        return this.id; //id is acessable within the class 
    }
    set setID(id) {
        this.id = id; //id is acessable within the class
    }
}
const ram = new Instructor("ram", 43, 343);
// ram.id =10 ; //banned cause of privet keyword
// let id = ram.id //banned cause of privet keyword ..
//with getter we can acess id 
console.log(ram.ID); //geting the privet field of obj
//getter can't be used for set the value for this we have setters.
ram.setID = 23;
console.log(ram);
console.log(ram.ID)//getter 









