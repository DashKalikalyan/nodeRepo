const request = require ('request');

var geocodeAddress = (address, callback) => {
    var encodedAddress = encodeURIComponent(address);
    request({
        url : ('https://maps.googleapis.com/maps/api/geocode/json?address='+ encodedAddress),
        json: true
    }, (error, response, body) => {
        if (error) {
            console.log();
            callback('Unable to connect to the google server');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address');
        } else if (body.status === 'OK'){
            console.log(response);
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }

    });
};
module.exports = {
    geocodeAddress
}