/*
This concept is called Type Alias in TypeScript.

type GenderType = "Male" | "Female" | "Other";
→ This defines a custom type (alias) that restricts values to only these three strings .
*/


type GenderType = "Male"|"Female"|"Other" ;   

//UNIONS =>   '|' using unions we are defines what are the types that are going to be of a variable .

let gender:GenderType = "Female"; 

function isFemale(a:GenderType){
    return a==="Female" ; 
}

isFemale(gender) ; 

// Other_Usecase of unions:
 let  z: string | number = "fd"; 
  z=34; 
//   z=true; //this is not fine error 

//unions are similar to logical or operator in js  
// ||(JS) and |(TS) 






























