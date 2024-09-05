import EventEmitter from 'events';


class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();

    myEmitter.on('event', (name) => {
        console.log(`An event occurred, ${name}`);    
    });

myEmitter.emit('event', 'John');
myEmitter.emit('event', 'Shawn');
