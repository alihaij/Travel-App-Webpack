const dotenv = require('dotenv');
dotenv.config();
var path = require('path');
const express = require('express');
const mockAPIResponse = require('./mockAPI.js');
const fetch = require('node-fetch');
const app = express();


const bodyParser= require('body-parser');
// Express to use body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// Cors for cross origin allowance
const cors=require('cors');
app.use(cors());
app.use(express.static('dist'))
console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

// designates what port the app will listen to for incoming requests
app.listen(3000, function () {
    console.log('Example app listening on port 3000')
})