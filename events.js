var events = require('events');
// Create an eventEmitter object  
var eventEmitter = new events.EventEmitter();

var connectHandler = function connected() {
    console.log('connection succesful.');

    // Fire the data_received event   
    eventEmitter.emit('data_received');
}

var fun2=function name(data,data2) {
    console.log("second fun"+data2,data)
    
}

eventEmitter.on('connection', connectHandler);
eventEmitter.on('connection', fun2);

eventEmitter.on('data_received', function () {
    console.log('data received succesfully.');
});

eventEmitter.emit('connection',"jithin","raju");  


var eventListeners = require('events').EventEmitter.listenerCount(eventEmitter,'connection');
console.log(eventListeners + " Listner(s) listening to connection event");

