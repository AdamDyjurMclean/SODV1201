const fs = require("fs");

fs.readFile("./assets/Readme.md", "UTF-8", (err, text) => {
    if (err) {
        console.log(`An error has occured: ${err.messege}`)
        process.exit();
    }
    console.log("file contents read");
    console.log(text);
});

