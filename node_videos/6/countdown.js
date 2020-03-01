#!/usr/bin/env node

const parseArgs = require("minimist");
const {stdout:log} = require("single-line-log");
const timer = require("tiny-timer");
const {time} = parseArgs(process.argv);

if (!time){
    throw new Error("--time is required");
}

if(!parseInt(time)){
    throw new Error("--time must be a number");
}

const count = parseInt(time);
let message = "";
for (let i = 0; i < count; i++){
    message += "*";
}

log(message);

const Timer = new timer({interval: 1000});

Timer.on("tick", () => {
    log(message);
    message = message.slice(1);
})

Timer.start(count*1000);


// get time from argv


//print stars


//run timer, remove stars