# Async, Await & Fetch API in JavaScript

## 1. Introduction

Modern JavaScript applications frequently need to perform tasks that take time, such as:

- Fetching data from an API
- Reading files
- Sending form data to a server
- Querying a database through a backend
- Loading images or other resources
- Waiting for timers
- Performing authentication requests

These operations are generally **asynchronous**.

JavaScript provides several mechanisms for handling asynchronous operations:

1. Callbacks
2. Promises
3. `async` / `await`
4. APIs such as `fetch()`

The most common modern approach is:

```javascript
async function getData() {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();

    console.log(data);
}
```

This combines:

- `async`
- `await`
- Promises
- Fetch API

---

# 2. Synchronous vs Asynchronous JavaScript

## 2.1 Synchronous Code

Synchronous code executes one statement after another.

```javascript
console.log("First");
console.log("Second");
console.log("Third");
```

Output:

```text
First
Second
Third
```

Each statement waits for the previous statement to finish.

---

## 2.2 Asynchronous Code

Asynchronous operations allow JavaScript to start a task without blocking the entire program.

```javascript
console.log("Start");

setTimeout(() => {
    console.log("Inside timeout");
}, 2000);

console.log("End");
```

Output:

```text
Start
End
Inside timeout
```

The timer takes 2 seconds, but JavaScript does not stop everything else while waiting.

---

# 3. Why Asynchronous Programming Is Important

Imagine requesting data from a server:

```text
Browser
   |
   | HTTP Request
   v
Server
   |
   | Processing
   |
   v
Response
```

The server might take:

```text
100 ms
500 ms
2 seconds
10 seconds
```

If JavaScript completely blocked while waiting, the application would become unresponsive.

Asynchronous programming allows JavaScript to continue doing other work.

---

# 4. JavaScript Promises

Before understanding `async` and `await`, you should understand **Promises**.

A Promise represents the eventual result of an asynchronous operation.

A Promise can have three states:

```text
Pending
   |
   +----> Fulfilled
   |
   +----> Rejected
```

## Pending

The operation is still running.

## Fulfilled

The operation completed successfully.

## Rejected

The operation failed.

---

# 5. Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    const success = true;

    if (success) {
        resolve("Operation successful");
    } else {
        reject("Operation failed");
    }
});
```

Here:

- `resolve()` means success
- `reject()` means failure

---

# 6. Handling a Promise with `.then()`

```javascript
promise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
```

If successful:

```text
Operation successful
```

If rejected:

```text
Operation failed
```

---

# 7. `.then()` and `.catch()`

The general structure is:

```javascript
somePromise
    .then((result) => {
        // success
    })
    .catch((error) => {
        // error
    });
```

Example:

```javascript
fetch("https://example.com")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```

---

# 8. What Is `async`?

The `async` keyword is used before a function to make it asynchronous.

```javascript
async function hello() {
    return "Hello";
}
```

An `async` function **always returns a Promise**.

For example:

```javascript
async function getMessage() {
    return "Hello World";
}

console.log(getMessage());
```

The result is a Promise rather than a normal string.

---

# 9. `async` Function with `.then()`

Because an `async` function returns a Promise, you can use `.then()`:

```javascript
async function getMessage() {
    return "Hello World";
}

getMessage().then((message) => {
    console.log(message);
});
```

Output:

```text
Hello World
```

---

# 10. What Is `await`?

The `await` keyword is used to wait for a Promise to settle.

Example:

```javascript
async function getData() {
    const result = await somePromise;
}
```

`await` can normally be used inside an `async` function.

Example:

```javascript
async function test() {
    const result = await Promise.resolve("Hello");

    console.log(result);
}

test();
```

Output:

```text
Hello
```

---

# 11. Important Point About `await`

`await` does **not** block the entire JavaScript application.

It pauses the execution of the current `async` function until the Promise settles, while JavaScript can continue handling other work.

Conceptually:

```text
async function
     |
     | await
     v
Promise pending
     |
     | JavaScript can do other work
     |
     v
Promise fulfilled
     |
     v
