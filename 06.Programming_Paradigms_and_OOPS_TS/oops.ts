//creating a Vehicle Parent class... 
class  Vehicle{
     engine :string ; 
     wheel : number ; 
     constructor ( engine :string , 
     wheel : number  ){
      this.engine= engine; 
      this.wheel = wheel; 
     }
}


//for now we are going with two child classes from the abstract vehicle class ...
//this extends wala part is inheritance 

class Car extends Vehicle{   

    isAc :boolean ; 
    price :number; 

    constructor( engine :string , 
     wheel : number , isAc :boolean , 
    price :number ){
    
         super(engine,wheel); //used for passing arguments to parent constructor class :
         // args ->>parms of class b ---> super() -->pased to class A parent class; 
         //SUPER METHOD IS ACCUTALLY THE CONSTRUCTOR OF THE PARENT CLASS 
         this.isAc=isAc,
         this.price=price 

    }

}

//ceating a instance of car which inherits the property of vehical class ...



let ford = new Car("vs4",8,true,5700000) ; 

console.log(ford); //Car { engine: 'vs4', wheel: 8, isAc: true, price: 5700000 }
console.log(ford['isAc']); //true  this property extended from vehical class .





