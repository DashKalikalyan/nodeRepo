
const yargs = require ('yargs');
const geocode = require ('./geocode/geocode');



const argv = yargs
    .options({
        address: {
            demand : true,
            alias : 'a',
            describe : 'Address to fetch weather for',
            string : true
        }
    })
    .help()
    .argv;

console.log(argv);
geocode.geocodeAddress(argv.address, (errorMessage, results) => {
    if (errorMessage) {
        console.log(errorMessage);
    } else {
        console.log(JSON.stringify(results, undefined, 2));
    }
});


// 4613dc52c4fab2bba0ff0da1ebe75022 --API key wether

// const request = require ('request');

// request({
//     url: 'https://api.darksky.net/forecast/4613dc52c4fab2bba0ff0da1ebe75022/37.3408512,-121.8984925',
//     json: true
// }, (error, response, body) => {
//     console.log(body.currently.temperature);
// });


