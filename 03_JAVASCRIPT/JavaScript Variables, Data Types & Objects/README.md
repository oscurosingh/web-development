# JavaScript Variables, Data Types & Objects

## 1. Variables

A **variable** is a named container used to store a value in memory.

```js
let age = 20;
const name = "Oscuro";
```

JavaScript provides three variable declarations:

* `let`
* `const`
* `var`

---

## 2. `let`, `const`, and `var`

### `let`

Use `let` when a variable needs to be reassigned.

```js
let score = 10;

score = 20;

console.log(score); // 20
```

`let` is **block-scoped**.

```js
{
  let message = "Hello";
}

// console.log(message); // Error
```

---

### `const`

Use `const` when a variable should not be reassigned.

```js
const pi = 3.14;

// pi = 4; // Error
```

`const` is also **block-scoped**.

```js
{
  const value = 100;
}

// console.log(value); // Error
```

> `const` prevents **reassignment**, not mutation of objects or arrays.

```js
const user = {
  name: "Oscuro"
};

user.name = "Alex"; // Valid
```

---

### `var`

`var` is the older way of declaring variables.

```js
var city = "Delhi";
```

Unlike `let` and `const`, `var` is **function-scoped**.

```js
if (true) {
  var x = 10;
}

console.log(x); // 10
```

Because of its scoping and hoisting behavior, prefer `let` and `const` in modern JavaScript.

---

## 3. `let` vs `const` vs `var`

| Feature                     | `let`     | `const`   | `var`           |
| --------------------------- | --------- | --------- | --------------- |
| Scope                       | Block     | Block     | Function        |
| Reassignment                | Yes       | No        | Yes             |
| Redeclaration in same scope | No        | No        | Yes             |
| Hoisted                     | Yes*      | Yes*      | Yes             |
| Modern JS                   | Preferred | Preferred | Avoid generally |

* `let` and `const` are hoisted but remain inaccessible before declaration because of the **Temporal Dead Zone (TDZ)**.

---

# 4. Hoisting

**Hoisting** is JavaScript's behavior of processing declarations before executing the code.

Function declarations can be used before their definition:

```js
greet();

function greet() {
  console.log("Hello");
}
```

`var` is hoisted and initialized with `undefined`:

```js
console.log(x); // undefined

var x = 10;
```

But `let` and `const` cannot be accessed before their declaration:

```js
console.log(x); // ReferenceError

let x = 10;
```

This period between entering the scope and reaching the declaration is called the **Temporal Dead Zone (TDZ)**.

---

# 5. Data Types

JavaScript is a **dynamically typed language**.

This means a variable does not have a fixed type; its value has a type.

```js
let value = 10;

value = "Hello";

value = true;
```

JavaScript data types are divided into:

1. **Primitive types**
2. **Non-primitive / Reference types**

---

# 6. Primitive Data Types

Primitive values represent a **single value** and are immutable.

JavaScript has **7 primitive types**:

### 1. String

Represents text.

```js
const name = "Oscuro";
const message = 'Hello World';
```

---

### 2. Number

Represents integers and floating-point numbers.

```js
const age = 20;
const price = 99.99;
```

JavaScript uses one `Number` type for both integers and decimals.

Special numeric values include:

```js
NaN
Infinity
-Infinity
```

---

### 3. BigInt

Used for integers larger than the safe range of `Number`.

```js
const bigNumber = 12345678901234567890n;
```

The `n` suffix indicates a `BigInt`.

---

### 4. Boolean

Represents logical values.

```js
const isLoggedIn = true;
const isAdmin = false;
```

Only two values exist:

```text
true
false
```

---

### 5. Undefined

Represents a variable that has been declared but has not been assigned a value.

```js
let username;

console.log(username); // undefined
```

---

### 6. Null

Represents an **intentional absence of a value**.

```js
const selectedUser = null;
```

A common distinction:

* `undefined` → value hasn't been assigned
* `null` → intentionally no value

