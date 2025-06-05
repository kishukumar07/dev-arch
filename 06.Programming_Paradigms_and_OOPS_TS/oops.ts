//creating a Vehicle Parent class... 
abstract class Vehicle {
    engine: string;
    wheel: number;
    constructor(engine: string,
        wheel: number) {
        this.engine = engine;
        this.wheel = wheel;
    }
}


//for now we are going with two child classes from the abstract vehicle class ...
//this extends wala part is inheritance 

class Car extends Vehicle {

    isAc: boolean;
    price: number;

    constructor(engine: string,
        wheel: number, isAc: boolean,
        price: number) {

        super(engine, wheel); //used for passing arguments to parent constructor class :
        // args ->>parms of class b ---> super() -->pased to class A parent class; 
        //SUPER METHOD IS ACCUTALLY THE CONSTRUCTOR OF THE PARENT CLASS 
        this.isAc = isAc,
            this.price = price

    }

}

//ceating a instance of car which inherits the property of vehical class ...



let ford = new Car("vs4", 8, true, 5700000);

console.log(ford); //Car { engine: 'vs4', wheel: 8, isAc: true, price: 5700000 }
console.log(ford['isAc']); //true  this property extended from vehical class .





//simlarly lets creat a bus class 

class Bus extends Vehicle {  //extends
    no_of_seats: number;   
    ticket: number;

    constructor(engine: string,
        wheel: number, no_of_seats: number, ticket: number) {  //constructor 

        super(engine      //super 
            , wheel)
     this.no_of_seats= no_of_seats,  
     this.ticket = ticket 
    }
}


 
//creatig instance of Bus 
let shreeRamRath = new Bus("engine4.3" , 16, 56, 100); 

console.log(shreeRamRath.ticket);  


//can i create a instance of Vehical class itself . 
  
 
// const v = new Vehicle("xyzengine",45)  //commented 

//but dont you think buying only engine and wheel is worthit 
//dont you think we have to restrict the object creation for this vehical class ....
//the line 75 should not be allowed !!


//we need somehow block instance creation of parent call directly like line no 75 and it should not be block instance creation with super method inside the cons-fun of child class . like line no   25/57.... 

// here comes the abstract keyword which make the parent class allow to use its instance only from child class not directly accessable ... 

//real life eg : you don't need to know how the engine works to operate the vehicle, you just focus on the steering, brakes, and accelerator.





































