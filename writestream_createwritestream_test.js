import fs from 'fs';


const writeStream = fs.createWriteStream('test2.txt', 'utf8');

writeStream.write('Line 1\n');
writeStream.write('Line 2\n');
writeStream.write('Hello, world');

writeStream.end();
