const request = require('request')

const temp = (source) => {
  return Math.round((source -32)/1.6)
}
const getWeather = (lat,lng,callback) => {

  const url = `https://api.darksky.net/forecast/3b0ceba96c5814011205a9b93e2c6636/${lat},${lng}`
  const callbackWeather = (error,response,body) => {
    if (!error && response.statusCode === 200) {
      callback(undefined, {
        temperature: temp(body.currently.temperature),
        apparentTemperature: temp(body.currently.apparentTemperature)
      })
    } else {
      callback('Unable to fetch weather')
    }
  }
  return request({url, json: true}, callbackWeather)
}

module.exports = { getWeather }
