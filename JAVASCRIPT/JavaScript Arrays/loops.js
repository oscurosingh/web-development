let a = [1, 93, 5, 6, 88]

// for (let index = 0; index < a.length; index++) {
//     const element = a[index];
//     console.log(element);    
// }


// forEach loop is used to iterate over arrays
// it takes a callback function as an argument
// the callback function takes 3 arguments
// 1. current element
// 2. index of current element
// 3. the array itself

// a.forEach((element, index , arr ) => {
//     console.log(element, index, arr);
// });



let object = {
    a: 1,
    b: 2,
    c: 3
}

for (const key in object) {
    if (Object.prototype.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(`The ${key} of object is ${element}`);
        
    }
}

for (const value of a) {
    console.log(value)
}