---

### 7. Symbol

Creates a unique value, commonly used as unique object property keys.

```js
const id = Symbol("id");
```

Two symbols with the same description are still different:

```js
const a = Symbol("id");
const b = Symbol("id");

console.log(a === b); // false
```

---

# 7. Reference / Non-Primitive Types

Objects are reference values.

Common examples:

* Object
* Array
* Function
* Date
* Map
* Set

```js
const user = {
  name: "Oscuro",
  age: 20
};
```

Unlike primitive values, objects can contain multiple properties and can be mutated.

---

# 8. Primitive vs Reference Types

This is an **important JavaScript concept**.

### Primitive

A primitive variable contains its value.

```js
let a = 10;
let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20
```

Changing `b` does not affect `a`.

### Object

Object variables refer to an object.

```js
const a = {
  name: "Oscuro"
};

const b = a;

b.name = "Alex";

console.log(a.name); // Alex
```

Both `a` and `b` refer to the **same object**.

Conceptually:

```text
a ──────┐
        ↓
     { name: "Alex" }
        ↑
b ──────┘
```

> This behavior is important when passing objects to functions, copying objects, and working with arrays.

---

# 9. `typeof` Operator

`typeof` is used to determine the type of a value.

```js
typeof "Hello";   // "string"
typeof 10;        // "number"
typeof true;      // "boolean"
typeof undefined; // "undefined"
typeof 10n;       // "bigint"
```

For objects:

```js
typeof {};        // "object"
typeof [];        // "object"
typeof function() {}; // "function"
```

### Important `typeof` Quirk

```js
typeof null; // "object"
```

This is a historical JavaScript behavior.

To check for `null`:

```js
value === null;
```

---

# 10. Type Conversion

JavaScript can convert values from one type to another.

### String Conversion

```js
const value = 100;

const result = String(value);

console.log(result);        // "100"
console.log(typeof result); // string
```

### Number Conversion

```js
const value = "100";

const result = Number(value);

console.log(result); // 100
```

### Boolean Conversion

```js
Boolean(1);      // true
Boolean(0);      // false
Boolean("Hello"); // true
Boolean("");      // false
```

---

# 11. Truthy and Falsy Values

When JavaScript expects a boolean, values can be evaluated as **truthy** or **falsy**.

Common falsy values:

```js
false
0
-0
0n
""
null
undefined
NaN
```

Almost everything else is truthy.

```js
if ("Hello") {
  console.log("Truthy");
}
```

---

# 12. Objects

An **object** is a collection of data stored as **key-value pairs**.

```js
const user = {
  name: "Oscuro",
  age: 20,
  city: "Delhi"
};
```

Here:

```text
name → key
"Oscuro" → value
```

---

# 13. Accessing Object Properties

### Dot Notation

```js
console.log(user.name);
console.log(user.age);
```

### Bracket Notation

```js
console.log(user["name"]);
console.log(user["age"]);
```

Bracket notation is useful when the property name is stored in a variable:

```js
const key = "name";

console.log(user[key]);
```

---

# 14. Adding and Modifying Properties

Objects are mutable.

### Add Property

```js
user.country = "India";
```

### Modify Property

```js
user.age = 21;
```

### Delete Property

```js
delete user.city;
```

---

# 15. Object Methods

A function stored inside an object is called a **method**.

```js
const user = {
  name: "Oscuro",

  greet() {
    console.log("Hello!");
  }
};

user.greet();
```

---

# 16. `this` in Objects

Inside a regular object method, `this` generally refers to the object that called the method.

```js
const user = {
  name: "Oscuro",

  greet() {
    console.log(`Hello, ${this.name}`);
  }
};

user.greet();
```

Output:

```text
Hello, Oscuro
```

> Arrow functions do not have their own `this`, so they should generally not be used as object methods when you need dynamic `this`.

---

# 17. Nested Objects

Objects can contain other objects.

