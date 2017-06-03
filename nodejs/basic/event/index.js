var events = require("events");
// create event Emitter. 
// 1) register eventhandler. 
//2) find event and trigger the correct handler
var EventEmitter =  events.EventEmitter;
var eventEmitter1 = new EventEmitter(); //new events.EventEmitter();
///////////////////////////////////////EventEmitter instance method
// create event handler
var connectHandler = function connected() {
    console.log("it is connected");
    // trigger data_received event.
    eventEmitter1.emit("data_received")
};
// Bind the event(connect) to connectHandler
eventEmitter1.on("connect", connectHandler);
eventEmitter1.addListener("connect", connectHandler); 
console.log("the number of listener on event 'connect': %s ", EventEmitter.listenerCount(eventEmitter1, "connect"));
//function EventEmitter.listenerCount(emitter, type) {
//    if (typeof emitter.listenerCount === 'function') {
//      return emitter.listenerCount(type);
//    } else {
//      return listenerCount.call(emitter, type);
//    }
//  } 
// use the annoymous function to bind the data_received event
eventEmitter1.on("data_received", function() {
    console.log("all the data received");
});

eventEmitter1.on("send_email", function(subject, content) {
    console.log("Send email: subject="+subject);
    console.log("            content="+content);
});

// Trigger the event "connect"
eventEmitter1.emit("connect");
setTimeout(function(){
    eventEmitter1.emit("send_email", "hello", "this is one greeting from me");
}, 2000);
// //////////
