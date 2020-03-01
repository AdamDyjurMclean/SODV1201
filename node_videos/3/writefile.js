const fs = require("fs");

const md = `
# This is a new file.

We can wrote text to a file using fs.writeFile.

*fs.readdir
*fs.readFile
*fs.WriteFile

`

fs.writeFile("./assets/notes.md", md.trim(), err =>{
    if (err){
        throw err;
    }
    console.log("File saved");
})