# JavaScript Strings

## 1. What is a String?

A **string** is a sequence of characters used to represent text.

```js
const name = "Oscuro";
const message = 'Hello World';
```

JavaScript supports:

* Single quotes `'...'`
* Double quotes `"..."`
* Template literals `` `...` ``

---

## 2. Template Literals

Used for string interpolation and multi-line strings.

```js
const name = "Oscuro";
const age = 20;

console.log(`My name is ${name} and I am ${age} years old.`);
```

---

## 3. String Length

`length` returns the number of characters.

```js
const text = "JavaScript";

console.log(text.length); // 10
```

---

## 4. Access Characters

Strings are **zero-indexed**.

```js
const text = "Hello";

console.log(text[0]); // H
console.log(text[4]); // o
```

Using `at()`:

```js
console.log(text.at(-1)); // o
```

---

## 5. Changing Case

### `toUpperCase()`

```js
"hello".toUpperCase(); // HELLO
```

### `toLowerCase()`

```js
"HELLO".toLowerCase(); // hello
```

---

## 6. `trim()`

Removes whitespace from both ends.

```js
const text = "  Hello  ";

console.log(text.trim()); // "Hello"
```

Related methods:

```js
text.trimStart();
text.trimEnd();
```

---

## 7. `includes()`

Checks whether a string contains a specific value.

```js
const text = "JavaScript";

console.log(text.includes("Script")); // true
```

Returns `true` or `false`.

---

## 8. `startsWith()` & `endsWith()`

```js
const text = "JavaScript";

text.startsWith("Java"); // true
text.endsWith("Script"); // true
```

---

## 9. `indexOf()`

Returns the index of the first occurrence.

```js
const text = "JavaScript";

console.log(text.indexOf("Script")); // 4
```

Returns `-1` if not found.

---

## 10. `slice()`

Extracts part of a string without modifying the original.

```js
const text = "JavaScript";

console.log(text.slice(0, 4)); // Java
console.log(text.slice(4));    // Script
```

Negative indexes are supported:

```js
console.log(text.slice(-6)); // Script
```

---

## 11. `substring()`

Extracts characters between two indexes.

```js
const text = "JavaScript";

console.log(text.substring(0, 4)); // Java
```

> `substring()` treats negative values as `0`. Prefer `slice()` when negative indexes are useful.

---

## 12. `replace()` & `replaceAll()`

### `replace()`

Replaces the first matching occurrence.

```js
const text = "Hello World";

console.log(text.replace("World", "JavaScript"));
```

### `replaceAll()`

Replaces all matching occurrences.

```js
const text = "JS JS JS";

console.log(text.replaceAll("JS", "JavaScript"));
```

---

## 13. `split()`

Converts a string into an array.

```js
const text = "HTML CSS JavaScript";

const skills = text.split(" ");

console.log(skills);
// ["HTML", "CSS", "JavaScript"]
```

---

## 14. `concat()`

Combines strings.

```js
const first = "Hello";
const second = "World";

console.log(first.concat(" ", second));
```

> Template literals are usually cleaner for string composition.

---

## 15. `repeat()`

Repeats a string a specified number of times.

```js
console.log("Hi ".repeat(3));
// Hi Hi Hi
```

---

## 16. Strings are Immutable

String methods **do not modify the original string**.

```js
const text = "hello";

text.toUpperCase();

console.log(text); // hello
```

You must store the returned value:

```js
const result = text.toUpperCase();

console.log(result); // HELLO
```

---

# Important Methods

| Method          | Purpose                       |
| --------------- | ----------------------------- |
| `length`        | Get string length             |
| `at()`          | Access character              |
| `toUpperCase()` | Convert to uppercase          |
| `toLowerCase()` | Convert to lowercase          |
| `trim()`        | Remove surrounding whitespace |
| `includes()`    | Check for substring           |
| `startsWith()`  | Check beginning               |
| `endsWith()`    | Check ending                  |
| `indexOf()`     | Find first index              |
| `slice()`       | Extract part                  |
| `substring()`   | Extract part                  |
| `replace()`     | Replace first match           |
| `replaceAll()`  | Replace all matches           |
| `split()`       | Convert string to array       |
| `concat()`      | Combine strings               |
| `repeat()`      | Repeat string                 |

---

# Interview Questions & Answers

## Q1. What is a string?

A string is an immutable sequence of characters used to represent text.

## Q2. Are strings mutable in JavaScript?

No. Strings are **immutable**.

## Q3. Difference between `slice()` and `substring()`?

* `slice()` supports negative indexes.
* `substring()` treats negative values as `0`.

## Q4. Difference between `replace()` and `replaceAll()`?

* `replace()` replaces the first matching occurrence.
* `replaceAll()` replaces all matching occurrences.

## Q5. How do you convert a string to an array?

```js
const arr = "A B C".split(" ");
```

## Q6. How do you check if a string contains a value?

```js
text.includes("JavaScript");
```

## Q7. How do you remove extra whitespace?

```js
text.trim();
```

## Q8. How do you access the last character?

```js
text.at(-1);
```