continue async function
```

---

# 12. `async` + `await`

The basic pattern is:

```javascript
async function functionName() {
    const result = await somePromise;
    
    console.log(result);
}
```

Example:

```javascript
async function getUser() {
    const response = await fetch("https://api.example.com/user");

    console.log(response);
}
```

---

# 13. What Is the Fetch API?

The **Fetch API** is a modern JavaScript API used to make HTTP requests.

It can be used to:

- GET data
- POST data
- PUT data
- PATCH data
- DELETE data

Basic syntax:

```javascript
fetch(url);
```

Example:

```javascript
fetch("https://example.com");
```

`fetch()` returns a **Promise**.

Therefore:

```javascript
fetch(url)
```

can be handled using:

```javascript
.then()
.catch()
```

or:

```javascript
async/await
```

---

# 14. Basic Fetch Example

```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.log(error);
    });
```

The `response` object contains information about the HTTP response.

---

# 15. Fetch with Async/Await

A cleaner approach is:

```javascript
async function getPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    console.log(response);
}

getPost();
```

---

# 16. Understanding the Fetch Response

A common beginner mistake is assuming that:

```javascript
const response = await fetch(url);
```

directly gives you the JSON data.

It does not.

It gives you a **Response object**.

```javascript
const response = await fetch(url);
```

Then you need to extract the body:

```javascript
const data = await response.json();
```

So the complete process is:

```javascript
const response = await fetch(url);
const data = await response.json();
```

Think of it as:

```text
fetch()
   |
   v
HTTP Response
   |
   | response.json()
   v
JavaScript Object
```

---

# 17. Complete GET Request

```javascript
async function getPost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1"
    );

    const data = await response.json();

    console.log(data);
}

getPost();
```

Possible output:

```javascript
{
    userId: 1,
    id: 1,
    title: "...",
    body: "..."
}
```

---

# 18. `response.json()`

The method:

```javascript
response.json()
```

reads the response body and parses JSON.

It also returns a Promise.

Therefore:

```javascript
const data = await response.json();
```

is necessary when using `await`.

---

# 19. Other Response Methods

The `Response` object provides several methods.

### JSON

```javascript
const data = await response.json();
```

### Text

```javascript
const text = await response.text();
```

### Blob

```javascript
const blob = await response.blob();
```

### ArrayBuffer

```javascript
const buffer = await response.arrayBuffer();
```

For most REST APIs, you will commonly use:

```javascript
response.json()
```

---

# 20. Checking HTTP Errors

One important feature of `fetch()` is that it does **not automatically reject the Promise for HTTP errors such as 404 or 500**.

For example:

```javascript
const response = await fetch(url);
```

A `404 Not Found` response can still produce a fulfilled Promise.

Therefore, you should check:

```javascript
response.ok
```

Example:

```javascript
async function getData() {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }

    const data = await response.json();

    console.log(data);
}
```

---

# 21. `response.ok`

`response.ok` is a Boolean.

```javascript
console.log(response.ok);
```

Usually:

```text
true
```

for successful HTTP status codes in the `200–299` range.

For example:

```text
200 OK       -> true
201 Created  -> true
204 No Content -> true

400 Bad Request -> false
401 Unauthorized -> false
404 Not Found -> false
500 Server Error -> false
```

---

# 22. `response.status`

You can access the HTTP status code:

```javascript
console.log(response.status);
```

Example:

```javascript
if (!response.ok) {
    console.log("Status:", response.status);
}
```

---

# 23. `response.statusText`

You can also access:

```javascript
console.log(response.statusText);
```

For example:

```text
OK
Not Found
Unauthorized
Internal Server Error
```

---

# 24. Error Handling with `try...catch`

When using `async/await`, use `try...catch` for error handling.

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

This is one of the most important patterns to remember.

---

# 25. Complete Fetch Pattern

A good reusable pattern is:

```javascript
async function getData() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts/1"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error("Request failed:", error);
    }
}

getData();
```

---

# 26. GET Request

GET requests are used to retrieve data.

```javascript
async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.error(error);
    }
}

