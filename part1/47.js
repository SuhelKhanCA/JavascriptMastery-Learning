// hoisting 

hello(); // ok

function hello(){
    console.log("hello world");
}

// hi(); // Error: Cannot access 'hi' before initialization
let hi = function(){
    console.log("Hi there");
}
hi();
// const hello = "hello world";
// console.log(hello);

console.log(hell);
var hell = "Hello World"