"use strict";
/*
 PROGRAMMING PARADIGMS (SILENT G)...

 in oop there are some famus scientist who have defined some rules ... based on that we should be defining our classes.

we call it solid rule "SOLID"...
SOLID
-SINGLE RESPONSIBLITY PRINCIPLE
-OPEN CLOSE PRINCIPLE
-LISKOV SUBSTITUTION PRINCIPLE
-INTERFACE SEGREGATION PRINCIPLE
-DEPENDENCY INVERSION PRINCIPLE

THE SOLID PRINCIPLES ARE WRITTEN SPECIFICALLY FOR OBJECT ORIENTED PROGRAMMING...

the eg that we'll going to take should be from oop
but we'll going with normal functional programming ...
*/
// 1.S-> SINGLE RESPONSIBLITY PRINCIPLE 
// ONE CLASS HAVE should have ONE RESPONSIBLITY... thats it ! 
class student {
    constructor() {
        //define the keys here 
    }
    register() { }
    sendEmail() { }
    give_sssignments() { }
}
//this class has a lot of responsiblity ...
//what will be the problem ...
//the class will become itself verymuch complex if every
//and only students will send email or other class can send 
//this is not only specific to student it is required for everyOne.
//so dont you think we should declare the sendEmail wla function in global class or it should be a global function  ... 
// 2.O -> Open Close Principle
//code should be open for extension but closed for modification .
class player {
    constructor() {
        //Define the key here
    }
    //swords man 
    slash() { }
    //Archer
    snipe() { }
    //Assasin 
    poison() { }
}
//if we have to add another method inside the class  we  have to further modify the class 
// think like that if there is 100billions lines of code and you have to update the lines ..it will take the years of time
//so for that reason ...How should we structure this class 
class player_ {
    constructor() { }
}
class swordmen extends player {
    constructor() {
        super();
    }
    slash() { }
    ; //this is how we update the class 100%
}
//3.L ->liscov Substitution Principle   
//if you can't replace the child class with the parent class you shouldnot make that inheritance  
class Rectacngle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    setWidth(width) {
        this.width = width;
    }
    setHeight(height) {
        this.height = height;
    }
    area() {
        return this.width * this.height;
    }
}
// can we say that a cube is a rectangle where the height and width are same  heihgt===width rectangle ===square 
class Square extends Rectacngle {
    constructor(width) {
        super(width, width);
    }
    setWidth(width) {
        this.width = width;
        this.height = width;
    }
    setHeight(height) {
        this.height = height;
        this.width = height;
    }
}
const sq = new Square(5);
console.log(sq.area()); //25 
sq.setHeight(6);
console.log(sq.area()); //36 should be the ans
//lets do the same thing with the rectangle...
const rec = new Rectacngle(5, 5); //should line 126 and 136 are same things .....Y
rec.setWidth(6); //after this the rectangle !=squire  
console.log(rec.area()); // 30  
class Player {
    constructor(level, attack) {
        this.level = 1;
        this.attack = 10;
    }
    levelup() {
    }
}
class Enemies {
    constructor(level, attack) {
        this.level = 1;
        this.attack = 10;
    }
    followPlayer() {
    }
}
// previously there was one single interface which were used for all the classes but due to it was nto dynamic ... we'll   used inheritance on interfaces and used diff  sub_interfaces accordingly    ...
//D -> Dependenvy Inversion Principle .... 
//HIGHER LEVEL MODULES SHOULD'T DEPEND ON LOWER LEVEL MODULES THEY SHOULD DEPEND ON ABSTRACTIONS )
//so we'all know about http module in node js =>createserver and we can fetch data get method    ...
//do we know about node-fetch (package) ... 
//so lets assume we dont know the syntex of get method for getting the data  ...  we want to fetch some data in my server not in client in my server ...
// ->first we download node fetch package ... 
//in every phase whenever we need some data  ..we'll use node fetch ... but you'know if nodefetch has some issues like it will hack your data or something like that so we'll think not to use it ... 
//so in such senerio we'll try to switch to http ... 
//node fetch =>>> Http module of fetching the data 
//Problem :  Every where we need to change the code wherever  i used the nodefetch . 
// what is the simplest sollution of this ...
// inside the funcion we implement the node fetch 
//we'll import this particular fun everywhere i need to use . 
//NOW WE HAVE TO CHANGE IN ONLY ONE PLACE IN ORDER TO SWITCH ...
//THATS IS DEPENDENCY INVERSION PRINCIPLE ...
//another eg...
/*

   class Store {
    products :  number;
payment : RazorPay ;  //type is going to be the Razorpay class ...
    constructor(){
   this.products = 100;
   this.payment =new RazorPay();  //here this is how we use ...
}

    }

// think we are building a ecom app where absolutely payment is fundamentally required  we have some built in solution for that ...
     //1. stripe(Global)
     //2.  Razorpay(India)

     class RazorPay{
        constructor(){

        }

        payWithUs(rs :number){
            console.log(rs);
        }
     }
//now if our Razorpay works in india only and if i want to go with stripe globally ... when our app is too big ...



class Stripe{
    constructor(){

    }

    payWithElse(usd:number){
        console.log(usd);
    }
}

//now if i have to change our payment gateway ...
 //but there is some issue in both payment wala classes
//both having diff function name and with diff diff parameters ...


//so what is the solution ... ? => SHOULD OUR STORE DIRECTLY DEPENDS ON THE OUTER DEPENDICIES .... no

*/
class Store {
    constructor() {
        this.products = 100;
    }
}
// DEPENDENCY INVERSION PRINCIPLE OUR...
class RazorPayManager {
    constructor() {
        this.razorpay = new RazorPay();
    }
    pay(rs) {
        this.razorpay.payWithUs(rs);
    }
}
class RazorPay {
    constructor() { }
    payWithUs(inr) {
        console.log(inr);
    }
}
//similarly creating same sort of class for stripe also ... 
class StripePayManager {
    constructor() {
        this.stripepay = new StripePay();
    }
    pay(usd) {
        this.stripepay.payWithst(usd);
    }
}
class StripePay {
    constructor() { }
    payWithst(usd) {
        console.log(usd);
    }
}
// const manager = new RazorPayManager();
// manager.pay(500); // Output: Payment of ₹500 processed with RazorPay.
//now the manager class plays role for independency acchivement and can be used ob baasis of dependency inversion Principle ...
// we'll make 
class payments {
} //and will link the paymentmanager and store together with this  this will be a abstraction layer .
