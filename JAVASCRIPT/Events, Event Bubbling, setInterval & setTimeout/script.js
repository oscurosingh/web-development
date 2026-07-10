function getRandomColor() {
  let val1 = Math.floor(Math.random() * 256);
  let val2 = Math.floor(Math.random() * 256);
  let val3 = Math.floor(Math.random() * 256);
  return `rgb(${val1}, ${val2}, ${val3})`;
}

const button = document.getElementById("btn");
const box = document.querySelector(".box");
const container = document.querySelector(".container");

button.addEventListener("click", () => {
  button.style.backgroundColor = getRandomColor();
  button.style.color = "white";
});

button.addEventListener("mouseover", () => {
  button.style.transform = "scale(1.05)";
});

button.addEventListener("mouseout", () => {
  button.style.transform = "scale(1)";
});


box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "lightblue";
  box.textContent = "Mouse entered the box";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "#f0f0f0";
  box.textContent = "hey im box";
});

container.addEventListener("click", (e) => {
  console.log("Container clicked:", e.target);
});

document.addEventListener("keydown", (e) => {
  console.log("Key pressed:", e.key);
  if (e.key === "Enter") {
    box.textContent = "You pressed Enter";
  }
});
document.addEventListener("contextmenu", ()=>{
    alert("Dont hack us by Right click Please")
}) 