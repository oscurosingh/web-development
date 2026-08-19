const express = require('express')
const router = express.Router()


// Middleware that is specific to this router
router.use((req, res, next) => {
    console.log(`time: ${Date.now()}`);
    next()
})

// define the home page route
router.get("/", (req, res) => {
    res.send('Blogs Home Page')
})

module.exports = router