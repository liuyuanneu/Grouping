//design schema and methods
var db = require('./config.js');
var mongoose = require('mongoose');

var userSchema = mongoose.Schema({
  username:{
    type: String,
    required: true,
    index:{
      unique: true
    }
  },
  location:{
    type: String
  }
})