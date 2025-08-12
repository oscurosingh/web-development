console.log("Hello I am conditional tutorial")
let age = 18;

let grace = 2;
age += grace
console.log(age)
console.log(age + grace)
console.log(age - grace)
console.log(age * grace)
console.log(age / grace)
console.log(age ** grace)
console.log(age % grace)


/*
I am a 
multiline 
comment
*/

if (age >=18){
    console.log('you can vote')
}
else if (age==0){
    console.log('you are not born yet')
}
else{
    console.log('you cannot vote')
}


// turnary operator
let canVote = (age >= 18) ? 'you can vote' : 'you cannot vote';
console.log(canVote)