// let keyword --------> 'let' is better for betttere scoping rules
// declare variable with let keyword 

let firstName = "harshit";
firstName = "Mohit";
console.log(firstName);
// Note:
/*
var myVar = 5;
var myVar = 2; // declaring multiple time for same name allowed via 'var' but stricted with 'let'
*/
var myVar = 5;
console.log(myVar);
var myVar = 2;
console.log(myVar);
// block scope vs funtion scope (covered later in this video)