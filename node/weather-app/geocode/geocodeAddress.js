const request = require('request')

const geocodeAddress = (address, callback) => {

  const encodeAddress = encodeURIComponent(address)
  const key = `AIzaSyCiLDP_y5hnamnmbIufAoU_fGaN63FfNyI`
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}&key=${key}`

  const callbackRequest = (error, response, body) => {

    if (error) {
      callback('Unable to connect to google server')
    } else if (body.status === 'ZERO_RESULTS') {
      callback('Unable to find that address')
    } else if (body.status === 'OK') {
      callback(undefined, {
        Address: body.results[0].formatted_address,
        Latitude: body.results[0].geometry.location.lat,
        Longitude: body.results[0].geometry.location.lng
      })
    } else if (body.status === 'INVALID_REQUEST') {
      callback('Missing the address')
    } else {
      callback('Something went wrong')
    }

  }
  return request({url, json:true},callbackRequest);
}

module.exports = {
  geocodeAddress
}
