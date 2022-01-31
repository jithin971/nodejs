var events = require('events');
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter();
var numArray = [1, 3, 4, 5, 6, 7]

var sumOfArray = function sum() {
    var sum = 0
    numArray.forEach(x => sum += x)
    console.log('sum of array=', sum);


}

var filterEven = function even() {

    var even = numArray.filter(x => x % 2 == 0)
    console.log('even numbers=', even);


}

var filterOdd = function odd() {

    var odd = numArray.filter(x => x % 2 != 0)
    console.log('odd numbers=', odd);


}

var findLength = function stringLength() {
    let a = "how are you"
    console.log(a.length)
}

var replace = function stringReplace() {
    let a = "Welcome to javascript"
    console.log(a)

    console.log(a.replace('javascript', 'node'))
}


eventEmitter.on("numberFunctions", sumOfArray)
eventEmitter.addListener('numberFunctions', filterEven);
eventEmitter.addListener('numberFunctions', filterOdd);


eventEmitter.on("stringFunctions", findLength)
eventEmitter.on("stringFunctions", replace)
eventEmitter.emit("numberFunctions")

eventEmitter.emit("stringFunctions")
