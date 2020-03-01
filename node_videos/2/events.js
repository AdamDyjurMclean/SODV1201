const events = require("events");

const emitter = new events.EventEmitter();

emitter.on("customEvent", (messege, user) =>{
    console.log(`${user}: ${messege}`)
});

emitter.emit("customEvent", "Hello World", "Computer");
emitter.emit("customEvent", "Thats pretty cool", "Alex");

process.stdin.on("data", data => {
    const input = data.toString().trim();
    if (input === "exit"){
        emitter.emit("customEvent", "Bye", "Process");
        process.exit();
    }
    emitter.emit("customEvent", input, "terminal");
})