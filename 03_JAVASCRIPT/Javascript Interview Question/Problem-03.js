// The Mirror Mirror: Imagine you have a string, and you need to create a new string that is a mirror image of the original. Write a function that appends the reversed version of the original string to itself.

function mirrorString(str) {
    // Reverse the original string
    const reversedStr = str.split('').reverse().join('');
    // Append the reversed string to the original string
    return str + reversedStr;
}
let originalString = "hello";
console.log(originalString.split('')); // ['h', 'e', 'l', 'l', 'o' ]
console.log(originalString.split('').reverse())// [ 'o', 'l', 'l', 'e', 'h' ]

let mirroredString = mirrorString(originalString);
console.log(mirroredString); // Output: "helloolleh"