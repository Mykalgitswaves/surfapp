const fetch = require("node-fetch");
var baseUrl = 'https://mw.buoybay.noaa.gov/api/v1';

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