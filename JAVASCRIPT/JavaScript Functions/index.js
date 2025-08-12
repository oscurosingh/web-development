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