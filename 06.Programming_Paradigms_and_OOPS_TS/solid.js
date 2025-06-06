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
// 
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
//I -> Interface Segrigation Principe  
