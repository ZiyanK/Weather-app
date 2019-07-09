const request = require('request');

const forecast = (latitude, longitude, callback) => {
    url = `https://api.darksky.net/forecast/4bab5aea0de5f94e09f6192810116a33/${latitude},${longitude}?units=si`

    request({ url , json: true }, (error,  {body} ) => {
        if (error) {
            callback('Unable to connect to weather service!', undefined)
        } else if (body.error) {
            callback('Unable to find the location', undefined)
        } else {
            callback(undefined, `${body.daily.data[0].summary}. It is currently ${body.currently.temperature} degrees outside. There is a ${body.currently.precipProbability}% chance of rain`)
        }
    })
}

module.exports = forecast