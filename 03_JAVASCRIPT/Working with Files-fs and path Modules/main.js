const fs= require('fs');

fs.readFile('myfile.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log(data);
    }
})

fs.writeFile('Shubham.txt', 'Hello, World!', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    else {
        console.log('File written successfully!');
    }   
}
)

fs.writeFile("hari.txt", "Radhe Radhe!", ()=>{
    console.log("done")
    fs.readFile("hari.txt", (error, data)=>{
        console.log(error, data.toString())
    })
})

fs.appendFile("hari.txt", "Krishna Krishna!", ()=>{
    console.log("done")})