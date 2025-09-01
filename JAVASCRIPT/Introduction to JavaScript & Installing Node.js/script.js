alert("Hello World")
console.log("code is running...");

var real_name = prompt("what is your name?");
var isTrue = confirm("Are you sure you want to leave this page and blast your computer ")
if(isTrue){
    console.log("Computer is blasting")
}
else{
    console.log('computer is safe ')
}
console.log("Your name is " + real_name);
document.title = "Hey I am good";
document.body.style.backgroundColor = "red";