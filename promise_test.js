console.log('Starting promise test');

function fetchDataWithPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data from promise');
        }, 1000);
    });
}

fetchDataWithPromise()
    .then((data) => {
        console.log(data);
    })
    .catch((error) => {
        console.log(error);
    })
    .finally(() => {
        console.log('End of promise test');
    });