```js
const user = {
  name: "Oscuro",

  address: {
    city: "Delhi",
    country: "India"
  }
};

console.log(user.address.city);
```

---

# 18. Object Destructuring

Destructuring extracts properties into variables.

```js
const user = {
  name: "Oscuro",
  age: 20
};

const { name, age } = user;

console.log(name);
console.log(age);
```

This is commonly used with function parameters, APIs, and React.

---

# 19. Spread Operator with Objects

The spread operator `...` can create a shallow copy of an object.

```js
const user = {
  name: "Oscuro",
  age: 20
};

const copy = { ...user };
```

You can also merge objects:

```js
const personal = {
  name: "Oscuro"
};

const details = {
  age: 20
};

const user = {
  ...personal,
  ...details
};
```

---

# 20. Arrays are Objects

Arrays are a special type of object.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(typeof fruits); // "object"
```

To specifically check whether a value is an array:

```js
Array.isArray(fruits); // true
```

---

# 21. Important Comparison

| Concept                         | Primitive               | Object              |
| ------------------------------- | ----------------------- | ------------------- |
| Examples                        | String, Number, Boolean | Object, Array       |
| Stores                          | Value                   | Reference           |
| Mutable                         | No                      | Yes                 |
| Can contain multiple properties | No                      | Yes                 |
| Example                         | `let x = 10`            | `let x = { a: 10 }` |

---

# Common Mistakes

### 1. Using `var` unnecessarily

```js
var name = "Oscuro";
```

Prefer:

```js
const name = "Oscuro";
```

---

### 2. Confusing `null` and `undefined`

```js
let a;        // undefined
let b = null; // intentional absence
```

---

### 3. Comparing objects directly

```js
{} === {}; // false
```

Objects are compared by reference, not by their contents.

---

### 4. Thinking `const` makes objects immutable

```js
const user = {
  age: 20
};

user.age = 21; // Valid
```

`const` prevents reassignment of the variable, not mutation of the object.

---

# Quick Reference

```text
Variables
├── let      → reassignable, block-scoped
├── const    → non-reassignable, block-scoped
└── var      → function-scoped, legacy

Primitive Types
├── String
├── Number
├── BigInt
├── Boolean
├── Undefined
├── Null
└── Symbol

Reference Types
├── Object
├── Array
├── Function
├── Date
├── Map
└── Set
```

---

# Interview Questions & Answers

## Q1. Difference between `let`, `const`, and `var`?

`let` and `const` are block-scoped. `let` can be reassigned, while `const` cannot. `var` is function-scoped and is generally avoided in modern JavaScript.

## Q2. What are primitive data types?

The seven primitives are `String`, `Number`, `BigInt`, `Boolean`, `Undefined`, `Null`, and `Symbol`.

## Q3. Is JavaScript statically or dynamically typed?

JavaScript is **dynamically typed** because variables can hold values of different types during execution.

## Q4. Difference between `null` and `undefined`?

`undefined` usually indicates that a value has not been assigned, while `null` represents an intentional absence of a value.

## Q5. Why does `typeof null` return `"object"`?

It is a historical behavior in JavaScript and is not a reliable way to check for `null`.

## Q6. Are objects passed by reference?

Technically, JavaScript is **pass-by-value**. When an object is passed, the value being copied is a reference to the same object.

## Q7. Are arrays objects?

Yes. Arrays are specialized objects.

```js
typeof []; // "object"
```

## Q8. What is the difference between mutable and immutable?

**Mutable** values can be changed after creation, while **immutable** values cannot be changed directly.

Objects and arrays are mutable; primitive values are immutable.

## Q9. What is the Temporal Dead Zone?

The TDZ is the period between entering a scope and the point where a `let` or `const` variable is initialized. Accessing it during this period causes a `ReferenceError`.

## Q10. What does `const` actually prevent?

`const` prevents **reassignment of the variable binding**. It does not make referenced objects or arrays immutable.
