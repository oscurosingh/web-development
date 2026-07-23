// The Sum Selector: You are working on a function that should sum all numbers in an array until it encounters a negative number. Write a function that performs this summation. 

function sumUntilNegative(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 0) {
            sum += arr[i]
        }
        else {
            return sum
        }


    }
    return sum
}
let sum1 = sumUntilNegative([1, 2, 3, -1, 4, 5]); // Output: 6 
console.log(sum1);
let sum2 = sumUntilNegative([1, 2, -1, 4, 5]); // Output: 3
console.log(sum2);
let sum3 = sumUntilNegative([1, 2, 3, 4, -5]); // Output: 10 
console.log(sum3);
