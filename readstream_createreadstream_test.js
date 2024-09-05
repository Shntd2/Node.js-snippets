import fs from 'fs';


const readStream = fs.createReadStream('test.txt', 'utf8');

readStream.on('data', chunk => {
    console.log('Recieved chunk:\n', chunk);
});

readStream.on('end', () => {
    console.log('Finished reading file');
});
