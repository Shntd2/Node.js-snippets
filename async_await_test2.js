async function connectToDatabase() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Connected to database');
        }, 1000);
    });
}


async function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ timestamp: new Date() });
        }, 2000);    
    });
}

async function main() {
    try {
        const connecttionStatus = await connectToDatabase();
        console.log(connecttionStatus);

        const data = await fetchData();
        console.log('Recieved data:', data);
    } catch (error) {
        console.error('Error:', error);
    }
}

main()