getUsers();
```

---

# 27. POST Request

POST is commonly used to create new data.

```javascript
async function createPost() {
    const post = {
        title: "My Post",
        body: "Hello World",
        userId: 1
    };

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/posts",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(post)
            }
        );

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

---

# 28. Understanding `JSON.stringify()`

JavaScript object:

```javascript
const user = {
    name: "Oscuro",
    age: 21
};
```

JSON string:

```javascript
const json = JSON.stringify(user);
```

Result:

```json
{
    "name": "Oscuro",
    "age": 21
}
```

When sending JSON to a server:

```javascript
body: JSON.stringify(user)
```

---

# 29. Understanding `JSON.parse()`

The opposite operation is:

```javascript
JSON.parse()
```

Example:

```javascript
const json = '{"name":"Oscuro","age":21}';

const user = JSON.parse(json);

console.log(user.name);
```

Output:

```text
Oscuro
```

However, with Fetch you generally don't manually call `JSON.parse()` when the response is JSON.

Instead:

```javascript
const data = await response.json();
```

---

# 30. Request Headers

Headers provide additional information about an HTTP request.

Example:

```javascript
const response = await fetch(url, {
    headers: {
        "Content-Type": "application/json"
    }
});
```

Common headers include:

```text
Content-Type
Authorization
Accept
User-Agent
```

---

# 31. Authorization Header

APIs often require authentication.

Example:

```javascript
const response = await fetch(url, {
    headers: {
        "Authorization": "Bearer YOUR_TOKEN"
    }
});
```

Do not expose private API keys or secrets in frontend code unless the API is specifically designed for public client-side use.

---

# 32. PUT Request

PUT is commonly used to replace/update a resource.

```javascript
async function updatePost() {
    const post = {
        id: 1,
        title: "Updated Post",
        body: "Updated content",
        userId: 1
    };

    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(post)
        }
    );

    const data = await response.json();

    console.log(data);
}
```

---

# 33. PATCH Request

PATCH is generally used for partial updates.

```javascript
const response = await fetch(url, {
    method: "PATCH",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        title: "New Title"
    })
});
```

PUT:

```text
Replace/update the resource
```

PATCH:

```text
Update selected fields
```

---

# 34. DELETE Request

DELETE is used to remove a resource.

```javascript
async function deletePost() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts/1",
        {
            method: "DELETE"
        }
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    console.log("Post deleted");
}
```

Some DELETE endpoints return an empty response body, so don't always assume:

```javascript
await response.json();
```

will work after a DELETE.

---

# 35. Fetch Request Options

The second argument to `fetch()` is an options object.

```javascript
fetch(url, {
    method: "POST",
    headers: {},
    body: JSON.stringify(data)
});
```

Important options include:

```text
method
headers
body
credentials
mode
cache
signal
redirect
```

---

# 36. Query Parameters

Suppose an API URL is:

```text
https://example.com/users?page=2&limit=10
```

You can construct it using `URLSearchParams`.

```javascript
const params = new URLSearchParams({
    page: 2,
    limit: 10
});

const response = await fetch(
    `https://example.com/users?${params}`
);
```

This is safer and cleaner than manually concatenating every parameter.

---

# 37. Example with Search

```javascript
async function searchUsers(searchTerm) {
    const params = new URLSearchParams({
        search: searchTerm
    });

    const response = await fetch(
        `https://example.com/users?${params}`
    );

    const data = await response.json();

    console.log(data);
}
```

Call:

```javascript
searchUsers("john");
```

---

# 38. Sequential `await`

Consider:

```javascript
const user = await getUser();
const posts = await getPosts();
const comments = await getComments();
```

The operations execute sequentially:

```text
getUser()
   |
   v
getPosts()
   |
   v
getComments()
```

This is appropriate when the second operation depends on the result of the first.

---

# 39. Parallel Requests with `Promise.all()`

If requests are independent, running them sequentially may be unnecessarily slow.

Instead:

```javascript
const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
]);
```

Conceptually:

```text
             +--> getUsers()
Promise.all -|
             +--> getPosts()
