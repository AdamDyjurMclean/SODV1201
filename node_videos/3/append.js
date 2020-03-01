const fs = require("fs");
const coloData = require("./assets/colors.json");

coloData.colorList.forEach(c => {
    fs.appendFile("./storage-files/colors.md", `${c.color}: ${c.hex} \n`, err =>{
        if (err){
            throw err;
        }
    });
});