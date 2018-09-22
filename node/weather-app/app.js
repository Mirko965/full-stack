const request = require('request')
const yargs = require('yargs')
const geocode = require('./geocode/geocodeAddress')
const weather = require('./weather/weather')
const argv = yargs
  .option('a',{
    alias: 'address',
    demand: true,
    string: true,
    describe: 'Add address to find location'
  })
  .help()
  .alias('help','h')
  .argv

geocode.geocodeAddress(argv.address, (error, geocodeResult) => {
  if (error) {
    console.log(error)
  } else {
    console.log(geocodeResult.Address)
    weather.getWeather(geocodeResult.Latitude,geocodeResult.Longitude,(error, weatherResult) => {
      if (error) {
        console.log(error)
      } else {
        console.log(`Currently temperature is ${weatherResult.temperature}C but feels like ${weatherResult.apparentTemperature}C`)
      }
    })
  }
})





