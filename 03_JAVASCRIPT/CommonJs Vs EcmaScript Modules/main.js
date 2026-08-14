
// EcmaScript Modules (ESM) is a module system that allows developers to organize and reuse code across different files. ESM is the standard module system in JavaScript and is supported by all modern browsers and Node.js.

// import {name, age} from './module1.js';

// console.log(name);
// console.log(age);

// import anything from './module1.js'; // here we are importing the default export from module1.js file and giving it a name "anything"

// console.log(anything); // here we are logging the default export from module1.js file which is an object containing name, age, address and hobbies.


// CommonJs is a module system that allows developers to organize and reuse code across different files. CommonJs uses the `require` and `module.exports` keywords to define and access modules.

const { name, age } = require('./module2.js'); // here we are using CommonJs module syntax to import the name and age variables from the module2.js file

console.log(name, age);