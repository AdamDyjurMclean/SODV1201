//module.exports = "Adam";


let count = 0;

const inc = () => ++count;
const dec = () => --count;

const getcount = () => count;

module.exports = {
    inc,
    dec,
    getcount
}