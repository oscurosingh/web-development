# JavaScript Events, Event Bubbling, `setInterval()` & `setTimeout()`

---

## 1. Introduction

JavaScript is widely used to build interactive web applications. It enables user-driven behavior such as clicks, input handling, form submission, scrolling, and timed operations.

### Common interactions include:

* Clicking buttons
* Typing in inputs
* Submitting forms
* Mouse movements
* Keyboard actions
* Page load and resize events
* Timed and repeated executions

These are handled using **Events** and **Timers**.

---

## 2. Core Topics Covered

1. Events
2. Event Listeners
3. Event Object
4. Common Events
5. Event Bubbling
6. Event Capturing
7. `event.target`
8. `event.currentTarget`
9. `stopPropagation()`
10. Event Delegation
11. `setTimeout()`
12. `clearTimeout()`
13. `setInterval()`
14. `clearInterval()`

---

## 3. What is an Event?

An **event** is any action or occurrence detected by the browser.

### Examples:

* User clicks a button
* User types in an input
* Page loads
* Window resizes

### Example:

```javascript
button.addEventListener("click", () => {
    console.log("Button clicked");
});
```

---

## 4. Event-Driven Programming

JavaScript follows an event-driven model where code executes in response to events rather than continuous checking.

Instead of polling:

* “Did user click?”
* “Did user type?”

We simply register a handler:

```javascript
button.addEventListener("click", handleClick);
```

---

## 5. Event Listener

An **event listener** waits for an event and executes a callback when it occurs.

### Syntax:

```javascript
element.addEventListener(event, callback);
```

### Example:

```javascript
const button = document.querySelector("#btn");

button.addEventListener("click", () => {
    console.log("Clicked");
});
```

### Components:

* **Element** → Target DOM node
* **Event** → Type of event (`click`, `input`, etc.)
* **Callback** → Function executed on event

---

## 6. Why `addEventListener()`?

Preferred over inline handlers because it:

* Separates HTML and JS
* Supports multiple listeners
* Improves maintainability
* Offers better control

---

## 7. Multiple Event Listeners

Multiple handlers can be attached to the same event:

```javascript
button.addEventListener("click", () => console.log("First"));
button.addEventListener("click", () => console.log("Second"));
```

---

## 8. Common Events

| Event      | Description         |
| ---------- | ------------------- |
| `click`    | Mouse click         |
| `dblclick` | Double click        |
| `keydown`  | Key pressed         |
| `keyup`    | Key released        |
| `input`    | Input value changes |
| `change`   | Value committed     |
| `submit`   | Form submission     |
| `load`     | Page loaded         |
| `scroll`   | Scrolling           |
| `resize`   | Window resize       |

---

## 9. Mouse Events

```javascript
box.addEventListener("mouseenter", () => console.log("Enter"));
box.addEventListener("mouseleave", () => console.log("Leave"));
```

---

## 10. Keyboard Events

```javascript
document.addEventListener("keydown", (event) => {
    console.log(event.key);
});
```

### Key properties:

* `event.key` → actual character
* `event.code` → physical key

---

## 11. Input & Change Events

### Input (real-time):

```javascript
input.addEventListener("input", (e) => {
    console.log(e.target.value);
});
```

### Change (on commit):

```javascript
select.addEventListener("change", (e) => {
    console.log(e.target.value);
});
```

---

## 12. Form Submission

```javascript
form.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log("Submitted");
});
```

### `preventDefault()`

Stops default browser behavior (e.g., page reload).

---

## 13. Event Object

Every event provides an **event object** containing metadata.

### Key properties:

* `event.target`
* `event.currentTarget`
* `event.type`
* `event.key`
* `event.code`

---

## 14. `event.target` vs `event.currentTarget`

| Property        | Meaning                      |
| --------------- | ---------------------------- |
| `target`        | Element that triggered event |
| `currentTarget` | Element handling the event   |

---

## 15. Event Propagation

Events travel through the DOM in phases:

1. Capturing
2. Target
3. Bubbling

### Flow:

```
Window → Document → Parent → Target → Parent → Document → Window
```

---

## 16. Event Bubbling

Events propagate from child → parent.

```javascript
parent.addEventListener("click", () => console.log("Parent"));
child.addEventListener("click", () => console.log("Child"));
```

### Output:

```
Child
Parent
```

---

## 17. Event Delegation

A technique where a parent handles events for its children.

### Example:

```javascript
list.addEventListener("click", (event) => {
    if (event.target.matches("li")) {
        console.log(event.target.textContent);
    }
});
```

### Benefits:

* Fewer listeners
* Better performance
* Works for dynamic elements

---

## 18. `stopPropagation()`

Prevents event from bubbling further.

```javascript
event.stopPropagation();
```

---

## 19. Event Capturing

Opposite of bubbling (parent → child).

```javascript
element.addEventListener("click", handler, true);
```

---

## 20. `setTimeout()`

Executes a function once after a delay.

### Syntax:

```javascript
setTimeout(callback, delay);
```

### Example:

```javascript
setTimeout(() => {
    console.log("Executed after delay");
}, 2000);
```

---

## 21. `clearTimeout()`

Cancels a scheduled timeout.

```javascript
const id = setTimeout(fn, 2000);
clearTimeout(id);
```

---

## 22. `setInterval()`

Executes a function repeatedly at intervals.

```javascript
setInterval(() => {
    console.log("Repeating");
}, 1000);
```

---

## 23. `clearInterval()`

Stops repeated execution.

```javascript
const id = setInterval(fn, 1000);
clearInterval(id);
```

---

## 24. `setTimeout` vs `setInterval`

| Feature   | `setTimeout`   | `setInterval`   |
| --------- | -------------- | --------------- |
| Execution | Once           | Repeated        |
| Cancel    | `clearTimeout` | `clearInterval` |

---

## 25. Asynchronous Nature

Timers do not block execution:

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

console.log("C");
```

### Output:

```
A
C
B
```

---

## 26. Event Loop (Concept)

JavaScript uses an event loop to manage asynchronous tasks:

```
Call Stack → Web APIs → Task Queue → Event Loop → Call Stack
```

---

## 27. Key Timer Concept

Delays are **minimum wait times**, not exact execution guarantees.

---

## 28. Best Practices

* Always clear intervals when not needed
* Avoid multiple unintended intervals
* Use event delegation for dynamic lists
* Prefer `addEventListener` over inline handlers

---

## 29. Quick Reference

### Events

```javascript
element.addEventListener("click", handler);
```

### Event Object

```javascript
event.target;
event.currentTarget;
```

### Stop Propagation

```javascript
event.stopPropagation();
```

### Prevent Default

```javascript
event.preventDefault();
```

### Timeout

```javascript
setTimeout(fn, 1000);
clearTimeout(id);
```

### Interval

```javascript
setInterval(fn, 1000);
clearInterval(id);
```

---

## 30. Final Summary

JavaScript events and timers form the backbone of interactive web development.

* **Events** handle user interactions
* **Propagation** controls event flow
* **Delegation** optimizes event handling
* **Timers** manage delayed and repeated execution
* **Event loop** ensures asynchronous behavior

Mastery of these concepts is essential for building scalable, responsive, and modern web applications.
