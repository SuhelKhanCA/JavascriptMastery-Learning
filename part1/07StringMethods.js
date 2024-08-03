// NOTE: Strings are immutable
// trim() --> to remove space between string
// toUpperCase() --> self expln
// toLowerCase() --> self expln
// slice() --> remove the char in string

let firstName = "harshit  ";

console.log(firstName.length);
firstName = firstName.trim(); // "harshit  "
console.log(firstName)
console.log(firstName.length);
firstName = firstName.toUpperCase();
console.log(firstName);
firstName = firstName.toLowerCase();

// for slicing
// start index
// end index
let str1 = firstName.slice(0, 4); // 4th char not included
console.log(str1);
let newString = firstName.slice(1); // hars
console.log(newString);