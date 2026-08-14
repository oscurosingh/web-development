const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {// you can use app.get() to handle GET requests to the root URL ('/'). The callback function takes two parameters: req (the request object) and res (the response object). In this case, we are sending a simple 'Hello World!' message as the response.you will get this on URL http://localhost:3000/
  res.send('Hello World!');
})
app.get('/about', (req, res) => {//URL http://localhost:3000/about
  res.send('About Page');
})
app.get('/contact',(req,res)=>{
    res.send('nothing here👌😠')
});
app.get('/blog', (req, res) => {
    res.send('Hello blog!')
})
app.get('/blog/:slug', (req, res) => {// For URL: http://localhost:3000/blog/shubham?mode=dark&region=in
  console.log(req.params);// will output { slug: 'shubham' }
  console.log(req.query);//will output { mode: 'dark', region: 'in' }
  res.send(`hello ${req.params.slug}`)
}
);
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})