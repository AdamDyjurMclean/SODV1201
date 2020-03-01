const express = require("express");
const bodyParser = require("body-parser");
let skiterms = require("./skiterms.json")
const fs = require("fs");
const app = express();

const save = () =>{
    fs.writeFile("./skiterms.json", JSON.stringify(skiterms, null, 2), err =>{
        if (err)
        throw err;
    });
};

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log(`${req.method} request for ${req.url}`);
    if (Object.keys(req.body).length){
        console.log(req.body);
    }
    next();
});

app.use(express.static('./client'));


app.get("/dictionary", (req, res) =>{
    res.json(skiterms);
})

app.post("/dictionary", (req, res) =>{
    skiterms.push(req.body);
    save();
    res.json({
        status: "sucsess",
        term: req.body
    })
});

app.delete("/dictionary/:term", (req, res) =>{
    skiterms = skiterms.filter(def => def.term !== req.params.term)
    save();
    res.json({
        status: "sucsess",
        removed: req.params.term,
        newLength: skiterms.length
    });
})

app.listen(3000, () =>{
    console.log(`ski dictionary at http://localhost:3000`);
});
