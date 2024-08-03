// Suggestions
const user1 = {
    firstName : "harshit",
    age: 8,
    about: function(){
        console.log(this.firstName, this.age);
    }   
}


 
user1.about();

// don't do this mistake
// const myFunc = user1.about;
// console.log(myFunc()); // --> udefined undefined


// soln:
const myFunc1 = user1.about.bind(user1);
myFunc1();