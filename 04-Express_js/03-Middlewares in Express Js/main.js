const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const blog = require("./routes/blog");

app.use('/blog', blog)

// Middleware 1 - Logger for our application
app.use((req, res, next) => {
    console.log("Middleware 1");
    fs.appendFileSync('logs.txt',`${Date.now()} is a ${req.method}\n`)
    next()
})
// Middleware 2
app.use((req, res, next) => {
    console.log("Middleware 2");
    next()
})
app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/about', (req, res) => {
    res.send('Hello about!' + req.harry)
})
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})