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
        console.log(this.engine + "Started343");   //totally new complex code .... 
    }
    //in both the parent and child class the method name are same ...but there implementations are not  same  ...there implementations are totally different .


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
    name: string;
    age: number;
    id: number;
    constructor(name: string, age: number, id: number) {
        this.name = name;
        this.age = age;
        this.id = id_counter;
        id_counter++;   //auto increment 
    }

}


const s = new Students("a", 20, 458232);

//can you do this ...?
s.name = "abc";
s.age = 23;

//but would you allow user to change there id ...
// s.id=3434343;  //should it be allowed ... we make the this privet key 


/*


let id_counter2=1; 

class Instructor {
    name :string ;  
    age :number ;
 private id :number ;    //this id is only acessable iside this class only ...  
     constructor(name:string ,age:number){
        this.name =name;  
        this.age =age; 
        this.id =id_counter ; 
        id_counter2++;   //auto increment 
     }

 get ID(){   //getter 
    return this.id;    //id is acessable within the class 
 }

set setID(id:number){    //setter 
    this.id = id ;       //id is acessable within the class
}



}


const ram= new Instructor("ram",43); 
// ram.id =10 ; //banned cause of privet keyword
// let id = ram.id //banned cause of privet keyword ..

//with getter we can acess id 
console.log(ram.ID);  //geting the privet field of obj
//getter cant be used for set the value for this we have setters.
 ram.setID =23; 
 console.log(ram); 



*/










//there was one problem  of counter variable  ..lets get rid of that ... 
//creating counter outside of the class and traking the user of class inside  ...dont you think is too odd ...  
//so how to solve that 

/*
let id_counter2=1; 

class Instructor {
    name :string ;  
    age :number ;
 private id :number ;    //this id is only acessable iside this class only ...  
 a:number; 
     constructor(name:string ,age:number){
        this.name =name;  
        this.age =age; 
        this.id =id_counter ; 
        id_counter2++;   //auto increment 
        this.a=1; 
     }

 get ID(){   //getter 
    return this.id;    //id is acessable within the class 
 }

set setID(id:number){    //setter 
    this.id = id ;       //id is acessable within the class
}

}


const ram= new Instructor("ram",43); 
ram.a = 10; 
console.log(ram.a); //10


const  t= new Instructor("b",30); 
console.log(t.a);  //it will be 1  ::>> a's default value

// dont you think ram.a and t.a both are totally diffrent  things... 

//i want a single value even if i change my instance of class ..the variable should not reset ... 

//this is the thing that the id_counter variable is solving ...the value of id_counter will be same even if new instance creation of object is created.

//we have to  make the same behaviour but witout using global variable  

*/

// and for that we have a new keyword  "static".. 



class Instructor {
    name: string;
    age: number;
    private id: number;
    a: number;
    static id_counter:number = 1;  //here static keyword  
    constructor(name: string,
        age: number) {

        this.name = name;
        this.age = age;
        this.a = 1;
        this.id = Instructor.id_counter;  //at default id is static id_counter .. you cannot write this.id_counter (err cause this represnts the instance of my class ) class.static wla variable 
        Instructor.id_counter++;  
    }

    get ID() {
        return this.id;
    }

    set setID(id: number) {
        this.id = id;
    }

}


const disha =new Instructor("disha",21); 
const niket =new Instructor("niket",22); 

//here both will have same id value =1  at first 
console.log(disha.ID,niket.ID); 
disha.setID=34; 
console.log(disha.ID, niket.ID); 













