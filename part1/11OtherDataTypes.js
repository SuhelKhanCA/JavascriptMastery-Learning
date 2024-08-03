// undefined 
// null
let un;
console.log(typeof un);

var unn; // Ok
// const unnn; // Error : Missing initializer in const declaration

let myVarr = null;
console.log(myVarr);
console.log(typeof myVarr); // JavaScript Bugggggggggggggggggg
let firstName;

// ===================
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);

let myVariable = null;
console.log(myVariable);
myVariable = "harshit";
console.log(myVariable, typeof myVariable);
console.log(typeof null);
// bug , error 

// BigInt
let myNumber = BigInt(12); // one way
let sameMyNumber = 123n; // other way to declare
console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER);
console.log(myNumber+ sameMyNumber);

// To add BigInt and number use explicit cast