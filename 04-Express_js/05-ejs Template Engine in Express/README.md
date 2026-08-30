# EJS Template Engine & Bootstrap — Complete Notes

> **Topics:** EJS Template Engine in Express.js + Bootstrap
> **Environment:** Node.js + Express.js

---

# 📚 Table of Contents

## Part I — EJS Template Engine

1. [Introduction to Template Engines](#1-introduction-to-template-engines)
2. [What is EJS?](#2-what-is-ejs)
3. [Why Use EJS with Express?](#3-why-use-ejs-with-express)
4. [Installing EJS](#4-installing-ejs)
5. [EJS Project Structure](#5-ejs-project-structure)
6. [Configuring EJS in Express](#6-configuring-ejs-in-express)
7. [Creating Your First EJS File](#7-creating-your-first-ejs-file)
8. [Rendering EJS Pages](#8-rendering-ejs-pages)
9. [Passing Data from Express to EJS](#9-passing-data-from-express-to-ejs)
10. [EJS Tags](#10-ejs-tags)
11. [Displaying Dynamic Data](#11-displaying-dynamic-data)
12. [JavaScript Expressions in EJS](#12-javascript-expressions-in-ejs)
13. [Conditionals](#13-conditionals)
14. [Loops](#14-loops)
15. [Arrays and Objects](#15-arrays-and-objects)
16. [EJS Forms](#16-ejs-forms)
17. [Reusable Components with Partials](#17-reusable-components-with-partials)
18. [Layouts and Common Page Structure](#18-layouts-and-common-page-structure)
19. [Static Files with EJS](#19-static-files-with-ejs)
20. [EJS with Express Routes](#20-ejs-with-express-routes)
21. [EJS with Query Parameters](#21-ejs-with-query-parameters)
22. [EJS with URL Parameters](#22-ejs-with-url-parameters)
23. [EJS with JSON/Data from Backend](#23-ejs-with-jsondata-from-backend)
24. [Common EJS Mistakes](#24-common-ejs-mistakes)
25. [EJS Best Practices](#25-ejs-best-practices)
26. [Complete EJS Example](#26-complete-ejs-example)

## Part II — Bootstrap

27. [Introduction to Bootstrap](#27-introduction-to-bootstrap)
28. [Why Use Bootstrap?](#28-why-use-bootstrap)
29. [Installing Bootstrap](#29-installing-bootstrap)
30. [Using Bootstrap with CDN](#30-using-bootstrap-with-cdn)
31. [Bootstrap Container](#31-bootstrap-container)
32. [Bootstrap Grid System](#32-bootstrap-grid-system)
33. [Rows and Columns](#33-rows-and-columns)
34. [Responsive Design](#34-responsive-design)
35. [Bootstrap Typography](#35-bootstrap-typography)
36. [Bootstrap Colors](#36-bootstrap-colors)
37. [Spacing Utilities](#37-spacing-utilities)
38. [Display Utilities](#38-display-utilities)
39. [Flexbox Utilities](#39-flexbox-utilities)
40. [Buttons](#40-buttons)
41. [Cards](#41-cards)
42. [Navbar](#42-navbar)
43. [Forms](#43-forms)
44. [Alerts](#44-alerts)
45. [Badges](#45-badges)
46. [Tables](#46-tables)
47. [Images](#47-images)
48. [Bootstrap Icons](#48-bootstrap-icons)
49. [Bootstrap with EJS](#49-bootstrap-with-ejs)
50. [Complete Express + EJS + Bootstrap Project](#50-complete-express--ejs--bootstrap-project)
51. [Quick Reference](#51-quick-reference)

---

# PART I — EJS TEMPLATE ENGINE

---

# 1. Introduction to Template Engines

A **template engine** allows us to create HTML pages using dynamic data.

Normally, HTML is static:

```html
<h1>Hello Shubham</h1>
```

But in a web application, the content often needs to change dynamically.

For example:

```text
Welcome, Shubham
Welcome, Rahul
Welcome, Priya
```

Instead of creating separate HTML files, we can use a template engine.

A template engine allows us to write:

```html
<h1>Welcome, <%= username %></h1>
```

The server can then provide the value of `username`.

If:

```js
username = "Shubham";
```

The generated HTML becomes:

```html
<h1>Welcome, Shubham</h1>
```

---

# 2. What is EJS?

**EJS** stands for:

> **Embedded JavaScript Templates**

EJS is a template engine that allows us to embed JavaScript inside HTML.

EJS files use the:

```text
.ejs
```

extension.

Example:

```text
views/
└── home.ejs
```

Inside an EJS file:

```html
<h1>Hello <%= name %></h1>
```

The Express server can send the value of `name` to the template.

---

# 3. Why Use EJS with Express?

Express.js normally handles:

* Routes
* HTTP requests
* HTTP responses
* Middleware
* APIs
* Server-side logic

EJS handles:

* HTML generation
* Dynamic content
* Loops
* Conditions
* Reusable HTML components

Together:

```text
Browser
   ↓
Express Route
   ↓
Backend Logic
   ↓
EJS Template
   ↓
Generated HTML
   ↓
Browser
```

Example:

```js
app.get("/profile", (req, res) => {
    res.render("profile", {
        name: "Shubham",
        age: 21
    });
});
```

EJS:

```html
<h1><%= name %></h1>
<p>Age: <%= age %></p>
```

---

# 4. Installing EJS

First create a Node.js project.

```bash
mkdir ejs-project
cd ejs-project
npm init -y
```

Install Express:

```bash
npm install express
```

Install EJS:

```bash
npm install ejs
```

Or install both together:

```bash
npm install express ejs
```

---

# 5. EJS Project Structure

A basic project can look like:

```text
ejs-project/
│
├── node_modules/
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
├── views/
│   ├── index.ejs
│   ├── about.ejs
│   └── profile.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

### Important folders

### `views/`

Contains EJS templates.

```text
views/
├── index.ejs
├── about.ejs
└── profile.ejs
```

### `public/`

Contains static files:

```text
public/
├── css/
├── js/
└── images/
```

### `app.js`

Main Express application.

---

# 6. Configuring EJS in Express

Create:

```text
app.js
```

Add:

```js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

The important line is:

```js
app.set("view engine", "ejs");
```

This tells Express:

> Use EJS as the template engine.

Express automatically looks for templates inside:

```text
views/
```

---

# 7. Creating Your First EJS File

Create:

```text
views/index.ejs
```

Add:

```html
<!DOCTYPE html>
<html>
<head>
    <title>Home</title>
</head>
<body>

    <h1>Hello World</h1>

</body>
</html>
```

Now create a route:

```js
app.get("/", (req, res) => {
    res.render("index");
});
```

Complete example:

```js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

Visit:

```text
http://localhost:3000
```

---

# 8. Rendering EJS Pages

Express uses:

```js
res.render()
```

to render an EJS template.

Example:

```js
res.render("index");
```

This looks for:

```text
views/index.ejs
```

You don't need to write:

```js
res.render("index.ejs");
```

Although it can work, the normal convention is:

```js
res.render("index");
```

---

# 9. Passing Data from Express to EJS

Express can pass data to an EJS template.

```js
app.get("/", (req, res) => {

    res.render("index", {
        name: "Shubham",
        age: 21
    });

});
```

EJS:

```html
<h1>Hello <%= name %></h1>

<p>Your age is <%= age %></p>
```

Output:

```text
Hello Shubham

Your age is 21
```

---

# 10. EJS Tags

EJS provides special tags for embedding JavaScript.

## 10.1 Output Tag

```ejs
<%= value %>
```

Outputs the value and escapes HTML.

Example:

```ejs
<h1><%= name %></h1>
```

---

## 10.2 Unescaped Output

```ejs
<%- value %>
```

This outputs HTML without escaping it.

Example:

```js
const message = "<strong>Hello</strong>";
```

EJS:

```ejs
<%- message %>
```

Output:

```html
<strong>Hello</strong>
```

### Security warning

Do not use `<%- %>` with untrusted user input because it can introduce **XSS vulnerabilities**.

Prefer:

```ejs
<%= userInput %>
```

for normal user-generated content.

---

## 10.3 JavaScript Code Tag

```ejs
<% code %>
```

Used for JavaScript logic without directly outputting the result.

Example:

```ejs
<% if (isLoggedIn) { %>

    <p>Welcome back!</p>

<% } %>
```

---

## 10.4 Comment

```ejs
<%# This is an EJS comment %>
```

The comment will not be sent to the browser.

---

## 10.5 Include

```ejs
<%- include("header") %>
```

Used for reusable templates.

---

# 11. Displaying Dynamic Data

Suppose Express sends:

```js
app.get("/", (req, res) => {

    res.render("index", {
        username: "Shubham",
        course: "Data Science"
    });

});
```

EJS:

```html
<h1>Welcome <%= username %></h1>

<p>Course: <%= course %></p>
```

Output:

```text
Welcome Shubham
Course: Data Science
```

---

# 12. JavaScript Expressions in EJS

EJS can evaluate JavaScript expressions.

Example:

```ejs
<h1><%= 10 + 20 %></h1>
```

Output:

```text
30
```

Another example:

```ejs
<p><%= name.toUpperCase() %></p>
```

If:

```js
name = "shubham"
```

Output:

```text
SHUBHAM
```

You can also use:

```ejs
<p><%= name.length %></p>
```

---

# 13. Conditionals

EJS allows normal JavaScript conditional statements.

## if

```ejs
<% if (age >= 18) { %>

    <p>You are an adult.</p>

<% } %>
```

---

## if...else

```ejs
<% if (isLoggedIn) { %>

    <h1>Welcome back!</h1>

<% } else { %>

    <h1>Please login.</h1>

<% } %>
```

---

## if...else if...else

```ejs
<% if (marks >= 90) { %>

    <p>Grade A+</p>

<% } else if (marks >= 80) { %>

    <p>Grade A</p>

<% } else if (marks >= 60) { %>

    <p>Grade B</p>

<% } else { %>

    <p>Grade C</p>

<% } %>
```

---

# 14. Loops

Loops are commonly used to display arrays.

## for loop

```ejs
<% for (let i = 0; i < users.length; i++) { %>

    <p><%= users[i] %></p>

<% } %>
```

---

## forEach

```ejs
<% users.forEach(user => { %>

    <p><%= user %></p>

<% }) %>
```

---

## Example

Express:

```js
app.get("/users", (req, res) => {

    const users = [
        "Shubham",
        "Rahul",
        "Priya",
        "Aman"
    ];

    res.render("users", { users });

});
```

EJS:

```ejs
<h1>Users</h1>

<ul>

<% users.forEach(user => { %>

    <li><%= user %></li>

<% }) %>

</ul>
```

---

# 15. Arrays and Objects

Backend:

```js
const student = {
    name: "Shubham",
    age: 21,
    course: "BSc Physics"
};
```

Send it:

```js
res.render("student", {
    student
});
```

EJS:

```ejs
<h1><%= student.name %></h1>

<p>Age: <%= student.age %></p>

<p>Course: <%= student.course %></p>
```

---

## Array of Objects

Backend:

```js
const students = [
    {
        name: "Shubham",
        marks: 90
    },
    {
        name: "Rahul",
        marks: 85
    },
    {
        name: "Priya",
        marks: 95
    }
];

res.render("students", { students });
```

EJS:

```ejs
<% students.forEach(student => { %>

    <h2><%= student.name %></h2>

    <p>Marks: <%= student.marks %></p>

<% }) %>
```

---

# 16. EJS Forms

EJS is often used to create forms.

```html
<form action="/submit" method="POST">

    <input
        type="text"
        name="username"
        placeholder="Enter username"
    >

    <button type="submit">
        Submit
    </button>

</form>
```

To read form data in Express:

```js
app.use(express.urlencoded({ extended: true }));
```

Then:

```js
app.post("/submit", (req, res) => {

    console.log(req.body);

    res.send("Form submitted");

});
```

If the user enters:

```text
Shubham
```

You can access:

```js
req.body.username
```

---

# 17. Reusable Components with Partials

A large application should not duplicate HTML.

For example, many pages may have the same:

* Navbar
* Footer
* Header
* Sidebar

EJS provides **partials** using `include()`.

Recommended structure:

```text
views/
│
├── partials/
│   ├── header.ejs
│   ├── navbar.ejs
│   └── footer.ejs
│
├── index.ejs
├── about.ejs
└── contact.ejs
```

---

## Header Partial

`views/partials/header.ejs`

```html
<!DOCTYPE html>
<html>

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>My Website</title>

</head>

<body>
```

---

## Navbar Partial

```html
<nav>
    <a href="/">Home</a>
    <a href="/about">About</a>
    <a href="/contact">Contact</a>
</nav>
```

---

## Footer Partial

```html
<footer>

    <p>© 2026 My Website</p>

</footer>

</body>
</html>
```

---

## Including Partials

In `index.ejs`:

```ejs
<%- include("partials/header") %>

<%- include("partials/navbar") %>

<h1>Home Page</h1>

<%- include("partials/footer") %>
```

This prevents repeated HTML.

---

# 18. Layouts and Common Page Structure

A common layout looks like:

```text
Header
Navbar
Main Content
Footer
```

Using partials:

```ejs
<%- include("partials/header") %>

<%- include("partials/navbar") %>

<main>

    <!-- Page-specific content -->

</main>

<%- include("partials/footer") %>
```

For more advanced applications, packages such as `express-ejs-layouts` can be used to provide layout functionality.

---

# 19. Static Files with EJS

Express needs to serve CSS, JavaScript, and images.

Project:

```text
public/
├── css/
│   └── style.css
├── js/
│   └── script.js
└── images/
```

Configure:

```js
app.use(express.static("public"));
```

Now:

```text
public/css/style.css
```

can be referenced as:

```html
<link rel="stylesheet" href="/css/style.css">
```

JavaScript:

```html
<script src="/js/script.js"></script>
```

Image:

```html
<img src="/images/logo.png">
```

---

# 20. EJS with Express Routes

Example:

```js
app.get("/", (req, res) => {
    res.render("index");
});

app.get("/about", (req, res) => {
    res.render("about");
});

app.get("/contact", (req, res) => {
    res.render("contact");
});
```

Corresponding templates:

```text
views/
├── index.ejs
├── about.ejs
└── contact.ejs
```

---

# 21. EJS with Query Parameters

URL:

```text
/profile?name=Shubham
```

Express:

```js
app.get("/profile", (req, res) => {

    const name = req.query.name;

    res.render("profile", {
        name
    });

});
```

EJS:

```ejs
<h1>Hello <%= name %></h1>
```

---

# 22. EJS with URL Parameters

Route:

```js
app.get("/users/:username", (req, res) => {

    const username = req.params.username;

    res.render("profile", {
        username
    });

});
```

URL:

```text
/users/shubham
```

EJS:

```ejs
<h1>Welcome <%= username %></h1>
```

---

# 23. EJS with JSON/Data from Backend

EJS becomes particularly useful when data comes from:

* Database
* API
* JSON
* JavaScript objects
* Authentication system

Example:

```js
app.get("/products", async (req, res) => {

    const products = [
        {
            name: "Laptop",
            price: 50000
        },
        {
            name: "Keyboard",
            price: 2000
        }
    ];

    res.render("products", {
        products
    });

});
```

EJS:

```ejs
<h1>Products</h1>

<% products.forEach(product => { %>

    <div>

        <h2><%= product.name %></h2>

        <p>₹<%= product.price %></p>

    </div>

<% }) %>
```

---

# 24. Common EJS Mistakes

## Mistake 1 — Forgetting the view engine

Incorrect:

```js
const app = express();
```

Correct:

```js
app.set("view engine", "ejs");
```

---

## Mistake 2 — Wrong folder

Express normally expects:

```text
views/
```

not:

```text
view/
```

---

## Mistake 3 — Wrong extension

Correct:

```text
index.ejs
```

Not:

```text
index.html
```

---

## Mistake 4 — Using `=` incorrectly

Dynamic output:

```ejs
<%= name %>
```

JavaScript logic:

```ejs
<% if (name) { %>
```

---

## Mistake 5 — Forgetting to close EJS blocks

Incorrect:

```ejs
<% if (loggedIn) { %>

<h1>Welcome</h1>
```

Correct:

```ejs
<% if (loggedIn) { %>

<h1>Welcome</h1>

<% } %>
```

---

# 25. EJS Best Practices

### 1. Keep templates clean

Avoid putting complicated business logic inside EJS.

Bad:

```ejs
<% /* huge business logic */ %>
```

Prefer doing processing in your route/controller.

---

### 2. Use partials

Instead of repeating:

```html
<nav>...</nav>
```

use:

```ejs
<%- include("partials/navbar") %>
```

---

### 3. Escape user input

Prefer:

```ejs
<%= userInput %>
```

instead of:

```ejs
<%- userInput %>
```

when displaying untrusted data.

---

### 4. Use meaningful variable names

Good:

```js
res.render("profile", {
    username,
    profileImage,
    followers
});
```

---

# 26. Complete EJS Example

## `app.js`

```js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

app.get("/", (req, res) => {

    const user = {
        name: "Shubham",
        course: "Data Science",
        skills: [
            "Python",
            "JavaScript",
            "Machine Learning"
        ]
    };

    res.render("index", {
        user
    });

});

app.listen(3000, () => {
    console.log("Server running on http://localhost:3000");
});
```

## `views/index.ejs`

```ejs
<!DOCTYPE html>

<html>

<head>

    <title>Profile</title>

    <link rel="stylesheet" href="/css/style.css">

</head>

<body>

    <h1>Welcome <%= user.name %></h1>

    <h2>Course: <%= user.course %></h2>

    <h3>Skills</h3>

    <ul>

        <% user.skills.forEach(skill => { %>

            <li><%= skill %></li>

        <% }) %>

    </ul>

</body>

</html>
```

---

# PART II — BOOTSTRAP

---

# 27. Introduction to Bootstrap

**Bootstrap** is a popular front-end CSS framework used to create responsive and modern websites quickly.

Bootstrap provides ready-made:

* CSS classes
* Components
* Responsive grid
* Buttons
* Cards
* Forms
* Navbar
* Alerts
* Modals
* Tables
* Utilities
* JavaScript components

Instead of writing everything from scratch:

```css
button {
    padding: 10px 20px;
    border-radius: 5px;
    ...
}
```

Bootstrap provides ready-to-use classes:

```html
<button class="btn btn-primary">
    Click Me
</button>
```

---

# 28. Why Use Bootstrap?

Bootstrap helps with:

### Responsive design

Websites work on:

```text
Mobile
Tablet
Laptop
Desktop
```

### Faster development

Instead of creating CSS from scratch:

```html
<button class="btn btn-primary">
    Login
</button>
```

### Consistent design

Bootstrap provides a consistent design system.

### Ready-made components

Examples:

```text
Navbar
Card
Modal
Alert
Button
Form
Table
Carousel
Dropdown
```

---

# 29. Installing Bootstrap

There are several ways to use Bootstrap.

### Method 1 — CDN

Best for beginners.

### Method 2 — npm

Useful for larger projects and build systems.

---

## Install using npm

```bash
npm install bootstrap
```

However, in a simple Express + EJS project, CDN is often easier.

---

# 30. Using Bootstrap with CDN

Inside the `<head>`:

```html
<link
    href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
    rel="stylesheet"
>
```

Before closing `</body>`:

```html
<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js">
</script>
```

A basic page:

```html
<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1">

    <title>Bootstrap</title>

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet">

</head>

<body>

    <div class="container">

        <h1 class="text-primary">
            Hello Bootstrap
        </h1>

    </div>

    <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js">
    </script>

</body>

</html>
```

> **Note:** The version in your project should be kept consistent with the Bootstrap documentation/version you choose.

---

# 31. Bootstrap Container

Containers control the width of content.

## `.container`

```html
<div class="container">

    <h1>Hello</h1>

</div>
```

It provides responsive maximum widths.

---

## `.container-fluid`

Takes the full available width.

```html
<div class="container-fluid">

    <h1>Full Width</h1>

</div>
```

---

# 32. Bootstrap Grid System

Bootstrap uses a **12-column grid system**.

Example:

```html
<div class="container">

    <div class="row">

        <div class="col-6">
            Left
        </div>

        <div class="col-6">
            Right
        </div>

    </div>

</div>
```

The two columns each occupy:

```text
6 + 6 = 12
```

---

# 33. Rows and Columns

Basic structure:

```text
container
   ↓
 row
   ↓
 columns
```

Example:

```html
<div class="container">

    <div class="row">

        <div class="col">
            Column 1
        </div>

        <div class="col">
            Column 2
        </div>

        <div class="col">
            Column 3
        </div>

    </div>

</div>
```

---

# 34. Responsive Design

Bootstrap provides responsive breakpoints.

Common prefixes:

| Prefix | Typical breakpoint |
| ------ | -----------------: |
| `sm`   |            ≥ 576px |
| `md`   |            ≥ 768px |
| `lg`   |            ≥ 992px |
| `xl`   |           ≥ 1200px |
| `xxl`  |           ≥ 1400px |

Example:

```html
<div class="col-12 col-md-6 col-lg-4">
    Product
</div>
```

Meaning:

```text
Mobile  → 12 columns
Tablet  → 6 columns
Desktop → 4 columns
```

This is one of Bootstrap's most useful features.

---

# 35. Bootstrap Typography

Bootstrap provides typography utilities.

## Headings

```html
<h1>Heading</h1>
<h2>Heading</h2>
<h3>Heading</h3>
```

## Display headings

```html
<h1 class="display-1">
    Large Heading
</h1>
```

Available:

```text
display-1
display-2
display-3
display-4
display-5
display-6
```

---

## Text alignment

```html
<p class="text-start">
    Left aligned
</p>

<p class="text-center">
    Center aligned
</p>

<p class="text-end">
    Right aligned
</p>
```

---

# 36. Bootstrap Colors

Bootstrap provides contextual colors.

Examples:

```html
<p class="text-primary">
    Primary
</p>

<p class="text-success">
    Success
</p>

<p class="text-danger">
    Danger
</p>

<p class="text-warning">
    Warning
</p>

<p class="text-info">
    Information
</p>

<p class="text-secondary">
    Secondary
</p>

<p class="text-dark">
    Dark
</p>

<p class="text-muted">
    Muted
</p>
```

Background colors:

```html
<div class="bg-primary">
    Content
</div>
```

Other examples:

```text
bg-success
bg-danger
bg-warning
bg-info
bg-dark
bg-light
```

---

# 37. Spacing Utilities

Bootstrap uses:

```text
m = margin
p = padding
```

Directions:

```text
t = top
b = bottom
s = start
e = end
x = left + right
y = top + bottom
```

Examples:

```html
<div class="mt-3">
    Margin top
</div>
```

```html
<div class="mb-4">
    Margin bottom
</div>
```

```html
<div class="px-5">
    Horizontal padding
</div>
```

```html
<div class="py-3">
    Vertical padding
</div>
```

Common spacing values:

```text
0
1
2
3
4
5
```

---

# 38. Display Utilities

Bootstrap provides:

```text
d-none
d-block
d-inline
d-inline-block
d-flex
```

Example:

```html
<div class="d-none">
    Hidden
</div>
```

Responsive example:

```html
<div class="d-none d-md-block">
    Visible from medium screens
</div>
```

---

# 39. Flexbox Utilities

Bootstrap provides Flexbox utilities.

```html
<div class="d-flex">
    ...
</div>
```

Center content:

```html
<div class="d-flex justify-content-center align-items-center">

    <h1>Centered</h1>

</div>
```

Useful classes:

```text
d-flex
flex-row
flex-column
justify-content-start
justify-content-center
justify-content-end
justify-content-between
align-items-start
align-items-center
align-items-end
```

---

# 40. Buttons

Basic button:

```html
<button class="btn btn-primary">
    Primary
</button>
```

Other variants:

```html
<button class="btn btn-secondary">
    Secondary
</button>

<button class="btn btn-success">
    Success
</button>

<button class="btn btn-danger">
    Delete
</button>

<button class="btn btn-warning">
    Warning
</button>
```

Outline buttons:

```html
<button class="btn btn-outline-primary">
    Outline
</button>
```

Button sizes:

```html
<button class="btn btn-primary btn-lg">
    Large
</button>

<button class="btn btn-primary btn-sm">
    Small
</button>
```

---

# 41. Cards

Cards are useful for:

* Products
* Profiles
* Blog posts
* Dashboard items
* Courses

Example:

```html
<div class="card" style="width: 18rem;">

    <img
        src="/images/product.jpg"
        class="card-img-top"
        alt="Product">

    <div class="card-body">

        <h5 class="card-title">
            Laptop
        </h5>

        <p class="card-text">
            Powerful laptop for developers.
        </p>

        <a href="#" class="btn btn-primary">
            Buy Now
        </a>

    </div>

</div>
```

---

# 42. Navbar

Basic navbar:

```html
<nav class="navbar navbar-expand-lg bg-body-tertiary">

    <div class="container">

        <a class="navbar-brand" href="/">
            My Website
        </a>

        <div>

            <a class="nav-link d-inline-block"
               href="/">
                Home
            </a>

            <a class="nav-link d-inline-block"
               href="/about">
                About
            </a>

        </div>

    </div>

</nav>
```

For responsive navigation, Bootstrap's navbar component can use its collapse functionality.

---

# 43. Forms

Bootstrap provides form styling.

```html
<form>

    <div class="mb-3">

        <label class="form-label">
            Email
        </label>

        <input
            type="email"
            class="form-control"
            placeholder="Enter email">

    </div>

    <div class="mb-3">

        <label class="form-label">
            Password
        </label>

        <input
            type="password"
            class="form-control"
            placeholder="Enter password">

    </div>

    <button
        type="submit"
        class="btn btn-primary">

        Login

    </button>

</form>
```

---

# 44. Alerts

Alerts are used for messages.

```html
<div class="alert alert-success">
    Successfully saved!
</div>
```

Other types:

```html
<div class="alert alert-danger">
    Something went wrong.
</div>

<div class="alert alert-warning">
    Warning!
</div>

<div class="alert alert-info">
    Information.
</div>
```

---

# 45. Badges

Badges are useful for statuses and labels.

```html
<span class="badge text-bg-primary">
    New
</span>
```

Examples:

```html
<span class="badge text-bg-success">
    Active
</span>

<span class="badge text-bg-danger">
    Failed
</span>

<span class="badge text-bg-warning">
    Pending
</span>
```

---

# 46. Tables

Basic Bootstrap table:

```html
<table class="table">

    <thead>

        <tr>
            <th>Name</th>
            <th>Course</th>
            <th>Marks</th>
        </tr>

    </thead>

    <tbody>

        <tr>
            <td>Shubham</td>
            <td>Physics</td>
            <td>90</td>
        </tr>

        <tr>
            <td>Rahul</td>
            <td>Computer Science</td>
            <td>85</td>
        </tr>

    </tbody>

</table>
```

Responsive table:

```html
<div class="table-responsive">

    <table class="table">
        ...
    </table>

</div>
```

---

# 47. Images

Responsive image:

```html
<img
    src="/images/photo.jpg"
    class="img-fluid"
    alt="Photo">
```

Rounded image:

```html
<img
    src="/images/photo.jpg"
    class="rounded"
    alt="Photo">
```

Circle image:

```html
<img
    src="/images/photo.jpg"
    class="rounded-circle"
    alt="Photo">
```

---

# 48. Bootstrap Icons

Bootstrap Icons is a separate icon library.

You can include its CSS through a CDN.

Example:

```html
<i class="bi bi-house"></i>
```

Common icons:

```text
bi-house
bi-person
bi-search
bi-heart
bi-trash
bi-check
bi-x
bi-github
```

Always check the Bootstrap Icons documentation for the exact icon name/version you are using.

---

# 49. Bootstrap with EJS

This is where EJS and Bootstrap become especially useful.

EJS controls:

```text
Dynamic Data
Loops
Conditions
Server-side HTML
```

Bootstrap controls:

```text
Styling
Layout
Responsive Design
Components
```

Example backend:

```js
app.get("/products", (req, res) => {

    const products = [
        {
            name: "Laptop",
            price: 50000
        },
        {
            name: "Keyboard",
            price: 2000
        },
        {
            name: "Mouse",
            price: 1000
        }
    ];

    res.render("products", {
        products
    });

});
```

EJS:

```ejs
<!DOCTYPE html>

<html>

<head>

    <title>Products</title>

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1">

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet">

</head>

<body>

<div class="container py-5">

    <h1 class="text-center mb-5">
        Products
    </h1>

    <div class="row g-4">

        <% products.forEach(product => { %>

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100">

                    <div class="card-body">

                        <h5 class="card-title">
                            <%= product.name %>
                        </h5>

                        <p class="card-text">
                            ₹<%= product.price %>
                        </p>

                        <button class="btn btn-primary">
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        <% }) %>

    </div>

</div>

</body>

</html>
```

Here:

```text
Express
   ↓
Provides product data
   ↓
EJS
   ↓
Loops through products
   ↓
Bootstrap
   ↓
Styles the cards
   ↓
HTML sent to browser
```

---

# 50. Complete Express + EJS + Bootstrap Project

## Project Structure

```text
my-app/
│
├── node_modules/
│
├── public/
│   ├── css/
│   │   └── style.css
│   ├── js/
│   │   └── script.js
│   └── images/
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   ├── navbar.ejs
│   │   └── footer.ejs
│   │
│   ├── index.ejs
│   └── products.ejs
│
├── app.js
├── package.json
└── package-lock.json
```

---

## Step 1 — Initialize Project

```bash
mkdir my-app
cd my-app

npm init -y

npm install express ejs
```

---

## Step 2 — Create Express Server

`app.js`

```js
const express = require("express");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({
    extended: true
}));

app.use(express.static("public"));

app.get("/", (req, res) => {

    res.render("index", {
        title: "Home",
        username: "Shubham"
    });

});

app.get("/products", (req, res) => {

    const products = [
        {
            name: "Laptop",
            price: 50000
        },
        {
            name: "Keyboard",
            price: 2000
        },
        {
            name: "Mouse",
            price: 1000
        }
    ];

    res.render("products", {
        products
    });

});

app.listen(3000, () => {

    console.log(
        "Server running on http://localhost:3000"
    );

});
```

---

## Step 3 — Header Partial

`views/partials/header.ejs`

```ejs
<!DOCTYPE html>

<html>

<head>

    <meta charset="UTF-8">

    <meta
        name="viewport"
        content="width=device-width, initial-scale=1">

    <title><%= title || "My App" %></title>

    <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/css/bootstrap.min.css"
        rel="stylesheet">

</head>

<body>
```

---

## Step 4 — Navbar

`views/partials/navbar.ejs`

```ejs
<nav class="navbar navbar-expand-lg bg-dark navbar-dark">

    <div class="container">

        <a
            class="navbar-brand"
            href="/">
            My App
        </a>

        <div class="navbar-nav">

            <a
                class="nav-link"
                href="/">
                Home
            </a>

            <a
                class="nav-link"
                href="/products">
                Products
            </a>

        </div>

    </div>

</nav>
```

---

## Step 5 — Footer

`views/partials/footer.ejs`

```ejs
<footer class="bg-dark text-white text-center py-3 mt-5">

    <p class="mb-0">
        © 2026 My App
    </p>

</footer>

<script
    src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js">
</script>

</body>

</html>
```

---

## Step 6 — Home Page

`views/index.ejs`

```ejs
<%- include("partials/header") %>

<%- include("partials/navbar") %>

<div class="container py-5">

    <div class="text-center">

        <h1 class="display-4">
            Welcome <%= username %>
        </h1>

        <p class="lead">
            Express + EJS + Bootstrap
        </p>

        <a
            href="/products"
            class="btn btn-primary">
            View Products
        </a>

    </div>

</div>

<%- include("partials/footer") %>
```

---

## Step 7 — Products Page

`views/products.ejs`

```ejs
<%- include("partials/header") %>

<%- include("partials/navbar") %>

<div class="container py-5">

    <h1 class="text-center mb-5">
        Products
    </h1>

    <div class="row g-4">

        <% products.forEach(product => { %>

            <div class="col-12 col-md-6 col-lg-4">

                <div class="card h-100 shadow-sm">

                    <div class="card-body">

                        <h5 class="card-title">
                            <%= product.name %>
                        </h5>

                        <p class="card-text">

                            Price:
                            <strong>
                                ₹<%= product.price %>
                            </strong>

                        </p>

                        <button
                            class="btn btn-primary">
                            Buy Now
                        </button>

                    </div>

                </div>

            </div>

        <% }) %>

    </div>

</div>

<%- include("partials/footer") %>
```

---

# 51. Quick Reference

## EJS

| Purpose          | Syntax                   |
| ---------------- | ------------------------ |
| Output value     | `<%= value %>`           |
| Unescaped output | `<%- value %>`           |
| JavaScript logic | `<% code %>`             |
| Comment          | `<%# comment %>`         |
| Include partial  | `<%- include("file") %>` |

### Express

```js
app.set("view engine", "ejs");
```

Render:

```js
res.render("index");
```

Render with data:

```js
res.render("index", {
    name: "Shubham"
});
```

Static files:

```js
app.use(express.static("public"));
```

Form data:

```js
app.use(express.urlencoded({
    extended: true
}));
```

---

# Bootstrap Quick Reference

## Layout

```text
.container
.container-fluid
.row
.col
.col-6
.col-md-6
.col-lg-4
```

## Spacing

```text
m-*
mt-*
mb-*
ms-*
me-*
mx-*
my-*

p-*
pt-*
pb-*
ps-*
pe-*
px-*
py-*
```

## Display

```text
d-none
d-block
d-inline
d-flex
```

## Flexbox

```text
justify-content-center
justify-content-between
align-items-center
flex-column
flex-row
```

## Text

```text
text-start
text-center
text-end

text-primary
text-success
text-danger
text-warning
text-info
text-dark
text-muted
```

## Buttons

```text
btn
btn-primary
btn-secondary
btn-success
btn-danger
btn-warning
btn-info
btn-dark
btn-light
btn-outline-primary
btn-lg
btn-sm
```

## Components

```text
card
navbar
alert
badge
table
form-control
form-label
```

---

# 🔗 EJS + Express + Bootstrap Architecture

A typical server-rendered application can be visualized as:

```text
                    ┌─────────────────┐
                    │     Browser     │
                    └────────┬────────┘
                             │
                        HTTP Request
                             │
                             ▼
                    ┌─────────────────┐
                    │    Express.js   │
                    │     Routing     │
                    └────────┬────────┘
                             │
                       Backend Logic
                             │
                             ▼
                    ┌─────────────────┐
                    │      EJS        │
                    │  HTML Template  │
                    └────────┬────────┘
                             │
                    Dynamic HTML
                             │
                             ▼
                    ┌─────────────────┐
                    │    Bootstrap    │
                    │ CSS + Components│
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │     Browser     │
                    │ Rendered Website│
                    └─────────────────┘
```

---

# 🧠 Important Concepts to Remember

### EJS

> **EJS is responsible for generating dynamic HTML on the server.**

### Express

> **Express handles the server, routes, requests, responses, and backend logic.**

### Bootstrap

> **Bootstrap provides pre-built CSS classes, responsive layouts, and UI components.**

Together:

```text
Express
   +
EJS
   +
Bootstrap
   =
Dynamic + Responsive Server-Rendered Web Application
```

---

# 🎯 Recommended Learning Order

For an Express.js learner, study these topics in this order:

```text
1. Node.js Basics
        ↓
2. Express.js
        ↓
3. Request / Response
        ↓
4. Routing
        ↓
5. Middleware
        ↓
6. Static Files
        ↓
7. EJS Template Engine
        ↓
8. EJS Partials
        ↓
9. Forms
        ↓
10. Bootstrap
        ↓
11. Express + EJS + Bootstrap
        ↓
12. MongoDB / Database
        ↓
13. Authentication
        ↓
14. REST APIs
        ↓
15. Full-Stack Applications
```

---

# 📝 Final Summary

## EJS

EJS allows JavaScript to be embedded into HTML templates.

Core syntax:

```ejs
<%= value %>
<% code %>
<%- include("partial") %>
```

Main Express configuration:

```js
app.set("view engine", "ejs");
```

Rendering:

```js
res.render("index", data);
```

---

## Bootstrap

Bootstrap is a front-end framework that provides:

* Responsive grid
* Utility classes
* Buttons
* Forms
* Cards
* Navbar
* Alerts
* Tables
* Responsive components

Example:

```html
<div class="container">

    <div class="row">

        <div class="col-md-6">

            <div class="card">

                <div class="card-body">

                    <h5 class="card-title">
                        Hello
                    </h5>

                    <button class="btn btn-primary">
                        Click
                    </button>

                </div>

            </div>

        </div>

    </div>

</div>
```

---

## 🚀 The Core Idea

```text
EJS
↓
Dynamic HTML

Bootstrap
↓
Beautiful + Responsive HTML

Express
↓
Server + Routes + Backend

Express + EJS + Bootstrap
↓
Professional Server-Rendered Web Application
```
