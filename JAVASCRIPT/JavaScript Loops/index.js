console.log("I am a tutorial on Loops")
let a = 1;
console.log("For Loop");
for (let i = 0; i<100; i++){
    console.log(i+1)
}
let obj = {
    name: "Harry",
    role: "Programmer",
    company: "CodeWithHarry AI"
}
console.log("For In Loop");
for (key in obj){
    console.log(key)
}
console.log("For Of Loop");
for (const c of "shubham"){
    console.log(c)
}
console.log("While Loop");
let i =0;
while (i<10){
    console.log(i);
    i++;
}
console.log("Do-While Loop");
i =0 ;
do{
    console.log(i);
    i++;
}while(i<10);