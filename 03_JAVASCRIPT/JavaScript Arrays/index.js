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
console.log(numbers.reverse()) // reverses the array
console.log(numbers.sort()) // sorts the array in ascending order (lexicographically)
console.log(numbers.sort((a,b) => a-b)) // sorts the array in ascending order (numerically)
console.log(numbers.sort((a,b) => b-a)) // sorts the array in descending order (numerically)

numbers.push(8) // adds 8 at the end of the array
console.log(numbers)
numbers.unshift(0) // adds 0 at the beginning of the array
console.log(numbers)
numbers.pop() // removes the last element of the array
console.log(numbers)
numbers.shift() // removes the first element of the array
console.log(numbers)

delete numbers[2] // deletes the element at index 2 but does not change the length of the array
console.log(numbers, numbers.length)