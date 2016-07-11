var express = require('express');
var requestHandler = require('./request-handler.js')
var app = express();
var port = process.env.PORT || 8000;


app.listen(port);

console.log('server now listening in port' + port);

//routing here
app.get('/api/group',requestHandler.fetchGroup);
app.post('/api/user',requestHandler.addUser);

module.exports = app;