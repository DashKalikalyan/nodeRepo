
const request = require ('request');


var weatherReport = (location, callback) => {

    request({
        url: `https://api.darksky.net/forecast/4613dc52c4fab2bba0ff0da1ebe75022/${location.latitude},${location.latitude}`,
        json: true
    }, (error, response, body) => {
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature : body.currently.temperature,
                apparentTemperature : body.currently.apparentTemperature


            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    weatherReport
}