```

Both requests can run concurrently.

---

# 40. Example of `Promise.all()`

```javascript
async function loadData() {
    try {
        const [usersResponse, postsResponse] = await Promise.all([
            fetch("https://example.com/users"),
            fetch("https://example.com/posts")
        ]);

        const users = await usersResponse.json();
        const posts = await postsResponse.json();

        console.log(users);
        console.log(posts);
    } catch (error) {
        console.error(error);
    }
}
```

---

# 41. `Promise.all()` Important Behavior

If one Promise rejects:

```javascript
Promise.all([
    promise1,
    promise2,
    promise3
]);
```

the combined Promise rejects.

If you need to know the result of every operation regardless of failure, consider:

```javascript
Promise.allSettled()
```

---

# 42. `Promise.allSettled()`

Example:

```javascript
const results = await Promise.allSettled([
    fetch("/users"),
    fetch("/posts"),
    fetch("/comments")
]);

console.log(results);
```

Each result tells you whether its Promise fulfilled or rejected.

This is useful when one failed request should not prevent you from processing the others.

---

# 43. `Promise.race()`

`Promise.race()` returns the result of whichever Promise settles first.

```javascript
const result = await Promise.race([
    promise1,
    promise2
]);
```

This can be useful for timeout patterns, although `AbortController` is often a better way to actually cancel a Fetch request.

---

# 44. `AbortController`

Fetch requests can be cancelled using `AbortController`.

```javascript
const controller = new AbortController();

const response = await fetch(url, {
    signal: controller.signal
});
```

Cancel the request:

```javascript
controller.abort();
```

---

# 45. Fetch Timeout Example

A timeout can be implemented with `AbortController`.

```javascript
async function fetchWithTimeout(url, timeout = 5000) {
    const controller = new AbortController();

    const timer = setTimeout(() => {
        controller.abort();
    }, timeout);

    try {
        const response = await fetch(url, {
            signal: controller.signal
        });

        return response;
    } finally {
        clearTimeout(timer);
    }
}
```

Usage:

```javascript
try {
    const response = await fetchWithTimeout(
        "https://example.com",
        5000
    );

    const data = await response.json();

    console.log(data);
} catch (error) {
    console.error(error);
}
```

---

# 46. `async` Arrow Functions

You can also use `async` with arrow functions.

```javascript
const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();

    return data;
};
```

---

# 47. Async Function Returning Data

```javascript
async function getUser() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users/1"
    );

    const user = await response.json();

    return user;
}
```

Calling:

```javascript
const user = await getUser();
```

or:

```javascript
getUser().then((user) => {
    console.log(user);
});
```

---

# 48. Returning from an Async Function

Remember:

```javascript
async function test() {
    return "Hello";
}
```

is effectively returning a resolved Promise.

Conceptually:

```javascript
function test() {
    return Promise.resolve("Hello");
}
```

Therefore:

```javascript
const result = await test();
```

works.

---

# 49. Error Handling with `throw`

You can manually throw an error:

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

The error can then be caught:

```javascript
try {
    // code
} catch (error) {
    console.error(error);
}
```

---

# 50. `finally`

`finally` runs whether the operation succeeds or fails.

```javascript
try {
    const response = await fetch(url);
    const data = await response.json();

    console.log(data);
} catch (error) {
    console.error(error);
} finally {
    console.log("Request completed");
}
```

Useful for:

- Hiding loading indicators
- Closing resources
- Resetting UI state
- Cleanup operations

---

# 51. Loading State in a Web Page

Example:

```javascript
async function loadUsers() {
    const loading = document.querySelector("#loading");

    try {
        loading.textContent = "Loading...";

        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.error(error);
    } finally {
        loading.textContent = "";
    }
}
```

---

# 52. Displaying API Data in HTML

HTML:

```html
<div id="users"></div>
```

JavaScript:

```javascript
async function loadUsers() {
    const container = document.querySelector("#users");

    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        const users = await response.json();

        users.forEach((user) => {
            const element = document.createElement("p");

            element.textContent = user.name;

            container.appendChild(element);
        });
    } catch (error) {
        container.textContent = "Failed to load users.";
        console.error(error);
    }
}

loadUsers();
```

---

# 53. Fetch API Flow

Remember this flow:

```text
fetch(url)
    |
    v
