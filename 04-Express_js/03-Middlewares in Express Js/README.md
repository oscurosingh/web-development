# Middleware in Express.js

Middleware is a **core concept in Express.js** used to handle common tasks in the request–response cycle.

---

## What is Middleware?

Middleware is a function that runs **between request and response**.

It can:

* Read request (`req`)
* Modify request/response
* End response
* Call next middleware using `next()`

Basic structure:

```js
(req, res, next) => {
    // logic
    next();
}
```

---

## Why Middleware is Used

Without middleware, every route repeats logic like authentication, logging, validation, etc.

Middleware helps to:

* Reuse code
* Keep routes clean
* Centralize common logic

---

## Common Uses

Middleware is used for:

* Logging requests
* Authentication & authorization
* Validation
* Parsing request body
* Error handling
* Serving static files

---

## next() Function

* `next()` moves request to next middleware
* Without `next()` or `res.send()`, request hangs

```js
app.use((req, res, next) => {
    console.log("Middleware");
    next();
});
```

---

## Types of Middleware

### 1. Application-Level

Applies to entire app:

```js
app.use(logger);
```

### 2. Route-Level

Applies to specific route:

```js
app.get("/profile", auth, handler);
```

### 3. Router-Level

Applies to router:

```js
router.use(auth);
```

---

## Built-in Middleware

### express.json()

Parses JSON body:

```js
app.use(express.json());
```

### express.urlencoded()

Parses form data:

```js
app.use(express.urlencoded({ extended: true }));
```

### express.static()

Serves static files:

```js
app.use(express.static("public"));
```

---

## Custom Middleware Examples

### Logger

```js
const logger = (req, res, next) => {
    console.log(req.method, req.url);
    next();
};
```

### Authentication

```js
const auth = (req, res, next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({ message: "Unauthorized" });
    }
    next();
};
```

### Validation

```js
const validate = (req, res, next) => {
    if (!req.body.name) {
        return res.status(400).json({ message: "Name required" });
    }
    next();
};
```

---

## Adding Data to req

Middleware can attach data:

```js
req.user = { id: 1, role: "admin" };
```

---

## Middleware Flow

```text
Request → Middleware → next() → Route → Response
```

---

## Error Handling Middleware

Special middleware with 4 parameters:

```js
(err, req, res, next)
```

Example:

```js
app.use((err, req, res, next) => {
    res.status(500).json({ message: err.message });
});
```

Pass error:

```js
next(error);
```

---

## 404 Middleware

Handles unknown routes:

```js
app.use((req, res) => {
    res.status(404).json({ message: "Not Found" });
});
```

---

## Middleware Order (Important)

Order matters:

```text
Built-in middleware → Custom middleware → Routes → 404 → Error handler
```

---

## Key Rules

* Always call `next()` or send response
* Middleware runs in order
* Use `next(error)` for errors
* Keep middleware small and focused

---

## Quick Summary

* Middleware = function between request & response
* Used for logging, auth, validation, etc.
* Uses `next()` to continue flow
* Can modify `req` and `res`
* Central part of Express architecture

---

## Final Flow Model

```text
Request → Middleware → Middleware → Route → Response
```

or on error:

```text
Request → Middleware → next(error) → Error Handler → Response
```

---

**Middleware makes Express apps modular, reusable, and clean.**
