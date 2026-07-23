# Express.js


## What is Express.js?
Express.js is a fast and minimalist web framework for Node.js. It helps you build web applications and APIs easily.

## Why use Express?
- Simple and lightweight
- Easy to create routes
- Supports middleware
- Works well with APIs and frontend apps

## Install Express
```bash
npm init -y
npm install express
```

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

## Notes about Nodemon
- Nodemon automatically restarts the server when files change.
- It is very useful during development.
- It saves time instead of manually stopping and restarting the server.

## Common Express methods
- `app.get()` → read data
- `app.post()` → create data
- `app.put()` → update data
- `app.delete()` → delete data

## Quick summary
Express.js makes backend development easier by providing a clean structure for handling routes, requests, and responses in Node.js.