Promise<Response>
    |
    | await
    v
Response object
    |
    | response.json()
    v
Promise<Object>
    |
    | await
    v
JavaScript Object
```

Complete example:

```javascript
const response = await fetch(url);
const data = await response.json();
```

---

# 54. `fetch()` with `.then()` vs `async/await`

## Using `.then()`

```javascript
fetch(url)
    .then((response) => {
        if (!response.ok) {
            throw new Error("Request failed");
        }

        return response.json();
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.error(error);
    });
```

## Using `async/await`

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

For complex asynchronous workflows, many developers find `async/await` easier to read.

---

# 55. Common Mistake: Forgetting `await`

Incorrect:

```javascript
const response = fetch(url);

console.log(response);
```

`response` is a Promise.

Correct:

```javascript
const response = await fetch(url);
```

inside an appropriate async context.

---

# 56. Common Mistake: Forgetting `response.json()`

Incorrect:

```javascript
const response = await fetch(url);

console.log(response);
```

This prints the Response object.

Correct:

```javascript
const response = await fetch(url);
const data = await response.json();

console.log(data);
```

---

# 57. Common Mistake: Not Checking `response.ok`

This can be problematic:

```javascript
const response = await fetch(url);
const data = await response.json();
```

Better:

```javascript
const response = await fetch(url);

if (!response.ok) {
    throw new Error(`HTTP Error: ${response.status}`);
}

const data = await response.json();
```

---

# 58. Common Mistake: Using `await` Outside an Async Function

Traditional example:

```javascript
function getData() {
    const response = await fetch(url);
}
```

This is invalid because `await` is being used inside a non-async function.

Correct:

```javascript
async function getData() {
    const response = await fetch(url);
}
```

Modern JavaScript also supports **top-level `await`** in appropriate ES modules.

---

# 59. Common Mistake: Sequential Requests When They Are Independent

Less efficient:

```javascript
const users = await getUsers();
const posts = await getPosts();
```

If the operations are independent:

```javascript
const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
]);
```

This allows both operations to progress concurrently.

---

# 60. Common Mistake: Calling `.json()` Twice

Incorrect:

```javascript
const data1 = await response.json();
const data2 = await response.json();
```

A response body is generally consumable only once.

Instead:

```javascript
const data = await response.json();
```

Then reuse:

```javascript
console.log(data);
console.log(data.users);
```

---

# 61. Fetching API Data from a Function

A good practice is to separate API logic:

```javascript
async function fetchUsers() {
    const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
    );

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }

    return response.json();
}
```

Then:

```javascript
async function main() {
    try {
        const users = await fetchUsers();

        console.log(users);
    } catch (error) {
        console.error(error);
    }
}
```

This separation becomes very useful in larger applications.

---

# 62. Creating a Reusable API Function

```javascript
async function request(url, options = {}) {
    const response = await fetch(url, options);

    if (!response.ok) {
        throw new Error(
            `HTTP Error: ${response.status}`
        );
    }

    return response.json();
}
```

Now:

```javascript
const users = await request("/api/users");
const posts = await request("/api/posts");
```

POST:

```javascript
const user = await request("/api/users", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        name: "John"
    })
});
```

---

# 63. Async/Await with Event Listeners

```javascript
const button = document.querySelector("#load");

button.addEventListener("click", async () => {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);
    } catch (error) {
        console.error(error);
    }
});
```

An event listener callback can be an `async` function.

---

# 64. Async/Await and Forms

Example:

```javascript
const form = document.querySelector("#userForm");

