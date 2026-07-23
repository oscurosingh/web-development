console.log('we will Learn strings')
let a ='Shubham';
console.log(a[0]);
console.log(a[1]);
console.log(a[2]);
console.log(a[3]);
console.log(a[4]);
console.log(a[5],end="\n");

console.log(a.length)

let real_name = 'Oscuro';
let friend = 'krishna';
console.log('His name is '+real_name+' and his friend name is '+friend)
console.log(`His name is '${real_name}' and his friend name is "${friend}"`,end="\n")

let ex = 'Shivshambhu'
console.log(ex.toLocaleUpperCase())
console.log(ex.toLocaleLowerCase())
console.log(ex.concat("  ",real_name," ",friend))
console.log(ex.slice(1,5))
console.log(ex.slice(1),end="\n")
// Check if a substring is contained within a string
const sentence = "Learning JavaScript is fun!";
console.log("Contains 'JavaScript':", sentence.includes("JavaScript"),end="\n");

// Replace a substring and log the updated string
const replacedSentence = sentence.replace("fun", "super fun");
console.log("After replace:", replacedSentence,end="\n");

// Split the sentence into words
const wordsArray = sentence.split(" ");
console.log("Words array:", wordsArray,end="\n");

// Trim whitespace from a string
const paddedString = "   spaced out   ";
console.log("Before trim:", `"${paddedString}"`);
console.log("After trim:", `"${paddedString.trim()}"`,end="\n");

// Get a character using charAt
console.log("Character at position 5:", sentence.charAt(5),end="\n");

// Repeat a string multiple times
console.log("Repeated string:", "Ha! ".repeat(3),end="\n");

// Find the index of a substring
console.log("Index of 'JavaScript':", sentence.indexOf("JavaScript"),end="\n");

// Find the last index of a character
console.log("Last index of 'a':", sentence.lastIndexOf("a"),end="\n");

// Pad a string at the start and end
const numString = "5";
console.log("Padded start:", numString.padStart(3, "0"));
console.log("Padded end:", numString.padEnd(3, "0"),end="\n");

const testString = "Password123";
console.log("Has min length 8:", testString.length >= 8);
console.log("Has upper case:", /[A-Z]/.test(testString));
console.log("Has lower case:", /[a-z]/.test(testString));
console.log("Has digit:", /[0-9]/.test(testString));
console.log("Has digit:", /\d/.test(testString));


