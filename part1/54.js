// callback functions 

function myFunc2(name){
    console.log("inside my func 2")
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    callback("harshit");
    console.log("hello there I am a func and I can..", )
    
}


myFunc(myFunc2); // passing a function as an argument