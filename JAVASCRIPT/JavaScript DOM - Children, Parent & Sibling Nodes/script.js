const container = document.querySelector('.container');
const firstBox = document.querySelector('.box');
const secondBox = firstBox?.nextElementSibling; // here ? mark is used to check if firstBox exists before trying to access nextElementSibling

console.log('document.body.firstChild:', document.body.firstChild);
console.log('document.body.firstElementChild:', document.body.firstElementChild);

console.log('container.childNodes:', container.childNodes);
console.log('container.children:', container.children);

console.log('container.firstChild:', container.firstChild);
console.log('container.firstElementChild:', container.firstElementChild);
console.log('container.lastChild:', container.lastChild);
console.log('container.lastElementChild:', container.lastElementChild);

console.log('firstBox.parentNode:', firstBox.parentNode);
console.log('firstBox.parentElement:', firstBox.parentElement);

console.log('firstBox.nextSibling:', firstBox.nextSibling);
console.log('firstBox.nextElementSibling:', firstBox.nextElementSibling);
console.log('firstBox.previousSibling:', firstBox.previousSibling);
console.log('firstBox.previousElementSibling:', firstBox.previousElementSibling);

if (firstBox) {
    firstBox.style.backgroundColor = 'lightgreen';
}

if (secondBox) {
    secondBox.style.border = '2px solid red';
}

Array.from(container.children).forEach((box, index) => {
    console.log(`Box ${index + 1} text:`, box.textContent);
});
