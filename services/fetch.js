const fetch = require("node-fetch");
var baseUrl = 'https://www.ndbc.noaa.gov/data/realtime2/';


// #TODO: Make the url use variables to allow for different buoy data to be represented.
// Also #TODO: Make a swanky GUI for this stuff, idk i'll figure it out.
// For reference use this to set stuff up 
// https://www.ndbc.noaa.gov/data/realtime2/41113.spec
// 41113 is a buoy, types can be either .spec or .text
var bouy = Number;
var dataType = String;

async function fetchWrapper(buoy, dataType){ 
    try {
        let response = await fetch(`${baseUrl}${buoy}.${dataType}`)
        if(response) {
                var resBlob = response.text()
                return resBlob
            } else {
                return 'dude there isnt a response'
            }
        }
    catch(err){
         console.log(err, 'fetch def didnt work dude.')
    }
}

module.exports = { fetchWrapper };