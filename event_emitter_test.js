import EventEmitter from 'events';


class DatabaseConnection extends EventEmitter {
    connect() {
        setTimeout(() => {
            this.emit('connected');
        }, 1000);

        setInterval(() => {
            this.emit('data', { timestamp: new Date() });
        }, 2000);
    }
}

const db = new DatabaseConnection();

db.on('connected', () => {
    console.log('Database connected');
});

db.on('data', (data) => {
    console.log('Received data:', data);
});

db.on('error', (error) => {
    console.error('Error:', error);
});

db.connect();
