const express = require('express')
const router = express.Router();
let base = require("../services/fetch.js");
const txtToJSON = require("txt-file-to-json");

// #Todo: get this working later, it should be a req.body data
// configurable from the front end.
const offset = Number

router.get('/buoys', async function(req, res, next) {
    let data = await base.fetchWrapper(41113, 'spec');
    let payload = txtToJSON({data: data});
    // #TODO: Use offset later on once you figure out how.
    res.json({data: payload.slice(0, 500)})
})

// You need this to get all buoys to show on map of UI.

router.get('/all-buoys', async function(req, res) {
    let data = await base.fetchWrapper();
    let payload = txtToJSON({data: data});
    // #TODO: Use offset later on once you figure out how.
    res.json({data: payload.slice(0, 500)})
})

module.exports = router;
return router;