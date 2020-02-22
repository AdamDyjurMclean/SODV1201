//example1 

let promiseToCleanToom = new Promise(function(resolve, reject){
//cleaning the room

let isClean = false;
if(isClean){
    resolve('clean');
} else {
    reject('not clean');
}

});

promiseTocleanRoom.then(function(fromresolve){
    console.log("the room is " + fromresolve);
}).catch(function(fromreject){
    console.log("the room is " + fromreject);
})

//example2

let cleanRoom = function(){
    return new Promise(function(resolve, reject) {
        resolve('cleaned the room');
    });
};

let removeGarbage = function(message){
    return new Promise(function(resolve, reject) {
        resolve(message + ' removed garbage');
    });
};

let winIcecream = function(message){
    return new Promise(function(resolve, reject) {
        resolve(message + ' won icecream');
    });
};

cleanRoom().then(function(result) {
    return removeGarbage(result);
}).then(function(result) {
    return winIcecream(result);
}).then(function(result){
    console.log('finished ' + result);
})