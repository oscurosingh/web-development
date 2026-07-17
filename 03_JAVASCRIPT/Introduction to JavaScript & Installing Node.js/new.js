// I am creating a new file to test the new version of node js is working or not

console.log("This is a new file");

// Example JavaScript code
const name = "Shubham";
const version = process.version;

function greet(user) {
  return `Hello, ${user}! Welcome to Node.js ${version}.`;
}

console.log(greet(name));

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(n => n * 2);
console.log("Doubled numbers:", doubled);

