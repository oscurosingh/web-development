// Write a program to calculate factorial of a number using reduce and using for loops


        // 6! = 6*5*4*3*2*1

let num = 6;
let factorial = 1;
for (let i = num; i >= 1; i--) {
    console.log(i);
    factorial *= i;    
}
console.log(factorial); // 720

// now using reduce
let arr = [1,2,3,4,5,6];
let factorial2 = arr.reduce((accumulator, currentValue) => accumulator * currentValue, 1);// 1 is the initial value of accumulator
console.log(factorial2); // 720