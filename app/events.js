/**
 * Created by priyanga on 10/14/15.
 */
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler
var eventHandler = function connected() {
	console.log('connection succesful.');
	// Fire the data_received event
	eventEmitter.emit('data_received');
}

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
	console.log('data received succesfully.');
});

// Bind event and even handler
eventEmitter.on('eventName', eventHandler);

// Fire an event
eventEmitter.emit('eventName');

console.log("Program Ended.");