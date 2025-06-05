// POLYMORPHISM ... 

// there is a dog and a bird they have movement() but the have movement in their own way like dog moves by walking while bird moves by fling .

//there can be some classes which are of same name .. but there implementations can be different  

abstract class Vehicle_ {
    engine: string;
    wheel: number;
    constructor(engine: string,
        wheel: number) {
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

    no_of_seats: number;
    ticket: number;

    constructor(engine: string,
        wheel: number, no_of_seats: number,
        ticket: number) {
        super(engine, wheel);

        this.no_of_seats = no_of_seats,
            this.ticket = ticket
    }


startEngine(): void {
    alert(this.engine+"Started");   //totally new complex code .... 
} 
    //in both the parent and child class the method name are same ...but there implementations are not  same  ...there implementations are totally different .


}


//does polymorphism has any issues ... 
//it is just a funcion  with the same name  but with diff implementation in parent vs child class THAT'S IT...









