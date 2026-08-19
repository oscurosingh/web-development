# Introduction to Express.js

Express.js is a lightweight web framework for Node.js. It provides a simple API for building web servers, REST APIs, and backend applications.

## What Express provides

- Route handling for HTTP requests
- Middleware for processing requests
- Helpers for sending text, HTML, JSON, and status codes
- Support for static files such as CSS, images, and browser JavaScript

## Prerequisites

Install a current Node.js LTS release, then verify Node.js and npm:

```bash
node --version
npm --version
```

## Create an Express project

Create a project folder, initialize npm, and install Express 4:

```bash
npm init -y
npm install express@4
```

`npm init -y` creates a default `package.json`. `express@4` installs the Express 4 version used in these examples.

## Your first server

Create an `app.js` file:

```js
const express = require("express");

const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
```

Start the server:

```bash
node app.js
```

Open `http://localhost:3000` in a browser. Express matches the `GET /` request and sends the response back to the browser.

## Core concepts

### Routes

A route connects an HTTP method and URL path to a handler function.

```js
app.get("/about", (req, res) => {
  res.send("About page");
});

app.post("/submit", (req, res) => {
  res.send("Data received");
});
```

| Method | Common purpose |
| --- | --- |
| `GET` | Read data |
| `POST` | Create data |
| `PUT` | Replace data |
| `PATCH` | Update part of a resource |
| `DELETE` | Remove data |

### Request and response

Every route handler receives a request object (`req`) and a response object (`res`).

```js
app.get("/api", (req, res) => {
  res.json({ name: "Express", status: "Learning" });
});
```

- `req` contains incoming information, such as URL parameters, query values, headers, and request data.
- `res` sends the result back to the client with methods such as `res.send()` and `res.json()`.

### Middleware

Middleware runs before the final route handler. It can log a request, validate data, parse JSON, or add information to `req`.

```js
app.use((req, res, next) => {
  console.log(`${req.method} ${req.path}`);
  next();
});
```

Call `next()` to pass control to the next middleware function or matching route handler.

### Route parameters and query parameters

Route parameters are part of the URL path and identify a resource.

```js
app.get("/users/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

For `/users/42`, `req.params.id` is `"42"`.

Query parameters are optional values after `?` in a URL.

```js
app.get("/products", (req, res) => {
  const { category, page = 1 } = req.query;
  res.json({ category, page });
});
```

For `/products?category=books&page=2`, `req.query.category` is `"books"` and `req.query.page` is `"2"`.

### Static files

Use `express.static()` to serve public assets. For example, `public/css/style.css` becomes available at `/css/style.css`.

```js
const path = require("path");

app.use(express.static(path.join(__dirname, "public")));
```

## Essential commands

### Manage dependencies

```bash
npm install
npm install package-name
npm install -D package-name
npm uninstall package-name
npm list --depth=0
npm run
npm run script-name
```

Use `-D` for development-only tools such as Nodemon. `npm run` lists available scripts, while `npm run script-name` runs a named script from `package.json`.

### Run the project with Nodemon

Nodemon restarts the server automatically when files change.

```bash
npm install -D nodemon
```

Add these scripts to `package.json`:

```json
{
  "scripts": {
    "start": "node app.js",
    "dev": "nodemon app.js"
  }
}
```

Run the application:

```bash
npm start
npm run dev
```

You can also run Nodemon without a global installation:

```bash
npx nodemon app.js
```

### Global packages and `npm link`

```bash
npm install -g my-global-module
npm list -g --depth=0
npm root -g
npm prefix -g
npm config get prefix
npm link my-global-module
npm uninstall -g my-global-module
```

- `npm install -g my-global-module` installs a package globally.
- `npm list -g --depth=0` lists globally installed top-level packages.
- `npm root -g` shows npm's global `node_modules` directory.
- `npm prefix -g` and `npm config get prefix` show the global npm installation prefix.
- `npm link my-global-module` links an already globally linked package into the current project.
- `npm uninstall -g my-global-module` removes a global package.

For local package development, run the following commands in order:

```bash
# Inside the local package folder
npm link

# Inside the project that uses the package
npm link my-global-module
```

To remove the local link from the consuming project:

```bash
npm unlink my-global-module
```

### Inspect and maintain packages

```bash
npm outdated
npm update
npm audit
npm audit fix
npm cache verify
npx package-name
```

- `npm outdated` lists dependencies with newer versions available.
- `npm update` updates packages within the version ranges defined in `package.json`.
- `npm audit` checks installed packages for known security vulnerabilities.
- `npm audit fix` applies compatible vulnerability fixes where available.
- `npm cache verify` validates npm's cache.
- `npx package-name` runs a package command without installing the package globally.

## Next step

Learn how to work with request data, response methods, and modular routers in the next chapter.
