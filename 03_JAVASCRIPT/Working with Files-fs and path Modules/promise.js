import fs from "fs/promises"

let a = await fs.readFile("hari.txt")

await fs.appendFile("hari.txt", "\n\n\n\n Radhe Radhe!")
let b = await fs.readFile("hari.txt")
console.log(a.toString(), b.toString())     