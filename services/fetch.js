const fetch = require("node-fetch");
var baseUrl = 'https://mw.buoybay.noaa.gov/api/v1';


// #TODO: Make the url use variables to allow for different buoy data to be represented.
// Also #TODO: Make a swanky GUI for this stuff, idk i'll figure it out.
async function fetchWrapper(){ 
    try {
        let response = await fetch("https://www.ndbc.noaa.gov/data/realtime2/41113.spec")
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

module.exports = fetchWrapper();