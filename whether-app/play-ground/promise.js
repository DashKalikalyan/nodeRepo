var asyncAdd = (a, b) => {
    return new Promise((resolve, reject) => {
        setTimeout( () => {
            if (typeof a === 'number' && typeof b === 'number') {
                resolve (a+b);
            } else {
                reject ('arguments must be numbers');
            }
        }, 1500);
    });
};


// // The below chaining of promises method has some problems and hence it does not work and gives unwanted output in case of reject in 1st
// asyncAdd(5,'7').then((res) => {
//     console.log('Result:', res);
//     return asyncAdd(res, 37);
// }, (errorMessage) => {
//     console.log(errorMessage);
// }).then((res) => {
//     console.log('Result:', res);
// }, (errorMessage) => {
//     console.log(errorMessage);
// });

asyncAdd(5,7).then((res) => {
    console.log('Result:', res);
    return asyncAdd(res, 37);
}).then((res) => {
    console.log('Result:', res);
}).catch((errorMessage) => {
    console.log(errorMessage);
});
