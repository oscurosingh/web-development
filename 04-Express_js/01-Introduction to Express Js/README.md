d# Express.js


## What is Express.js?
Express.js is a fast and minimalist web framework for Node.js. It helps you build web applications and APIs easily.

## Why use Express?
- Simple and lightweight
- Easy to create routes
- Supports middleware
- Works well with APIs and frontend apps

## Installing Express 4
```bash
npm init -y
npm install express@4
```

`express@4` installs the stable Express 4 release used throughout these examples.

## Create a basic server
```js
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

## Important concepts
### 1. app.get()
Used to handle GET requests.

```js
app.get('/about', (req, res) => {
  res.send('About page');
});
```

### 2. app.post()
Used to handle POST requests.

```js
app.post('/submit', (req, res) => {
  res.send('Data received');
});
```

### 3. Middleware
Middleware runs between request and response.

```js
app.use((req, res, next) => {
  console.log('Middleware called');
  next();
});
```

### 4. Sending JSON
```js
app.get('/api', (req, res) => {
  res.json({ name: 'Express', status: 'Learning' });
});
```

## Useful commands
### Start the server
```bash
node app.js
```

### Install Nodemon (for auto-restart)
```bash
npm install -D nodemon
```

### Add scripts to package.json
```json
"scripts": {
  "start": "node app.js",
  "dev": "nodemon app.js"
}
```

### Run with Nodemon
```bash
npm run dev
```

### Alternative direct command
```bash
npx nodemon app.js
```

## Why Nodemon?
- Nodemon automatically restarts the server when files change.
- This makes development faster because you do not need to manually stop and restart the server after each change.
- Use Nodemon during development; use `node app.js` when you only need to run the server normally.

## Request parameters and queries

### Route parameters
Route parameters are values included in the URL path. Define one with `:` and read it from `req.params`.

```js
app.get('/users/:id', (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});
```

For `/users/42`, `req.params.id` is `"42"`.

### Query parameters
Query parameters come after `?` in a URL and are available on `req.query`.

```js
app.get('/products', (req, res) => {
  const { category, page = 1 } = req.query;
  res.json({ category, page });
});
```

For `/products?category=books&page=2`, `req.query.category` is `"books"` and `req.query.page` is `"2"`.

## Static files
Use `express.static()` to serve files such as CSS, images, and browser JavaScript from a folder.

```js
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
```

With this setup, a file at `public/css/style.css` is available at `/css/style.css`.

## Common Express methods
- `app.get()` → read data
- `app.post()` → create data
- `app.put()` → update data
- `app.delete()` → delete data

## Quick summary
Express.js makes backend development easier by providing a clean structure for handling routes, requests, and responses in Node.js.
