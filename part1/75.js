// arrow functions 

const user1 = {
    firstName : "harshit",
    age: 8,
    about: () => { // arrow 'fxn' this surrounding se leta h
        console.log(this.firstName, this.age);
    }   
}

// user1.about(); XX
// user1.about(user1); XX