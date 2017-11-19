
const yargs = require ('yargs');
const axios = require ('axios');

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

var encodedAddress = encodeURIComponent(argv.address);

var geocodeUrl = ('https://maps.googleapis.com/maps/api/geocode/json?address='+ encodedAddress);


// 4613dc52c4fab2bba0ff0da1ebe75022 --API key wether
axios.get(geocodeUrl).then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
        console.log('There is no place like that');
    } else {
        console.log(response.data.results[0].formatted_address);
        var latitude = response.data.results[0].geometry.location.lat;
        var longitude = response.data.results[0].geometry.location.lat;
        var weatherURL = (`https://api.darksky.net/forecast/4613dc52c4fab2bba0ff0da1ebe75022/${latitude},${longitude}`);
        return axios.get(weatherURL);
    }
}).then((response) => {
    console.log(response.data.currently.temperature);
    console.log(response.data.currently.apparentTemperature);
}).catch((e) => {
    if(e.code === 'ENOTFOUND') {
        console.log('Unable to connect to API server');
    }
});


