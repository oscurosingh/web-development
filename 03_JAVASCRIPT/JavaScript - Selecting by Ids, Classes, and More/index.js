document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundColor = "green";
}) 
document.querySelectorAll(".box").forEach(e =>{
    e.style.color = "white";
})
document.querySelectorAll(".box").forEach(e =>{
    e.style.fontSize = "20px";
})  

// more  on selecting elements in JavaScript
document.getElementById("box3").style.backgroundColor = "black";// selecting by id
document.getElementsByClassName("box")[1].style.backgroundColor = "red";// selecting by class name

document.getElementsByTagName("div")[4].style.backgroundColor = "blue";// selecting by tag name

document.querySelector(".box").style.backgroundColor = "yellow";// selecting by css selector ,it will select the first element with class box