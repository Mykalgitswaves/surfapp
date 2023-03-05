require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors')

const apiRouter = require("./routes/apiRoutes.js");


const app = express();
const port = 3000;

// const feedRoutes = require('./routes/index');

app.use((req,res,next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

app.use(bodyParser.json()); // good for application/json 
app.use(cors());

app.use(apiRouter)

app.listen(port, () => {
    console.log('welcome to the surf app!')
})