const axios = require('axios');
const yargs = require('yargs')

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

const temp = (source) => {
  return Math.round((source -32)/1.6)
}
const encodeAddress = encodeURIComponent(argv.address)
const key = `AIzaSyCiLDP_y5hnamnmbIufAoU_fGaN63FfNyI`
const geocodeUrl = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${key}`

axios.get(geocodeUrl)
  .then((response) => {
    if (response.data.status === 'ZERO_RESULTS') {
      throw new Error('Address not found')
    } else if (response.data.status === 'INVALID_REQUEST') {
      throw new Error('Missing the address')
    }
    console.log(response.data.results[0].formatted_address)
    const lat = response.data.results[0].geometry.location.lat
    const lng = response.data.results[0].geometry.location.lng
    const url = `https://api.darksky.net/forecast/3b0ceba96c5814011205a9b93e2c6636/${lat},${lng}`
    return axios.get(url)
  })
  .then((response) => {
    const temperature = response.data.currently.temperature
    const apparentTemperature = response.data.currently.apparentTemperature
    console.log(`Currently temp is ${temp(temperature)}\u{2103} ' , feels like ${temp(apparentTemperature)}\u{2103} ' `)
  })
  .catch((e) => {
    if (e.code === 'ENOTFOUND'){
      console.log('Unable to connect to API server')
    } else {
      console.log(e.message)
    }
  })





