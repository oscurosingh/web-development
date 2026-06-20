# DOM Children, Parent & Sibling Nodes

## Introduction
In the DOM, every element is connected to other elements through relationships like parent, child, and sibling. Understanding these relationships helps you navigate the HTML structure and manipulate elements using JavaScript.

## What is the DOM?
The DOM (Document Object Model) is a tree structure created by the browser for your HTML page.

Example HTML structure:

```html
<body>
  <div class="container">
    <div class="box">Box 1</div>
    <div class="box">Box 2</div>
  </div>
</body>
```

In this structure:
- `body` is the parent of `.container`
- `.container` is the parent of the two `.box` elements
- each `.box` is a sibling of the others

---

## 1. Child Relationships

### `childNodes`
`childNodes` returns all direct child nodes of an element, including:
- element nodes
- text nodes
- comments
- whitespace nodes

Example:
```js
const container = document.querySelector('.container');
console.log(container.childNodes);
```

### `children`
`children` returns only the direct element children of an element.

Example:
```js
console.log(container.children);
```

### Important difference
- Use `childNodes` when you need every node, including spaces/text.
- Use `children` when you only want actual HTML elements.

---

## 2. First and Last Child

### `firstChild`
Returns the first child node of an element.

```js
console.log(container.firstChild);
```

This may return a text node or whitespace if present.

### `firstElementChild`
Returns the first child element only.

```js
console.log(container.firstElementChild);
```

### `lastChild` and `lastElementChild`
These work the same way but from the end:

```js
console.log(container.lastChild);
console.log(container.lastElementChild);
```

---

## 3. Parent Relationships

### `parentNode`
Returns the parent node of the selected element.

```js
const firstBox = document.querySelector('.box');
console.log(firstBox.parentNode);
```

### `parentElement`
Returns the parent element only.

```js
console.log(firstBox.parentElement);
```

### Difference
- `parentNode` may return a text or document node in some cases.
- `parentElement` usually gives the actual HTML parent element.

---

## 4. Sibling Relationships

### `nextSibling`
Returns the next sibling node (may be text or whitespace).

```js
console.log(firstBox.nextSibling);
```

### `nextElementSibling`
Returns the next sibling element only.

```js
console.log(firstBox.nextElementSibling);
```

### `previousSibling`
Returns the previous sibling node.

```js
console.log(firstBox.previousSibling);
```

### `previousElementSibling`
Returns the previous sibling element only.

```js
console.log(firstBox.previousElementSibling);
```

---

## Why this topic is important
These properties are used often when:
- selecting elements in a list
- changing styles of nearby elements
- moving through form fields
- creating dynamic web pages
- working with menus, tabs, or cards

---

## Example from this folder
The HTML file contains a container with multiple boxes. The JavaScript file demonstrates how to:
- access the first and last child
- check parent and sibling relationships
- log node values in the console
- update styles using traversal

Example:
```js
const firstBox = document.querySelector('.box');
const secondBox = firstBox.nextElementSibling;

if (firstBox) {
  firstBox.style.backgroundColor = 'lightgreen';
}

if (secondBox) {
  secondBox.style.border = '2px solid red';
}
```

---

## Common Mistakes
1. Using `firstChild` when you really mean `firstElementChild`
2. Forgetting that `childNodes` includes whitespace text nodes
3. Using `nextSibling` when you want the next actual element
4. Assuming every parent is an element

---

## Quick Summary
- `childNodes` → all child nodes
- `children` → only child elements
- `firstChild` / `lastChild` → first/last node
- `firstElementChild` / `lastElementChild` → first/last element
- `parentNode` / `parentElement` → move upward
- `nextSibling` / `previousSibling` → move to sibling nodes
- `nextElementSibling` / `previousElementSibling` → move to sibling elements

---

## Practice Task
Try this on your own:
1. Select the third box.
2. Log its parent element.
3. Log its previous and next sibling elements.
4. Change the background color of the previous box.

