// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of that directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf 
// 4. harry.zip
// 5. Rohan.zip
// 6. cat.jpg 
// 7. harry.pdf

// this: 
// jpg/name.jpg, jpg/cat.jpg 
// png/name.png 
// pdf/this.pdf pdf/harry.pdf
// zip/harry.zip zip/Rohan.zip

import fs from 'fs/promises'
import fsn from 'fs'
import path from 'path'

const basepath = "C:\\Users\\Shubham\\Music"

let files = await fs.readdir(basepath)
console.log(files);

for (const element of files) {
    // console.log(element);
    // now i want to print the extension of the file
    let extension = path.extname(element)
    console.log(extension);
    if (extension) {
        // now i want to create a folder with the name of the extension
        let foldername = extension.slice(1)
        console.log(foldername);
        let folderpath = path.join(basepath, foldername)
        console.log(folderpath);
        // now i want to check if the folder exists or not
        if (!fsn.existsSync(folderpath)) {
            await fs.mkdir(folderpath)
        }
        // now i want to move the file to the folder
        let oldfilepath = path.join(basepath, element)
        let newfilepath = path.join(folderpath, element)
        await fs.rename(oldfilepath, newfilepath)
    }


}
