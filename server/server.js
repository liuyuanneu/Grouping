var express = require('express');
var requestHandler = require('./request-handler.js')
var app = express();
var port = process.env.PORT || 8000;

var morgan = require('morgan');
var parser = require('body-parser');

//Logging and parsing

app.use(morgan('dev'));
app.use(parser.json());

//Set up our routes
app.get('/api/group',requestHandler.fetchGroup);
app.post('/api/user',requestHandler.addUser);

//Serve the client files
app.use(express.static(__dirname + '/../client'));

app.listen(port);

console.log('server now listening in port' + port);

module.exports = app;