form.addEventListener("submit", async (event) => {
    event.preventDefault();

    const user = {
        name: document.querySelector("#name").value,
        email: document.querySelector("#email").value
    };

    try {
        const response = await fetch("/api/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
});
```

---

# 65. API Response Structure

A typical API might return:

```json
{
    "success": true,
    "data": {
        "id": 1,
        "name": "John"
    },
    "message": "User found"
}
```

Access it:

```javascript
const response = await fetch(url);
const result = await response.json();

console.log(result.success);
console.log(result.data);
console.log(result.data.name);
console.log(result.message);
```

---

# 66. HTTP Methods

| Method | Common Purpose |
|---|---|
| GET | Retrieve data |
| POST | Create data |
| PUT | Replace/update data |
| PATCH | Partially update data |
| DELETE | Delete data |

Example:

```javascript
fetch(url, {
    method: "GET"
});
```

```javascript
fetch(url, {
    method: "POST"
});
```

```javascript
fetch(url, {
    method: "PUT"
});
```

```javascript
fetch(url, {
    method: "PATCH"
});
```

```javascript
fetch(url, {
    method: "DELETE"
});
```

---

# 67. Complete CRUD Example

```javascript
const API_URL = "https://example.com/api/users";

// CREATE
async function createUser(user) {
    const response = await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to create user");
    }

    return response.json();
}

// READ
async function getUsers() {
    const response = await fetch(API_URL);

    if (!response.ok) {
        throw new Error("Failed to fetch users");
    }

    return response.json();
}

// UPDATE
async function updateUser(id, user) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    });

    if (!response.ok) {
        throw new Error("Failed to update user");
    }

    return response.json();
}

// DELETE
async function deleteUser(id) {
    const response = await fetch(`${API_URL}/${id}`, {
        method: "DELETE"
    });

    if (!response.ok) {
        throw new Error("Failed to delete user");
    }
}
```

---

# 68. CORS

When making requests from a browser, you may encounter:

```text
CORS error
```

CORS means:

**Cross-Origin Resource Sharing**

Browsers restrict certain cross-origin requests unless the server allows them.

For example:

```text
Frontend:
http://localhost:3000

Backend:
http://localhost:5000
```

These are different origins.

The backend needs to provide appropriate CORS headers for permitted browser requests.

Important:

> CORS is primarily a browser security mechanism. It is not something that `fetch()` can simply disable from frontend JavaScript.

---

# 69. Fetch and Backend APIs

A common full-stack architecture is:

```text
Frontend
   |
   | fetch()
   v
Backend API
   |
   v
Database
```

For example:

```text
React / HTML / JavaScript
          |
          | HTTP Request
          v
       Express.js
          |
          v
       MongoDB
```

Frontend:

```javascript
const response = await fetch("/api/users");
const users = await response.json();
```

Backend:

```javascript
app.get("/api/users", (req, res) => {
    res.json(users);
});
```

---

# 70. Async/Await Best Practices

## 1. Always handle errors

```javascript
try {
    // async operation
} catch (error) {
    // handle error
}
```

## 2. Check `response.ok`

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

## 3. Use meaningful function names

Good:

```javascript
async function fetchUsers() {}
```

Instead of:

```javascript
async function data() {}
```

## 4. Avoid unnecessary sequential requests

Use:

```javascript
Promise.all()
```

when requests are independent.

## 5. Separate API logic from UI logic

Instead of putting every request directly inside event handlers, create reusable functions.

---

# 71. Recommended Fetch Pattern

For most applications, this is a good starting pattern:

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(
                `HTTP Error: ${response.status}`
            );
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Fetch failed:", error);

        throw error;
    }
}
```

Usage:

```javascript
async function main() {
    try {
        const data = await fetchData(
            "https://example.com/api/data"
        );

        console.log(data);
    } catch (error) {
        console.error("Unable to load data.");
    }
}

main();
```

---

# 72. Mental Model

Remember these four concepts:

### `fetch()`

Starts an HTTP request.

```javascript
fetch(url)
```

Returns:

```text
Promise<Response>
```

### `await`

Waits for a Promise inside an appropriate async context.

```javascript
await fetch(url)
```

### `response.json()`

Reads and parses JSON from the response.

```javascript
await response.json()
```

### `async`

Makes a function return a Promise and allows `await` to be used within its body.

```javascript
async function getData() {}
```

---

# 73. The Most Important Pattern

