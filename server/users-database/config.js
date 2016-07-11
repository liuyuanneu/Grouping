//Mongo Database
var mongoose = require('mongoose');

var database = process.env.MONGODB_URI || 'mongodb://localhost:27017/test';
mongoose.connect(database);

mongoose.connection.on('error', function(err) {
  console.log('mongoose is not working');
});
mongoose.connection.on('open', function() {
  console.log('mongoose connected ok');
});