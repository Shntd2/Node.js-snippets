console.log('Starting callback test');

function fetchDataWithCallback(callback) {
    setTimeout(() => {
        callback('Data from callback');
    }, 1000);
}

fetchDataWithCallback((data) => {
    console.log(data);
})

console.log('Ending callback test');
