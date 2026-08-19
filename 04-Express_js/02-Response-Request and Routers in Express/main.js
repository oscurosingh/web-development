const express = require("express");
const app = express();
const port = 3000;


const blog = require('./routes/blog')
app.use('/blog', blog);
const shop = require('./routes/shop')
app.use('/shop', shop);

app.use(express.static("public"));




app.get("/", (req, res) => {
  res.send("Hello World!");
});
app.post("/", (req, res) => {
  res.send("Hello World! Post Request");
});
app.put("/", (req, res) => {
  res.send("Hello World! Put Request");
});
app.delete("/", (req, res) => {
  res.send("Hello World! Delete Request");
});

app.options("/", (req, res) => {
  res.send("Hello World! Options Request");
});


// app.get('/index', (req,res)=>{
//     res.sendFile(__dirname + "/templates/index.html")
// })

// or

app.get("/index", (req, res) => {
    console.log("Hey its index")
    res.sendFile('templates/index.html', { root: __dirname })
})
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});