"use strict";
/*
This concept is called Type Alias in TypeScript.

type GenderType = "Male" | "Female" | "Other";
→ This defines a custom type (alias) that restricts values to only these three strings .
*/
//UNIONS =>   '|' using unions we are defines what are the types that are going to be of a variable .
let gender = "Female";
function isFemale(a) {
    return a === "Female";
}
isFemale(gender);
// Other_Usecase of unions:
let z = "p";
//   z=34;   // fine 
//   z=true; //this is not fine error 
//unions are similar to logical or operator in js  
// ||(JS + TS) and |(TS)  
//unions are only used to compare type values in ts 
//we use logical or operator to compare data values ;
if (z === "p" || z === "10") {
    console.log("OK");
}
//if statement is part of js also when i mean that single pipe (union )is part of ts is mean only part of ts .. and when we use || operator it means it is both used at js || ts .
