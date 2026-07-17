let random = Math.random();
console.log(random);

let a = prompt("Enter First number :")
let b = prompt("Enter Operator :")
let c = prompt("Enter Second number :")


let obj = {
    "+": "-",
    "*": "+",
    "-": "/",
    "/": "**",
}

if (random>0.1) {
    console.log(`The Result is ${a} ${b} ${c}`)
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`)
}
else {
     b = obj[b]
    alert(`The result is ${eval(`${a} ${b} ${c}`)}`) 
    }