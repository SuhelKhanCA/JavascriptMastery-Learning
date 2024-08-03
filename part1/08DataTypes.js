// typeof operator 

// data types (primitive data types)
// 1) string "harhit"
// 2) number 2, 4, 5.6 
// 3) booleans 
// 4) undefined
// 5) null 
// 6) BigInt
// 7) Symbol

let age = 22; 
let firstName = "harshit";

console.log(typeof age); // => number

// 22 -> "22"
// convert number to string. 
age = age + "";
console.log(typeof(age));  // "22"


// convert string to number. 

let myStr = +"34"; // trick
console.log(typeof myStr);

let age2 = "18";
age2 = Number(age2);
console.log(typeof age2);

let un;
console.log(typeof un);

var unn; // Ok
// const unnn; // Error : Missing initializer in const declaration

let myVarr = null;
console.log(myVarr);
console.log(typeof myVarr);