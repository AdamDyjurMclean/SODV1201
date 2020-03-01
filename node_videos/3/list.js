const fs = require("fs");

console.log("started reading files");
//const files = fs.readdirSync("./assets");
fs.readdir("./assets", (err, files) => {
    if (err){
        throw err;
    }
    console.log("completed reading files");
    console.log(files);
});
// console.log("completed reading files");

// console.log(files);