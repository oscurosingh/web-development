# Installing MongoDB & MongoDB Compass

> **Module:** MongoDB
> **Topic:** Installing MongoDB & MongoDB Compass
> **Purpose:** Set up MongoDB locally and manage databases using MongoDB Compass

---

## 📑 Table of Contents

1. [Introduction](#1-introduction)
2. [What is MongoDB?](#2-what-is-mongodb)
3. [MongoDB Architecture](#3-mongodb-architecture)
4. [MongoDB Community Server](#4-mongodb-community-server)
5. [MongoDB Compass](#5-mongodb-compass)
6. [MongoDB Server vs MongoDB Compass](#6-mongodb-server-vs-mongodb-compass)
7. [System Requirements](#7-system-requirements)
8. [Installing MongoDB on Windows](#8-installing-mongodb-on-windows)
9. [Installing MongoDB Compass](#9-installing-mongodb-compass)
10. [Understanding the MongoDB Installation](#10-understanding-the-mongodb-installation)
11. [Starting MongoDB](#11-starting-mongodb)
12. [Checking MongoDB Installation](#12-checking-mongodb-installation)
13. [Connecting MongoDB Compass](#13-connecting-mongodb-compass)
14. [MongoDB Connection String](#14-mongodb-connection-string)
15. [Creating a Database in Compass](#15-creating-a-database-in-compass)
16. [Creating Collections](#16-creating-collections)
17. [Working with Documents](#17-working-with-documents)
18. [Basic MongoDB Shell Commands](#18-basic-mongodb-shell-commands)
19. [MongoDB Data Hierarchy](#19-mongodb-data-hierarchy)
20. [Local MongoDB vs MongoDB Atlas](#20-local-mongodb-vs-mongodb-atlas)
21. [Common Installation Problems](#21-common-installation-problems)
22. [Useful Commands](#22-useful-commands)
23. [Quick Revision](#23-quick-revision)

---

# 1. Introduction

MongoDB is a popular **NoSQL database** used for storing application data.

Before using MongoDB with Node.js and Express, MongoDB needs to be installed and configured.

There are two important tools commonly used during local development:

### MongoDB Community Server

The actual MongoDB database server.

### MongoDB Compass

A graphical user interface (GUI) used to interact with MongoDB visually.

The basic setup looks like:

```text
┌─────────────────────┐
│   Your Application  │
│  Node.js / Express  │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   MongoDB Server    │
│     localhost       │
└──────────┬──────────┘
           │
           ▼
┌─────────────────────┐
│   Database Storage  │
└─────────────────────┘

MongoDB Compass
      │
      ▼
MongoDB Server
```

Compass is **not the database itself**. It is a GUI client that connects to the MongoDB server.

---

# 2. What is MongoDB?

MongoDB is a **NoSQL, document-oriented database**.

Instead of storing data primarily in rows and columns like a relational database, MongoDB stores data as **documents**.

Example MongoDB document:

```json
{
    "name": "Oscuro",
    "age": 21,
    "course": "BSc Physics"
}
```

MongoDB documents are stored in **collections**.

A collection is similar to a table in a relational database.

---

## MongoDB vs SQL Terminology

| SQL         | MongoDB       |
| ----------- | ------------- |
| Database    | Database      |
| Table       | Collection    |
| Row         | Document      |
| Column      | Field         |
| Primary Key | `_id`         |
| SQL Query   | MongoDB Query |

Example:

### SQL

```text
Users Table
-------------------------
id | name | age
-------------------------
1  | John | 20
2  | Alex | 22
```

### MongoDB

```text
users Collection

{
    "_id": 1,
    "name": "John",
    "age": 20
}

{
    "_id": 2,
    "name": "Alex",
    "age": 22
}
```

---

# 3. MongoDB Architecture

A basic MongoDB installation contains:

```text
MongoDB Server
│
├── Databases
│   │
│   ├── Collections
│   │   │
│   │   ├── Documents
│   │   ├── Documents
│   │   └── Documents
│   │
│   └── Collections
│
└── Databases
```

For example:

```text
myApp
│
├── users
│   ├── user document
│   ├── user document
│   └── user document
│
├── products
│   ├── product document
│   └── product document
│
└── orders
    ├── order document
    └── order document
```

---

# 4. MongoDB Community Server

**MongoDB Community Server** is the database server that runs on your computer.

It provides the actual MongoDB database engine.

When MongoDB is running locally, applications can connect to it using a connection string such as:

```text
mongodb://127.0.0.1:27017
```

or:

```text
mongodb://localhost:27017
```

### Important

Installing MongoDB Server gives you the **database engine**.

It does not mean that you automatically have a graphical interface.

For a GUI, you can use MongoDB Compass.

---

# 5. MongoDB Compass

**MongoDB Compass** is MongoDB's graphical user interface.

Instead of entering commands in a terminal, you can use Compass to:

* Connect to MongoDB
* Create databases
* Create collections
* Insert documents
* View documents
* Edit documents
* Delete documents
* Create indexes
* Explore database structure
* Run queries
* Analyze collections

### Example

Without Compass:

```text
Terminal
   ↓
MongoDB Shell
   ↓
MongoDB Server
```

With Compass:

```text
MongoDB Compass
      ↓
MongoDB Server
```

Compass makes MongoDB easier to explore, especially while learning.

---

# 6. MongoDB Server vs MongoDB Compass

This distinction is very important.

| MongoDB Server              | MongoDB Compass        |
| --------------------------- | ---------------------- |
| Database engine             | GUI client             |
| Stores data                 | Helps manage/view data |
| Runs as a service/process   | Connects to MongoDB    |
| Required for local database | Optional GUI tool      |
| Used by applications        | Used by developers     |

### Simple analogy

Think of MongoDB Server as a **library**.

MongoDB Compass is like the **library management interface** that lets you browse and manage the books.

Compass doesn't replace MongoDB Server.

---

# 7. System Requirements

For local development, you generally need:

* Windows 10/11, macOS, or Linux
* Sufficient disk space
* Administrator privileges when installing system components
* MongoDB Community Server
* MongoDB Compass

For this Web Development setup, Windows users can install:

```text
MongoDB Community Server
+
MongoDB Compass
```

---

# 8. Installing MongoDB on Windows

## Step 1 — Download MongoDB Community Server

Go to the official MongoDB website and download the **MongoDB Community Server** installer for Windows.

Choose the appropriate:

```text
Platform: Windows
Package: MSI
```

Use the official MongoDB download page rather than third-party download sites.

---

## Step 2 — Run the Installer

Open the downloaded `.msi` file.

The MongoDB setup wizard will start.

Click:

```text
Next
```

---

## Step 3 — Accept the License Agreement

Read and accept the license agreement.

Select:

```text
I accept the terms in the License Agreement
```

Then click:

```text
Next
```

---

## Step 4 — Choose Setup Type

For most beginners, choose:

```text
Complete
```

This installs the required MongoDB components.

Click:

```text
Next
```

---

## Step 5 — Configure MongoDB as a Service

During installation, MongoDB can be configured to run as a **Windows Service**.

For a normal local development setup, allowing MongoDB to run as a service is convenient.

The installer may provide options such as:

```text
Install MongoD as a Service
```

Keep the default service configuration unless you have a specific reason to change it.

---

## Step 6 — Install

Click:

```text
Install
```

Windows may ask for administrator permission.

Allow the installer to continue.

After installation finishes:

```text
MongoDB Server
```

will be installed on your system.

---

# 9. Installing MongoDB Compass

MongoDB Compass is often available as a separate installation.

Download MongoDB Compass from MongoDB's official website.

Install it using the normal installation process.

The installation generally looks like:

```text
Download
   ↓
Run Installer
   ↓
Install
   ↓
Launch MongoDB Compass
```

---

# 10. Understanding the MongoDB Installation

MongoDB includes several important components.

One important component is:

```text
mongod
```

`mongod` is the **MongoDB server process**.

It manages:

* Database connections
* Data storage
* Queries
* Database operations

Another important tool is:

```text
mongosh
```

MongoDB Shell is a command-line interface for interacting with MongoDB.

The relationship is:

```text
mongosh
   │
   │ commands
   ▼
mongod
   │
   ▼
MongoDB Database
```

Compass works similarly:

```text
MongoDB Compass
      │
      │ GUI operations
      ▼
    mongod
      │
      ▼
 MongoDB Data
```

---

# 11. Starting MongoDB

If MongoDB was installed as a Windows service, it may start automatically with Windows depending on the service configuration.

You can check MongoDB services using Windows tools.

### Using Services

Press:

```text
Win + R
```

Enter:

```text
services.msc
```

Look for a MongoDB service.

You can:

```text
Start
Stop
Restart
```

the service from there.

---

## Starting from the Command Line

If MongoDB is configured to run manually, the MongoDB server process can be started using `mongod`.

Example:

```bash
mongod
```

The exact command may depend on how MongoDB was installed and configured.

---

# 12. Checking MongoDB Installation

After installation, verify that MongoDB tools are available.

Try:

```bash
mongosh
```

If the shell opens successfully, you can interact with MongoDB.

You may see a prompt similar to:

```text
test>
```

This indicates that the MongoDB shell is running.

---

## Check MongoDB Version

Depending on the installed tools:

```bash
mongosh --version
```

You can also check:

```bash
mongod --version
```

---

# 13. Connecting MongoDB Compass

Open:

```text
MongoDB Compass
```

You will see a connection interface.

For a default local MongoDB server, use:

```text
mongodb://localhost:27017
```

or:

```text
mongodb://127.0.0.1:27017
```

Then click:

```text
Connect
```

---

## Why Port 27017?

MongoDB commonly uses:

```text
27017
```

as its default port.

Therefore:

```text
mongodb://localhost:27017
```

means:

```text
mongodb://
       ↓
localhost
       ↓
port 27017
```

---

# 14. MongoDB Connection String

A MongoDB connection string tells a client or application where MongoDB is running.

Basic local connection:

```text
mongodb://localhost:27017
```

Another equivalent form:

```text
mongodb://127.0.0.1:27017
```

### Breakdown

```text
mongodb://localhost:27017
│          │          │
│          │          └── Port
│          └───────────── Host
└──────────────────────── Protocol
```

If you specify a database:

```text
mongodb://localhost:27017/myDatabase
```

Here:

```text
myDatabase
```

is the database name.

---

# 15. Creating a Database in Compass

Once connected to MongoDB Compass:

1. Connect to your local MongoDB server.
2. Find the database section.
3. Select **Create Database**.
4. Enter a database name.
5. Enter an initial collection name.
6. Create the database.

For example:

```text
Database Name:
webdev

Collection Name:
users
```

You now have:

```text
webdev
└── users
```

---

# 16. Creating Collections

A MongoDB database contains collections.

For example:

```text
webdev
│
├── users
├── products
├── orders
└── posts
```

In Compass, you can create a collection through the database interface.

Example:

```text
Database:
webdev

Collections:
users
products
orders
```

---

# 17. Working with Documents

Documents are the actual pieces of data stored inside collections.

Example:

```json
{
    "name": "Oscuro",
    "age": 21,
    "skills": [
        "JavaScript",
        "Node.js",
        "MongoDB"
    ]
}
```

A document can contain:

* Strings
* Numbers
* Booleans
* Arrays
* Objects
* Dates
* Nested documents

---

## Insert a Document Using Compass

Open:

```text
webdev
    ↓
users
```

Select:

```text
Add Data
```

Then choose:

```text
Insert Document
```

Example:

```json
{
    "name": "Oscuro",
    "age": 21,
    "role": "developer"
}
```

Click:

```text
Insert
```

The document is now stored in MongoDB.

---

# 18. Basic MongoDB Shell Commands

MongoDB Shell (`mongosh`) allows you to interact with MongoDB from the terminal.

Start:

```bash
mongosh
```

---

## Show Databases

```javascript
show dbs
```

---

## Select a Database

```javascript
use webdev
```

If the database doesn't contain data yet, it may not appear in `show dbs`.

---

## Show Current Database

```javascript
db
```

Output:

```text
webdev
```

---

## Show Collections

```javascript
show collections
```

Example:

```text
users
products
orders
```

---

## Insert a Document

```javascript
db.users.insertOne({
    name: "Oscuro",
    age: 21
})
```

---

## Find Documents

```javascript
db.users.find()
```

---

## Find One Document

```javascript
db.users.findOne()
```

---

## Update a Document

```javascript
db.users.updateOne(
    { name: "Oscuro" },
    { $set: { age: 22 } }
)
```

---

## Delete a Document

```javascript
db.users.deleteOne({
    name: "Oscuro"
})
```

---

# 19. MongoDB Data Hierarchy

Remember the hierarchy:

```text
MongoDB Server
      │
      ▼
   Database
      │
      ▼
  Collection
      │
      ▼
  Document
      │
      ▼
    Fields
```

Example:

```text
MongoDB
│
└── webdev              ← Database
    │
    └── users           ← Collection
        │
        ├── Document
        │   ├── name
        │   ├── email
        │   └── age
        │
        └── Document
            ├── name
            ├── email
            └── age
```

---

# 20. Local MongoDB vs MongoDB Atlas

MongoDB can be used locally or in the cloud.

## Local MongoDB

MongoDB runs on your computer.

```text
Your Computer
│
└── MongoDB Server
```

Typical connection:

```text
mongodb://localhost:27017
```

Good for:

* Learning
* Development
* Testing
* Offline development

---

## MongoDB Atlas

MongoDB Atlas is MongoDB's cloud database service.

Instead of running MongoDB locally:

```text
Your Computer
      │
      ▼
Internet
      │
      ▼
MongoDB Atlas
```

A cloud connection string is typically different from the local connection string.

Example format:

```text
mongodb+srv://username:password@cluster.mongodb.net/database
```

Do **not** copy example credentials into your project.

---

# 21. Common Installation Problems

## Problem 1 — `mongosh` is not recognized

You may see:

```text
'mongosh' is not recognized as an internal or external command
```

Possible reasons:

* MongoDB Shell isn't installed.
* MongoDB's executable directory isn't in `PATH`.
* Terminal was opened before installation completed.

### Solution

First verify that MongoDB tools are installed.

If necessary, add the appropriate MongoDB `bin` directory to your Windows `PATH`.

After modifying `PATH`, open a **new terminal** and try:

```bash
mongosh
```

again.

---

# Problem 2 — MongoDB server isn't running

Compass may show a connection error when connecting to:

```text
mongodb://localhost:27017
```

Check whether the MongoDB Windows service is running.

Open:

```text
services.msc
```

Then locate the MongoDB service and start/restart it.

---

# Problem 3 — Compass cannot connect

Check:

```text
MongoDB Server
        ↓
Running?
        ↓
Port 27017
        ↓
Connection String
```

Try:

```text
mongodb://127.0.0.1:27017
```

---

# Problem 4 — Port 27017 is already in use

Another MongoDB process or application may already be using the port.

Check running services/processes and determine what is using the port before changing MongoDB's configuration.

---

# Problem 5 — Database doesn't appear

MongoDB generally doesn't persist an empty database in the way beginners often expect.

For example:

```javascript
use webdev
```

doesn't necessarily make `webdev` appear in:

```javascript
show dbs
```

Create some data:

```javascript
db.users.insertOne({
    name: "Oscuro"
})
```

Then:

```javascript
show dbs
```

The database can now appear because it contains data.

---

# 22. Useful Commands

### Open MongoDB Shell

```bash
mongosh
```

### Check Shell Version

```bash
mongosh --version
```

### Check MongoDB Server Version

```bash
mongod --version
```

### Show Databases

```javascript
show dbs
```

### Select Database

```javascript
use databaseName
```

### Show Current Database

```javascript
db
```

### Show Collections

```javascript
show collections
```

### Insert One Document

```javascript
db.users.insertOne({
    name: "John"
})
```

### Find Documents

```javascript
db.users.find()
```

### Find One

```javascript
db.users.findOne()
```

### Update

```javascript
db.users.updateOne(
    { name: "John" },
    { $set: { age: 25 } }
)
```

### Delete

```javascript
db.users.deleteOne({
    name: "John"
})
```

---

# 23. Quick Revision

## MongoDB

MongoDB is a:

> **NoSQL document-oriented database.**

---

## MongoDB Server

The actual database engine that:

* Stores data
* Processes queries
* Handles connections
* Manages databases and collections

---

## MongoDB Compass

A GUI application used to:

* Connect to MongoDB
* Create databases
* Create collections
* Insert documents
* View documents
* Edit documents
* Delete documents
* Run queries

---

## MongoDB Shell

`mongosh` is the command-line interface for MongoDB.

Start it with:

```bash
mongosh
```

---

## Default Local Connection

```text
mongodb://localhost:27017
```

---

## MongoDB Hierarchy

```text
Database
   ↓
Collection
   ↓
Document
   ↓
Fields
```

---

## SQL vs MongoDB

```text
SQL                  MongoDB
────────────────────────────────
Database       →     Database
Table          →     Collection
Row            →     Document
Column         →     Field
Primary Key    →     _id
```

---

## Final Setup

For local Web Development, your environment should look like:

```text
┌───────────────────────────────┐
│        Windows PC             │
│                               │
│  ┌─────────────────────────┐  │
│  │   MongoDB Server        │  │
│  │   localhost:27017       │  │
│  └────────────┬────────────┘  │
│               │               │
│       ┌───────┴────────┐      │
│       │                │      │
│       ▼                ▼      │
│   MongoDB          Node.js    │
│   Compass           /Express  │
│                               │
└───────────────────────────────┘
```

### The important idea

```text
MongoDB Server
      ↓
Actually stores and manages your data

MongoDB Compass
      ↓
GUI used to interact with MongoDB

mongosh
      ↓
CLI used to interact with MongoDB
```

Once MongoDB Server is installed and running, Compass can connect to it using:

```text
mongodb://localhost:27017
```

You are then ready to use MongoDB with your **Node.js + Express.js** applications.
