function greeting(name){
    console.log("hello "+ name)
}
greeting("boki")

function add(a,b,c=0){
    return a+b+c;
}
console.log(add(5, 10));

const multiply =(a,b)=>{
    return a*b;
}
console.log(multiply(5, 10));


// Arrow Functions
// Arrow functions were introduced in ES6.

// Arrow functions allow us to write shorter function syntax:


// Before Arrow:
// Function to compute the product of a and b

let myFunction = function(a, b) {return a * b};
console.log( myFunction(4, 3) );

// With Arrow
let myArrowFunction = (a, b) => a * b;
console.log( myArrowFunction(4, 3) );

