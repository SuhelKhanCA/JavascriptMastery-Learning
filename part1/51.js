// default parameters 

// function addTwo(a,b){
//     if(typeof b ==="undefined"){
//         b = 0;
//     }
//     return a+b;
// }

function addTwo(a,b=0){ // default parameter b=0
    return a+b;
}

console.log(addTwo(3))
const ans = addTwo(4, 8);
console.log(ans);