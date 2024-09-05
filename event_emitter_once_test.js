import EventEmitter from 'events';


class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();
    myEmitter.once('onceEvent', () => {
        console.log('This message will be called once')
    });

myEmitter.emit('onceEvent')
myEmitter.emit('onceEvent') // This won't trigger the listener
myEmitter.emit('onceEvent') // This won't trigger the listener
