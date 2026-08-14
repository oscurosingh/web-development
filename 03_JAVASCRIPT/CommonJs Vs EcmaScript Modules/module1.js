// EcmaScript Modules (ESM) are a standardized module system in JavaScript that allows developers to organize and reuse code across different files. ESM uses the `import` and `export` keywords to define and access modules.


export const name = "Shubham"; // named exports can be used multiple times in a file.
export const age = 21; // named export
export const address = "India"; // named export
export const hobbies = ["Coding", "Gaming", "Reading"]; // named export


const Employee = {
  name: "Shubham",
  age: 21,
  address: "India",
  hobbies: ["Coding", "Gaming", "Reading"],
};

export default Employee;    // default export can be used only once in a file, but named exports can be used multiple times in a file.