var slugify = require('slugify')

let a = slugify('some string') // some-string
console.log(a)

// if you prefer something other than '-' as separator
const b = slugify('some st&&*(^%$$^^&ring', '_')  // some_string
// adding ^ inside the input string does not stay in the slug; it gets stripped out and contributes to the separator placement.
console.log(b) 