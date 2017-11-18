
const yargs = require ('yargs');
const geocode = require ('./geocode/geocode');
const weather = require('./weather/weather');



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
        console.log(results.address);
        weather.weatherReport(results, (errorMessage, weatherResults) => {
            if (errorMessage) {
                console.log(errorMessage);
            } else  {
                console.log(JSON.stringify(weatherResults, undefined, 2));
            }
        });
    }
});


// 4613dc52c4fab2bba0ff0da1ebe75022 --API key wether




