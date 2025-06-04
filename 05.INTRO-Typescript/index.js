"use strict";
//IMPORTANCE OF TYPESCRIPT
// js doesnt have any type error...
// ts has type error  ... 
// TS IS NOT A PROGRAMMING LANGUAGE IT IS BUILT ON JS TO OVERCOME SOME ISSUES AND TO ADD SOME FEATURES ON IT (world popular language )
//Declaring a Variable 
let a = 10;
let b = "Masai";
let c = false;
// c = 10 ; //you can not reassing the c with value where value != declared datatype. 
//Arrays ...
let d = [1, 2, 3, 4]; //array declaration and initilization ...
//Strings ...
let e = ["1", "2"];
//Tuples(Not part of JS).....
//RGB(100,200,10) 
let RGB = [100, 200, 10]; //tuples -> limiting the number of elements that array can have; 
//if we want n=80  in that case array should be best choice;   
//tuples is only for possible count of element . eg 3/4/5 elements Only.... 
let code = [100, 200, "10"]; //diff type of element is allowed in   
// any thing that can be done in js can not be done in js that is also the limitations of the ts ... ...
// seneario if you have to build a app for windows(microsoft) you have to use c#(built by microsoft) and  TS which is also built by microsoft thats why 
// a lot of syntex of ts is comming from c sharp . 
//enum (ts newly introduce that things)....
var Roles;
(function (Roles) {
    Roles[Roles["super_admin"] = 0] = "super_admin";
    Roles[Roles["admin"] = 1] = "admin";
    Roles[Roles["user"] = 2] = "user";
})(Roles || (Roles = {}));
console.log(Roles.admin);
// what is the usecase of this 
// enum is used as object can used for defining or storing different roles with values but there is one usecase
// like object we can not change the values
//whenever we want to define some sort of object that we dont want ever to change ...
//can also define names for all fields.. 
var Roles1;
(function (Roles1) {
    Roles1["super_admin"] = "Super Admin";
    Roles1["admin"] = "Admin";
    Roles1["user"] = "User";
    Roles1["sales"] = "Sales";
})(Roles1 || (Roles1 = {}));
//we never want to change the values .... if we want then we have to use object ..... 
console.log(Roles1.admin);
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
const greet = "Good Morning";
// whenever we want to use a value for multiple time we store that value in a variable and use that variable multiple Time.
console.log(greet, "Nrupul");
