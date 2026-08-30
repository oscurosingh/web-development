# Installing Mongoose & Using It with Express

> **Module:** MongoDB
> **Topic:** Installing Mongoose & Using It with Express
> **Prerequisite:** MongoDB Server & MongoDB Compass
> **Stack:** Node.js + Express.js + MongoDB + Mongoose

---

## 📑 Table of Contents

1. [What is Mongoose?](#1-what-is-mongoose)
2. [Installing Mongoose](#2-installing-mongoose)
3. [Connecting to MongoDB](#3-connecting-to-mongodb)
4. [Schema and Model](#4-schema-and-model)
5. [Schema Validation](#5-schema-validation)
6. [CRUD Operations](#6-crud-operations)
7. [Using Mongoose with Express](#7-using-mongoose-with-express)
8. [Environment Variables](#8-environment-variables)
9. [Basic Project Structure](#9-basic-project-structure)
10. [Common Mistakes](#10-common-mistakes)
11. [Quick Revision](#11-quick-revision)
12. [Interview Questions](#12-interview-questions)

---

# 1. What is Mongoose?

Mongoose is an **ODM (Object Data Modeling)** library for MongoDB and Node.js.

It helps us work with MongoDB using:

* Schemas
* Models
* Validation
* Queries
* Middleware
* Timestamps
* Relationships

The basic flow is:

```text
Client
   ↓
Express Route
   ↓
Mongoose Model
   ↓
MongoDB
```

MongoDB stores the data, while Mongoose provides a structured way to interact with it.

---

# 2. Installing Mongoose

Create a project:

```bash
mkdir mongoose-express
cd mongoose-express
npm init -y
```

Install Express and Mongoose:

```bash
npm install express mongoose
```

Optional: install `dotenv` for environment variables:

```bash
npm install dotenv
```

---

# 3. Connecting to MongoDB

Create `app.js`:

```js
require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("MongoDB connection error:", error.message);
    });

app.get("/", (req, res) => {
    res.send("Server is running");
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
```

Create a `.env` file:

```env
MONGO_URI=mongodb://127.0.0.1:27017/webdev
PORT=3000
```

For local MongoDB, the general format is:

```text
mongodb://127.0.0.1:27017/database_name
```

---

# 4. Schema and Model

## Schema

A schema defines the structure of a document.

```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
```

## Model

A model is created from a schema and is used to interact with MongoDB.

```js
const User = mongoose.model("User", userSchema);
```

The flow is:

```text
Schema → Model → Collection → Documents
```

A model named `User` usually uses the `users` collection.

---

# 5. Schema Validation

Mongoose allows us to validate data before saving it.

```js
const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true
        },

        age: {
            type: Number,
            required: true,
            min: 18
        },

        role: {
            type: String,
            enum: ["user", "admin"],
            default: "user"
        }
    },
    {
        timestamps: true
    }
);
```

Common options:

| Option                    | Purpose                          |
| ------------------------- | -------------------------------- |
| `required`                | Field must be provided           |
| `unique`                  | Creates a unique index           |
| `default`                 | Provides a default value         |
| `min` / `max`             | Validates numbers                |
| `minlength` / `maxlength` | Validates string length          |
| `enum`                    | Restricts allowed values         |
| `trim`                    | Removes extra spaces             |
| `lowercase`               | Converts text to lowercase       |
| `timestamps`              | Adds `createdAt` and `updatedAt` |

> `unique` is not a normal validator. Duplicate values can produce a MongoDB duplicate-key error.

---

# 6. CRUD Operations

Assume this model exists:

```js
const User = mongoose.model("User", userSchema);
```

## Create

```js
const user = await User.create({
    name: "Oscuro",
    email: "oscuro@example.com",
    age: 21
});
```

Another method:

```js
const user = new User({
    name: "Oscuro",
    email: "oscuro@example.com",
    age: 21
});

await user.save();
```

## Read

Find all users:

```js
const users = await User.find();
```

Find one user:

```js
const user = await User.findOne({
    email: "oscuro@example.com"
});
```

Find by ID:

```js
const user = await User.findById(id);
```

## Update

```js
const user = await User.findByIdAndUpdate(
    id,
    { name: "New Name" },
    {
        new: true,
        runValidators: true
    }
);
```

* `new: true` returns the updated document.
* `runValidators: true` applies schema validation during updates.

## Delete

```js
const user = await User.findByIdAndDelete(id);
```

---

# 7. Using Mongoose with Express

## POST Route

```js
app.post("/users", async (req, res) => {
    try {
        const user = await User.create(req.body);

        res.status(201).json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
```

## GET All Users

```js
app.get("/users", async (req, res) => {
    try {
        const users = await User.find();

        res.json(users);
    } catch (error) {
        res.status(500).json({
            message: error.message
        });
    }
});
```

## GET One User

```js
app.get("/users/:id", async (req, res) => {
    try {
        const user = await User.findById(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: "Invalid user ID"
        });
    }
});
```

## PUT Route

```js
app.put("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new: true,
                runValidators: true
            }
        );

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json(user);
    } catch (error) {
        res.status(400).json({
            message: error.message
        });
    }
});
```

## DELETE Route

```js
app.delete("/users/:id", async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);

        if (!user) {
            return res.status(404).json({
                message: "User not found"
            });
        }

        res.json({
            message: "User deleted successfully"
        });
    } catch (error) {
        res.status(400).json({
            message: "Invalid user ID"
        });
    }
});
```

---

# 8. Environment Variables

Create `.env`:

```env
MONGO_URI=mongodb://127.0.0.1:27017/webdev
PORT=3000
```

Load it:

```js
require("dotenv").config();
```

Use it:

```js
mongoose.connect(process.env.MONGO_URI);
```

Add `.env` to `.gitignore`:

```gitignore
node_modules/
.env
```

Never expose database credentials in source code.

---

# 9. Basic Project Structure

```text
mongoose-express/
│
├── config/
│   └── db.js
├── models/
│   └── User.js
├── routes/
│   └── userRoutes.js
├── .env
├── .gitignore
├── app.js
├── package.json
└── package-lock.json
```

Example `models/User.js`:

```js
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: true,
            unique: true
        },

        age: {
            type: Number,
            min: 18
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("User", userSchema);
```

---

# 10. Common Mistakes

## Forgetting to install Mongoose

```bash
npm install mongoose
```

## Forgetting to import Mongoose

```js
const mongoose = require("mongoose");
```

## Forgetting JSON middleware

```js
app.use(express.json());
```

## Forgetting `await`

```js
const users = await User.find();
```

## Not checking for missing documents

```js
if (!user) {
    return res.status(404).json({
        message: "User not found"
    });
}
```

## Not using validators during updates

```js
{
    new: true,
    runValidators: true
}
```

---

# 11. Quick Revision

```js
const mongoose = require("mongoose");
```

```js
mongoose.connect(process.env.MONGO_URI);
```

```js
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number
});
```

```js
const User = mongoose.model("User", userSchema);
```

```js
await User.create(data);
```

```js
await User.find();
```

```js
await User.findById(id);
```

```js
await User.findByIdAndUpdate(id, data, {
    new: true,
    runValidators: true
});
```

```js
await User.findByIdAndDelete(id);
```

## CRUD Cheat Sheet

| Operation | HTTP Method | Mongoose Method             |
| --------- | ----------- | --------------------------- |
| Create    | `POST`      | `Model.create()`            |
| Read all  | `GET`       | `Model.find()`              |
| Read one  | `GET`       | `Model.findById()`          |
| Update    | `PUT/PATCH` | `Model.findByIdAndUpdate()` |
| Delete    | `DELETE`    | `Model.findByIdAndDelete()` |

---

# 12. Interview Questions

## 1. What is Mongoose?

Mongoose is an ODM library that helps Node.js applications interact with MongoDB using schemas, models, validation, and queries.

---

## 2. What is the difference between MongoDB and Mongoose?

MongoDB is the database. Mongoose is a Node.js library used to communicate with MongoDB.

---

## 3. What is a schema?

A schema defines the structure, data types, and validation rules for MongoDB documents.

```js
const userSchema = new mongoose.Schema({
    name: String,
    age: Number
});
```

---

## 4. What is a model?

A model is created from a schema and is used to create, read, update, and delete documents.

```js
const User = mongoose.model("User", userSchema);
```

---

## 5. What is a document?

A document is an individual record stored inside a MongoDB collection.

---

## 6. What is the difference between `find()` and `findOne()`?

* `find()` returns an array of matching documents.
* `findOne()` returns the first matching document or `null`.

---

## 7. What is the difference between `findById()` and `findOne()`?

`findById()` searches using the document's `_id`, while `findOne()` searches using any query condition.

---

## 8. What does `new: true` do?

It makes `findByIdAndUpdate()` return the updated document instead of the old document.

---

## 9. What does `runValidators: true` do?

It applies schema validation rules when updating a document.

---

## 10. What does `timestamps: true` do?

It automatically adds:

```text
createdAt
updatedAt
```

to documents.

---

## 11. Why do we use `express.json()`?

It parses incoming JSON request bodies and makes the data available through `req.body`.

---

## 12. Is `unique: true` a validator?

No. It creates a unique index. Duplicate values can still cause a MongoDB duplicate-key error.

---

## 13. What happens if `findById()` cannot find a document?

It returns `null`.

---

## 14. Why should database URLs be stored in `.env`?

To keep sensitive information such as usernames, passwords, and connection strings out of the source code.

---

## 15. What is the difference between `save()` and `create()`?

* `save()` saves a Mongoose document instance.
* `create()` creates and saves a document directly.

---

## Final Summary

The Mongoose workflow is:

```text
Install Mongoose
      ↓
Connect to MongoDB
      ↓
Create Schema
      ↓
Create Model
      ↓
Create Express Routes
      ↓
Perform CRUD Operations
      ↓
Validate and Handle Errors
```

The three most important concepts are:

```text
Schema   → Defines document structure
Model    → Interacts with MongoDB
Document → Actual stored data
```
