const waitTime = 5000;
const waitInterval = 100;
let cuttentTime = 0;

const incTime = () => {
    cuttentTime += waitInterval;
    const p =Math.floor((cuttentTime / waitTime) * 100);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    process.stdout.write(`waiting... ${p}%`);
};

console.log(`setting a ${waitTime / 1000} second delay`)

const timerFinished = () => {
    clearInterval(interval);
    process.stdout.clearLine();
    process.stdout.cursorTo(0);
    console.log("Done");
}

const interval = setInterval(incTime, waitInterval);
setTimeout(timerFinished, waitTime);