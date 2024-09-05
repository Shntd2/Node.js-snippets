import EventEmitter from 'events';
import fs from 'fs/promises';


class FileProcessor extends EventEmitter {
    constructor(filename) {
        super();
        this.filename = filename;
        this.processedLines = 0;
    }

    async processFile() {
        try {
            const content = await fs.readFile(this.filename, 'utf8');
            const lines = content.split('\n');
            
            for (const line of lines) {
                await this.processLine(line);
            }

            this.emit('done', this.processedLines);
        } catch (error) {
            this.emit('error', error);
        }
    }

    async processLine(line) {
        return new Promise((resolve) => {
            setTimeout(() => {
                this.processedLines++;
                this.emit('progress', {
                    line: line.trim(),
                    linesProcessed: this.processedLines
                });
                resolve();
            }, 100)
        });
    }
}


async function main() {
    const processor = new FileProcessor('test.txt');

    processor.on('progress', (data) => {
        console.log(`Processed line: ${data.line}`);
        console.log(`Lines processed: ${data.linesProcessed}`);
    });

    processor.on('done', (totalLines) => {
        console.log(`Finished processing. Total lines: ${totalLines}`);
    });

    processor.on('error', (error) => {
        console.error('An error occurred:', error); 
    });

    try {
        await fs.writeFile('test.txt', 'Line 1\nLine 2\nLine 3\nLine 4\nLine 5');
        console.log('File created successfully');

        console.log('Starting the processing...');
        await processor.processFile();
    } catch (error) {
        console.error('An error occurred in main:', error);
    }
}

main()
