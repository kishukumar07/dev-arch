//IMPORTANCE OF TYPESCRIPT
// js doesnt have any type error...
// ts has type error  ... 

// TS IS NOT A PROGRAMMING LANGUAGE IT IS BUILT ON JS TO OVERCOME SOME ISSUES AND TO ADD SOME FEATURES ON IT (world popular language )


//Declaring a Variable 
let a: number = 10;
let b: String = "Masai";
let c: boolean = false;
// c = 10 ; //you can not reassing the c with value where value != declared datatype. 


//Arrays ...
let d: number[] = [1, 2, 3, 4]; //array declaration and initilization ...



//Strings ...
let e: string[] = ["1", "2"];




//Tuples(Not part of JS).....
//RGB(100,200,10) 
let RGB: [number, number, number] = [100, 200, 10]; //tuples -> limiting the number of elements that array can have; 

//if we want n=80  in that case array should be best choice;   
//tuples is only for possible count of element . eg 3/4/5 elements Only.... 
let code: [number, number, string] = [100, 200, "10"] //diff type of element is allowed in   






// any thing that can be done in js can not be done in js that is also the limitations of the ts ... ...

// seneario if you have to build a app for windows(microsoft) you have to use c#(built by microsoft) and  TS which is also built by microsoft thats why 
// a lot of syntex of ts is comming from c sharp . 







//enum (ts newly introduce that things)....
enum Roles {
    super_admin,  //value  is 0
    admin,        //values is 1
    user,         //values is 2 
}

console.log(Roles.admin);

// what is the usecase of this 
// enum is used as object can used for defining or storing different roles with values but there is one usecase
// like object we can not change the values
//whenever we want to define some sort of object that we dont want ever to change ...


 //can also define names for all fields.. 
enum Roles1 {
    super_admin ="Super Admin",  //value  is 0
    admin = "Admin",        //values is 1
    user =  "User",         //values is 2 
    sales = "Sales" ,
}
//we never want to change the values .... if we want then we have to use object ..... 
console.log(Roles1.admin) ; 
//we can't reassign the roles like object 
// Roles1.admin= "niket" ; this will be a error (not allowed); 


/* 

const obj ={};
obj.name ="kdf"   ~modification 
this is allowed in js...Y
but this is not allowed 
jjj={
age =3 ,           ~ re assignment 
} 

in enum both modification and re assignment are not allowed.

*/




// #getting rid of repeatation of object ...

console.log("Good morning Nrupul");
console.log("Good morning Yogesh");
console.log("Good morning prateek");
//we are repeating some code ... if i dont want to repeat this code 
//we can do this in function 



const greet =  "Good Morning"; 
// whenever we want to use a value for multiple time we store that value in a variable and use that variable multiple Time.

console.log(greet, "Nrupul");





//defining OBJECT  is just similar like .... defining a array in ts. 

let f: {                
    name: string; 
    age: number;        //type 
    isMarried: boolean;
} = {       
    name: "Niket",
    age: 22,           //obj 
    isMarried: false,
};




// rather than copy the whole code we store and use in variable again and again ... in order to  defining the another object we dont need to repeate the type wala code again and again which is not allowed in js ... 


/*
type = {  
    name: string;
    age: number;
    isMarried: boolean;
}
*/


//we are trying to store typscript type inside a js variable ....is this applicable ...  NO



//TYPE ALIAS ... WE CAN STORE ANY JS TYPES IN THE  TYPE ALIAS .
                  //it's like a variable only but it only store types in ts not values ...
type obj = {  
    name: string;
    age: number;
    isMarried: boolean;
}

//now rather than defining the same structure again and again ...we can directly do this ...

let g : obj = {
    name : "niket",
    age:22,
    isMarried:false,
}





































