Memorize this:

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
```

This pattern covers a large percentage of basic Fetch API usage.

---

# 74. Async/Await vs Promises

| Feature | `.then()` / `.catch()` | `async/await` |
|---|---|---|
| Based on Promises | Yes | Yes |
| Readability | Good | Often easier |
| Error handling | `.catch()` | `try/catch` |
| Sequential operations | Can become nested/chained | Very readable |
| Parallel operations | `Promise.all()` | `Promise.all()` |
| Modern JavaScript | Yes | Yes |

Important:

> `async/await` does not replace Promises. It provides a cleaner syntax for working with Promises.

---

# 75. Important Interview Questions

## Q1. What is `async`?

`async` is a keyword used to define an asynchronous function. An async function always returns a Promise.

---

## Q2. What is `await`?

`await` pauses execution of the current async function until a Promise settles.

---

## Q3. What does `fetch()` return?

`fetch()` returns a Promise that resolves to a `Response` object when the request receives a response.

---

## Q4. Does `fetch()` reject for HTTP 404?

Not normally. HTTP errors such as `404` and `500` do not automatically cause the Fetch Promise to reject.

Check:

```javascript
if (!response.ok) {
    throw new Error("Request failed");
}
```

---

## Q5. Why do we use `response.json()`?

Because `fetch()` gives us a `Response` object. `response.json()` reads the response body and parses JSON into a JavaScript value.

---

## Q6. What is the difference between `JSON.stringify()` and `response.json()`?

`JSON.stringify()` converts a JavaScript value into a JSON string:

```javascript
JSON.stringify(object)
```

`response.json()` reads JSON from an HTTP response and converts it into a JavaScript value:

```javascript
await response.json()
```

---

## Q7. Can `await` be used outside an async function?

Normally, `await` is used inside an `async` function. Modern JavaScript modules also support top-level `await`.

---

## Q8. What is `Promise.all()`?

It waits for multiple Promises and resolves when all of them fulfill.

```javascript
const results = await Promise.all([
    request1,
    request2
]);
```

---

## Q9. What is `response.ok`?

It is a Boolean indicating whether the HTTP response status is successful, generally within the `200–299` range.

---

## Q10. How do you handle Fetch errors?

Use `try...catch` for rejected Promises and explicitly check `response.ok` for HTTP errors.

```javascript
try {
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status}`);
    }
} catch (error) {
    console.error(error);
}
```

---

# 76. Quick Revision

```text
Asynchronous JavaScript
        |
        v
     Promise
        |
        v
   async / await
        |
        v
     fetch()
        |
        v
  HTTP Response
        |
        v
 response.json()
        |
        v
 JavaScript Object
```

### Basic GET

```javascript
async function getData() {
    const response = await fetch(url);
    const data = await response.json();

    return data;
}
```

### GET with Error Handling

```javascript
async function getData() {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        return await response.json();
    } catch (error) {
        console.error(error);
    }
}
```

### POST

```javascript
const response = await fetch(url, {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
});
```

### Parallel Requests

```javascript
const [users, posts] = await Promise.all([
    getUsers(),
    getPosts()
]);
```

### Cancel Request

```javascript
const controller = new AbortController();

fetch(url, {
    signal: controller.signal
});

controller.abort();
```

---

# 77. Final Summary

The key concepts are:

1. **Asynchronous JavaScript** allows long-running operations to happen without blocking the entire application.

2. **Promises** represent the eventual result of asynchronous operations.

3. **`async`** makes a function asynchronous and causes it to return a Promise.

4. **`await`** provides a cleaner way to wait for a Promise inside an appropriate async context.

5. **`fetch()`** is used to make HTTP requests and returns a Promise containing a `Response`.

6. **`response.json()`** reads and parses JSON from the response body.

7. **`response.ok`** should be checked because HTTP errors such as `404` do not automatically reject Fetch.

8. **`try...catch`** is useful for handling rejected Promises and manually thrown errors.

9. **`Promise.all()`** allows independent asynchronous operations to run concurrently.

10. **`AbortController`** can be used to cancel Fetch requests.

The core pattern to remember is:

```javascript
async function fetchData(url) {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error(`HTTP Error: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Request failed:", error);
        throw error;
    }
}
```

Once you understand this pattern, you can build API calls for frontend applications, connect JavaScript applications to Express.js backends, work with REST APIs, and build more advanced asynchronous applications.