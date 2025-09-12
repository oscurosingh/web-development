let arr = [1,2,3,4,5,6,7,8,9];
arr[0]=11;
console.log(arr,typeof arr);
console.log(arr.length);
console.log(arr.indexOf(5)); // gives index of first occurence
console.log(`slice (0,4): ${arr.slice(0,4)}`); // does not change original array
console.log(arr.toString(),typeof arr.toString());
console.log(arr.join(" and "));
let numbers = [1, 2, 3, 4, 5]
numbers.splice(1, 2) // removes 2 elements from index 1
console.log(numbers)
numbers.splice(1, 0, 6, 7) // adds 6,7 at index 1
console.log(numbers)