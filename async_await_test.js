console.log('Starting async/await test');

async function fetchDataWithAsyncAwait() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('Data from async/await');
        }, 1000);
    });
}

async function processData() {
    try {
        const data = await fetchDataWithAsyncAwait();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}

processData();
console.log('Async/await test initiated');
