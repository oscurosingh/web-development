# JavaScript Functions

## 1. What is a Function?

A **function** is a reusable block of code designed to perform a specific task.

```js
function greet() {
  console.log("Hello!");
}

greet();
```

---

## 2. Function with Parameters

Parameters allow a function to receive input values.

```js
function greet(name) {
  console.log(`Hello, ${name}`);
}

greet("Oscuro");
```

* **Parameter** → variable defined in function
* **Argument** → value passed to function

---

## 3. Return Value

`return` sends a value back from a function.

```js
function add(a, b) {
  return a + b;
}

const result = add(10, 20);
console.log(result);
```

> Code after `return` does not execute.

---

## 4. Function Declaration

```js
function multiply(a, b) {
  return a * b;
}
```

* Hoisted (can be used before definition)

```js
multiply(2, 3);

function multiply(a, b) {
  return a * b;
}
```

---

## 5. Function Expression

Function stored in a variable.

```js
const add = function (a, b) {
  return a + b;
};

add(2, 3);
```

* Not hoisted

---

## 6. Arrow Function

Short syntax for functions.

```js
const add = (a, b) => {
  return a + b;
};
```

Implicit return:

```js
const add = (a, b) => a + b;
```

Single parameter:

```js
const square = n => n * n;
```

---

## 7. Default Parameters

Provides default values if arguments are missing.

```js
function greet(name = "Guest") {
  console.log(`Hello, ${name}`);
}

greet();
```

---

## 8. Rest Parameters

Collects multiple arguments into an array.

```js
function sum(...numbers) {
  return numbers.reduce((total, n) => total + n, 0);
}

sum(1, 2, 3, 4);
```

---

## 9. Callback Function

A function passed as an argument to another function.

```js
function processUser(name, callback) {
  callback(name);
}

processUser("Oscuro", name => {
  console.log(`Hello ${name}`);
});
```

Used in events, async operations, and array methods.

---

## 10. Scope

Variables inside a function are not accessible outside.

```js
function test() {
  const message = "Hello";
  console.log(message);
}

test();
```

---

# Interview Questions & Answers

## Q1. What is a function in JavaScript?

A function is a reusable block of code used to perform a specific task.

---

## Q2. Difference between function declaration and expression?

* Declaration is hoisted.
* Expression is not hoisted.

---

## Q3. What is hoisting?

Hoisting moves function declarations to the top of their scope, allowing usage before definition.

---

## Q4. Parameters vs Arguments?

* Parameters → defined in function
* Arguments → passed values

---

## Q5. What is an arrow function?

A shorter syntax for functions without its own `this` binding.

---

## Q6. What is a callback function?

A function passed into another function and executed later.

---

## Q7. Use of return?

Returns a value and stops function execution.

---

## Q8. Default parameters?

Provide default values when no argument is passed.

---

## Q9. Rest parameter?

Collects multiple arguments into an array.

---

## Q10. Function scope?

Variables inside a function are not accessible outside it.
