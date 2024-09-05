import EventEmitter from 'events';


class MyEmitter extends EventEmitter {}
    const myEmitter = new MyEmitter();

    myEmitter.on('helloArgs', (arg1, arg2) => {
        console.log(`Greetings, ${arg1} and ${arg2}`);
    });

    myEmitter.on('byeArgs', (arg1, arg2) => {
        console.log(`Goodbye, ${arg1} and ${arg2}`);
    });

    myEmitter.emit('helloArgs', 'John Doe', 'Baltimore Flex');
    myEmitter.emit('helloArgs', 'Shawn White', 'Jack Dorsey');
    
    myEmitter.emit('byeArgs', 'Mortimore Bodge', 'Tyler Gridley');
    myEmitter.emit('byeArgs', 'Chazette Corse', 'Filmore Pipsqueak');

console.log(myEmitter.listenerCount('helloArgs', ));
console.log(myEmitter.listenerCount('byeArgs'));
