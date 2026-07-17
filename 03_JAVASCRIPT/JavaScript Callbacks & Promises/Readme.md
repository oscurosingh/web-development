# JavaScript Callbacks & Promises

## Overview
JavaScript uses callback functions and promises to handle asynchronous operations. These concepts help manage tasks that do not complete immediately, such as network requests, timers, or file reads. Understanding callbacks and promises is essential for writing clean, maintainable asynchronous code.

---

## Callbacks

### What is a callback?
A callback is a function passed as an argument to another function. The receiving function invokes the callback when its operation is complete, allowing the code to continue after an asynchronous task.

### Synchronous vs Asynchronous callbacks
- Synchronous callbacks run immediately during the execution of the outer function.
- Asynchronous callbacks run later, usually after an event or operation finishes (e.g. timer, network request). This allows JavaScript to stay non-blocking.

### Example: Simple callback
```js
function greet(name, callback) {
  console.log('Hello ' + name);
  callback();
}

greet('Alice', function() {
  console.log('Callback executed after greeting.');
});
```

### Error-first callbacks
In Node-style APIs, callbacks often follow the pattern `(err, result)`.
- `err` contains an error object if an error happened, otherwise `null`.
- `result` contains the successful result.

Example:
```js
function fetchData(callback) {
  setTimeout(() => {
    const error = null;
    const data = { id: 1, name: 'Item' };
    callback(error, data);
  }, 1000);
}

fetchData((err, data) => {
  if (err) {
    console.error('Fetch error:', err);
    return;
  }
  console.log('Data received:', data);
});
```

### Callback hell
When callbacks are nested deeply, code becomes hard to read and maintain.

Example of nested callbacks:
```js
doFirstTask((err, res1) => {
  if (err) return handleError(err);
  doSecondTask(res1, (err, res2) => {
    if (err) return handleError(err);
    doThirdTask(res2, (err, res3) => {
      if (err) return handleError(err);
      // continue...
    });
  });
});
```

Problems with callback hell:
- Hard to follow logic flow
- Difficult error handling
- Hard to reuse code
- Increased chance of bugs

---

## Promises

### What is a promise?
A promise represents the eventual completion or failure of an asynchronous operation. It is an object with three possible states:
- `pending`: initial state, not fulfilled or rejected
- `fulfilled`: operation completed successfully
- `rejected`: operation failed

A promise allows chaining and better handling of asynchronous logic than callbacks.

### Creating a promise
```js
const promise = new Promise((resolve, reject) => {
  const success = true;
  setTimeout(() => {
    if (success) {
      resolve('Operation succeeded');
    } else {
      reject('Operation failed');
    }
  }, 1000);
});
```

### Consuming a promise
Use `.then()` to handle success and `.catch()` to handle errors.
```js
promise
  .then(result => {
    console.log(result);
  })
  .catch(error => {
    console.error(error);
  });
```

### Promise chaining
Promises can be chained to sequence asynchronous tasks and avoid nested callbacks.
```js
fetchData()
  .then(data => {
    return processData(data);
  })
  .then(processed => {
    return saveData(processed);
  })
  .then(saved => {
    console.log('Saved successfully:', saved);
  })
  .catch(error => {
    console.error('Error in chain:', error);
  });
```

### Returning values from promises
Each `.then()` can return a value or another promise.
- Returning a value passes it to the next `.then()`.
- Returning a promise waits for that promise to settle before continuing.

### `Promise.resolve` and `Promise.reject`
- `Promise.resolve(value)`: creates a resolved promise with the given value.
- `Promise.reject(reason)`: creates a rejected promise with the given reason.

### `Promise.all`
Runs multiple promises in parallel and resolves when all promises succeed.
```js
Promise.all([promise1, promise2, promise3])
  .then(results => {
    console.log('All complete:', results);
  })
  .catch(error => {
    console.error('One failed:', error);
  });
```

### `Promise.race`
Resolves or rejects as soon as the first promise in the iterable settles.
```js
Promise.race([promise1, promise2])
  .then(firstResult => {
    console.log('First settled:', firstResult);
  })
  .catch(error => {
    console.error('First rejected:', error);
  });
```

### `Promise.allSettled`
Waits for all promises to settle, whether fulfilled or rejected.
```js
Promise.allSettled([promise1, promise2]).then(results => {
  results.forEach(result => {
    if (result.status === 'fulfilled') {
      console.log('Fulfilled:', result.value);
    } else {
      console.log('Rejected:', result.reason);
    }
  });
});
```

---

## Callbacks vs Promises

### Key differences
- Callbacks: simple function-based continuation, often results in nested code.
- Promises: objects that encapsulate future completion and allow chaining.

### Advantage of promises
- Cleaner, flatter code structure
- Better error propagation with a single `.catch()`
- Easier composition of multiple asynchronous operations

### When to use which
- Use callbacks for simple, synchronous function wrappers or when working with legacy APIs.
- Use promises for more readable asynchronous code, especially when chaining operations or handling multiple async tasks.

---

## Best Practices

- Prefer promise-based APIs for readability and maintainability.
- Handle errors at the end of the promise chain with `.catch()`.
- Avoid mixing callback-style error handling with promise-based code in the same flow.
- Use `async` / `await` where available for even cleaner asynchronous code.
- Name callbacks clearly and avoid deeply nested levels.

---

## Example: Converting callbacks to promises
```js
// Callback style
function getData(callback) {
  setTimeout(() => {
    callback(null, 'data');
  }, 500);
}

// Promise style
function getDataPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('data');
    }, 500);
  });
}

getDataPromise()
  .then(data => console.log(data))
  .catch(err => console.error(err));
```

---

## Summary
Callbacks and promises are both fundamental in JavaScript for asynchronous programming. Callbacks are the simpler building block, while promises provide a more structured and scalable approach. Learning how to use both helps in reading legacy code and writing modern asynchronous JavaScript.
