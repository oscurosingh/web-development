console.log('we will Learn strings')
let a ='Shubham';
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5]);

console.log(a.length)

let real_name = 'Oscuro';
let friend = 'krishna';
console.log('His name is '+real_name+' and his friend name is '+friend)
console.log(`His name is '${real_name}' and his friend name is "${friend}"`)

let ex = 'Shivshambhu'
console.log(ex.toLocaleUpperCase())
console.log(ex.toLocaleLowerCase())
console.log(ex.concat("  ",real_name," ",friend))
console.log(ex.slice(1,5))
console.log(ex.slice(1))
// Check if a substring is contained within a string
const sentence = "Learning JavaScript is fun!";
console.log("Contains 'JavaScript':", sentence.includes("JavaScript"));

// Replace a substring and log the updated string
const replacedSentence = sentence.replace("fun", "super fun");
console.log("After replace:", replacedSentence);

// Split the sentence into words
const wordsArray = sentence.split(" ");
console.log("Words array:", wordsArray);

// Trim whitespace from a string
const paddedString = "   spaced out   ";
console.log("Before trim:", `"${paddedString}"`);
console.log("After trim:", `"${paddedString.trim()}"`);

// Get a character using charAt
console.log("Character at position 5:", sentence.charAt(5));

// Repeat a string multiple times
console.log("Repeated string:", "Ha! ".repeat(3));

// Find the index of a substring
console.log("Index of 'JavaScript':", sentence.indexOf("JavaScript"));

// Find the last index of a character
console.log("Last index of 'a':", sentence.lastIndexOf("a"));

// Pad a string at the start and end
const numString = "5";
console.log("Padded start:", numString.padStart(3, "0"));
console.log("Padded end:", numString.padEnd(3, "0"));
