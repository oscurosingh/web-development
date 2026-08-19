# JavaScript Arrays

## 1. What is an Array?

An **array** is a data structure used to store multiple values in a single variable.

```js
const fruits = ["Apple", "Banana", "Mango"];
```

* Arrays are **zero-indexed**.
* Arrays can contain different data types.
* `length` gives the number of elements.

```js
console.log(fruits[0]);     // Apple
console.log(fruits.length); // 3
```

---

## 2. Creating an Array

```js
const numbers = [10, 20, 30];

const empty = [];

const mixed = [10, "Hello", true, null];
```

Using constructor:

```js
const numbers = new Array(10, 20, 30);
```

> Prefer array literals `[]` in most cases.

---

## 3. Access & Modify Elements

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits[1]); // Banana

fruits[1] = "Orange";

console.log(fruits);
```

---

## 4. Add & Remove Elements

### `push()` — Add to end

```js
fruits.push("Grapes");
```

### `pop()` — Remove from end

```js
fruits.pop();
```

### `unshift()` — Add to beginning

```js
fruits.unshift("Kiwi");
```

### `shift()` — Remove from beginning

```js
fruits.shift();
```

---

## 5. `slice()`

Returns a portion of an array **without modifying the original**.

```js
const numbers = [10, 20, 30, 40];

const result = numbers.slice(1, 3);

console.log(result); // [20, 30]
```

---

## 6. `splice()`

Adds, removes, or replaces elements and **modifies the original array**.

```js
const numbers = [10, 20, 30, 40];

numbers.splice(1, 2);

console.log(numbers); // [10, 40]
```

Syntax:

```js
array.splice(start, deleteCount, items...);
```

---

## 7. `indexOf()` & `includes()`

```js
const fruits = ["Apple", "Banana", "Mango"];

fruits.indexOf("Banana");   // 1
fruits.includes("Mango");   // true
```

* `indexOf()` → returns index or `-1`
* `includes()` → returns `true` or `false`

---

## 8. `forEach()`

Executes a function for every element.

```js
const numbers = [1, 2, 3];

numbers.forEach(num => {
  console.log(num);
});
```

> `forEach()` does not create a new array.

---

## 9. `map()`

Creates a **new array** by transforming each element.

```js
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6]
```

---

## 10. `filter()`

Creates a new array containing elements that satisfy a condition.

```js
const numbers = [1, 2, 3, 4];

const even = numbers.filter(num => num % 2 === 0);

console.log(even); // [2, 4]
```

---

## 11. `find()`

Returns the **first element** matching a condition.

```js
const numbers = [10, 20, 30];

const result = numbers.find(num => num > 15);

console.log(result); // 20
```

---

## 12. `reduce()`

Reduces an array to a **single value**.

```js
const numbers = [10, 20, 30];

const total = numbers.reduce((sum, num) => sum + num, 0);

console.log(total); // 60
```

---

## 13. `sort()`

Sorts the original array.

```js
const numbers = [30, 10, 20];

numbers.sort((a, b) => a - b);

console.log(numbers); // [10, 20, 30]
```

> Use a comparator for numerical sorting.

---

## 14. `join()`

Converts array elements into a string.

```js
const fruits = ["Apple", "Banana", "Mango"];

console.log(fruits.join(", "));
// Apple, Banana, Mango
```

---

## 15. Spread Operator

Used to expand or copy array elements.

```js
const a = [1, 2];
const b = [3, 4];

const combined = [...a, ...b];

console.log(combined); // [1, 2, 3, 4]
```

Copy:

```js
const copy = [...a];
```

---

# Important Methods

| Method       | Purpose               | Modifies Original |
| ------------ | --------------------- | ----------------- |
| `push()`     | Add at end            | Yes               |
| `pop()`      | Remove from end       | Yes               |
| `shift()`    | Remove from beginning | Yes               |
| `unshift()`  | Add at beginning      | Yes               |
| `slice()`    | Extract portion       | No                |
| `splice()`   | Add/remove elements   | Yes               |
| `map()`      | Transform elements    | No                |
| `filter()`   | Select elements       | No                |
| `find()`     | Find first match      | No                |
| `reduce()`   | Reduce to one value   | No                |
| `forEach()`  | Iterate               | No                |
| `sort()`     | Sort elements         | Yes               |
| `includes()` | Check existence       | No                |
| `indexOf()`  | Find index            | No                |
| `join()`     | Convert to string     | No                |

---

# Interview Questions & Answers

## Q1. What is an array?

An array is an ordered collection used to store multiple values.

## Q2. Are JavaScript arrays zero-indexed?

Yes. The first element is at index `0`.

## Q3. Difference between `slice()` and `splice()`?

* `slice()` → does not modify the original array.
* `splice()` → modifies the original array.

## Q4. Difference between `map()` and `forEach()`?

* `map()` → returns a new array.
* `forEach()` → does not return a new array.

## Q5. What does `filter()` do?

Returns a new array containing elements that satisfy a condition.

## Q6. What does `reduce()` do?

Combines array elements into a single accumulated value.

## Q7. How do you copy an array?

```js
const copy = [...original];
```

## Q8. How do you check if an element exists?

```js
array.includes(value);
```
