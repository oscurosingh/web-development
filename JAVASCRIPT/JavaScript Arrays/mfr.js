let arr = [1, 13, 5 ,7, 11];
let newarr = []; 
for (let index = 0; index < arr.length; index++) {
    const element = arr[index]; 
    newarr.push(element*element);
}

let newarr2 = arr.map((element) => element*element);
console.log(newarr);
console.log(newarr2);

const isEven = (element) => {
    return element%2===0;
}
let newarr3 = arr.filter(isEven);
console.log(newarr3);

let arr2 = [1,2,3,4,5,6];
let sum = arr2.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(sum);