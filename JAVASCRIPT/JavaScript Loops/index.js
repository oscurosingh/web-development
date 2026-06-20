console.log("I am a tutorial on Loops")
console.log("There are 5 types of loops in JavaScript")
console.log("1. For Loop 2. For In Loop 3. For Of Loop 4. While Loop 5. Do-While Loop")
let a = 1;
console.log("1. For Loop");
for (let i = 0; i<10; i++){
    console.log(i+1)
}
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
console.log("2. For In Loop");
for (key in obj){
    console.log(key)
}
console.log("3. For Of Loop");
for (const c of "shubham"){
    console.log(c)
}
console.log("4. While Loop");
let i =0;
while (i<10){
    console.log(i);
    i++;
}
console.log("5. Do-While Loop");
i =0 ;
do{
    console.log(i);
    i++;
}while(i<10);