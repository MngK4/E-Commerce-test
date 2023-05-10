// Packages
const express = require('express');
const mongoose = require('mongoose');
// const ejs = require('ejs');
const path = require('path');
const config = require('./config/database')
const bodyParser = require('body-parser');


// Init app
var app = express();

mongoose.connect(config.database)
.then(() => console.log('Connect to the database succesfully'))
.catch((error) => console.log('Connection was unsuccessful'));

// View engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Public folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.send('working');
});

// Body-parser middleware
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// Start local host
var port = 3000;
app.listen(port, function() {
    console.log('Sever started on port ' + port);
});