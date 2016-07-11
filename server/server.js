var express = require('express');

var app = express();
var port = process.env.PORT || 8000;


app.listen(port);

console.log('server now listening in port' + port);

//routing here

module.exports = app;