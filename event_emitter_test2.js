import EventEmitter from 'events';

// Create an instance of EventEmitter
const eventEmitter = new EventEmitter();

// Register an event listener for 'greet'
eventEmitter.on('greet', (name) => {
    console.log(`Hello, ${name}!`);
});

// Emit the 'greet' event
eventEmitter.emit('greet', 'Alice'); 
eventEmitter.emit('greet', 'Frank')
