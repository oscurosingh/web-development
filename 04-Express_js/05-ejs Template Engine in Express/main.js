const express = require("express");

const app = express();

app.set("view engine", "ejs"); // Set EJS as the template engine

app.get("/", (req, res) => {
    let sitename ="Deepa creation";
    let searchtext='clothing'
    let arr = ["Hey", 54, 65]
    res.render("index",{sitename: sitename, searchtext: searchtext,arr})
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
