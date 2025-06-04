//we are going to define a user type

type User ={
    name : string ; 
    age : number ; 
    email: string ;
    phone : number;
    password : string ; 
} ; 

//BY DEFAULT IN CASE OF TYPE SCRIPT EVERY KEY THAT WE DEFINE  IN TYPE VARIABLE IS GOING TO BE  "REQUIRED"  IS GOING TO BE IMPORTANT .... 
const u1 : User ={
name: "niket",
age : 22,
email:"niket@gmail.com",
phone : 43434,                //comment any field and see required error 
password : "232332"
}

// if dont have to put any  value (eg remove phone no wla field) ...

//we are getting big red error s that means every field we defined in type user is required just like required:true in mongodb... 

//BY DEFAULT IN CASE OF TYPE SCRIPT EVERY KEY THAT WE DEFINE  IN TYPE VARIABLE IS GOING TO BE  "REQUIRED"  IS GOING TO BE IMPORTANT .... 
//in case of mongo db  required is false by defaule but here it is true ...




// lets make any key optional  ...( just put a que mark befor the type in type variable)




//OPTIONAL TYPES...... 
type actor ={
    name : string ; 
    age : number ; 
    email: string ;
    phone?: number;        //see ? telling that requied is false  (OPTIONAL TYPES) 
    password : string ; 
} ; 

//BY DEFAULT IN CASE OF TYPE SCRIPT EVERY KEY THAT WE DEFINE  IN TYPE VARIABLE IS GOING TO BE  "REQUIRED"  IS GOING TO BE IMPORTANT .... 
const a1 : actor ={
name: "niket",
age : 22,
email:"niket@gmail.com",
// phone : 43434,          //comment any field and u'll not see required error
password : "232332"
}



// a type can be optional but it doesnt mean u can put any value/any type of value  in the data 
// eg ...phone :"dfa" (illegal)




// for one user we are using object ...but what if we have to store many Users 
// => array of objects .....
let users :User[] = [];   //type ->  User(name of type alias) array[]  ...hahah....   this is how we define array of objects hahah... 








