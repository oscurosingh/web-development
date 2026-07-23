// The Double Trouble: You are tasked with writing a function that doubles each element in an array. However, there's a catch: if the array contains consecutive duplicate elements, only double one of them.


function doubleUniqueElements(arr) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]===arr[i+1]){
            result.push(arr[i]*2)
            i++
        }
        else {
           result.push(arr[i]*2) 
        }
    }
    return result;}
let arr =[1,2,3,3,4,5]

let double = doubleUniqueElements(arr)
console.log(double);
