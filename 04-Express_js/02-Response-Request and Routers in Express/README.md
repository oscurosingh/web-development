# Request, Response, and Routers in Express.js

This note covers how Express receives a request (`req`), sends a response (`res`), and organizes routes with `express.Router()`.

## Request object (`req`)

`req` contains information sent by the client.

```js
app.get("/users/:id", (req, res) => {
  console.log(req.params.id); // route parameter
  console.log(req.query); // query parameters
  console.log(req.headers); // request headers
  console.log(req.method); // HTTP method

  res.send("Request received");
});
```

### Route parameters: `req.params`

Route parameters are dynamic parts of a route.

```js
app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});
```

`GET /users/25` gives `req.params.id` the value `"25"`.

### Query parameters: `req.query`

Query parameters are optional values in the URL, commonly used for filtering or pagination.

```js
app.get("/products", (req, res) => {
  res.json(req.query);
});
```

`GET /products?category=books&page=2` gives:

```js
{ category: "books", page: "2" }
```

### Request body: `req.body`

For JSON request bodies, enable the JSON parser before defining routes:

```js
app.use(express.json());
```

```js
app.post("/users", (req, res) => {
  res.status(201).json({ data: req.body });
});
```

## Response object (`res`)

`res` sends the server's result back to the client. A route handler should send only one response.

```js
app.get("/", (req, res) => {
  res.send("Hello World");
});
```

### Common response methods

```js
res.send("Text or HTML");
res.json({ message: "JSON response" });
res.status(201).json({ message: "Created" });
res.sendStatus(404);
res.redirect("/login");
res.set("X-App-Name", "MyApp");
```

#### Response methods reference

| Method | Description |
| --- | --- |
| `res.download()` | Prompt a file to be downloaded. |
| `res.end()` | End the response process. |
| `res.json()` | Send a JSON response. |
| `res.jsonp()` | Send a JSON response with JSONP support. |
| `res.redirect()` | Redirect a request. |
| `res.render()` | Render a view template. |
| `res.send()` | Send a response of various types. |
| `res.sendFile()` | Send a file as an octet stream. |
| `res.sendStatus()` | Set the response status code and send its string representation as the response body. |

Common status codes: `200` OK, `201` Created, `400` Bad Request, `404` Not Found, and `500` Server Error.

## Express routers

Routers keep related routes in separate modules instead of putting every route in `app.js`.

### Create a router

```js
// routes/users.js
const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Users list" });
});

router.get("/:id", (req, res) => {
  res.json({ id: req.params.id });
});

router.post("/", (req, res) => {
  res.status(201).json({
    message: "User created",
    data: req.body,
  });
});

module.exports = router;
```

### Mount a router

```js
// app.js
const express = require("express");
const userRouter = require("./routes/users");

const app = express();

app.use(express.json());
app.use("/users", userRouter);
```

With the `/users` mount path:

| Router route | Final URL |
| --- | --- |
| `router.get("/")` | `GET /users` |
| `router.get("/:id")` | `GET /users/:id` |
| `router.post("/")` | `POST /users` |

### Router-level middleware

Middleware attached to a router runs for its matching routes.

```js
router.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

Call `next()` when the middleware should pass control to the next middleware or route handler.

## Request flow

```text
Client → Request → Express middleware/router → Route handler → Response → Client
```

`req` is the incoming data, `res` is the outgoing result, and routers group related route handlers.
