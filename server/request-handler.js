var db = require('./users-database/config.js');
var User = require('./users-database/user.js');

exports.fetchGroup = function(req,res){
  User.find({})
    .exec(function(err,user){
      if(!err){
        res.send(200,user)
      }else{
        console.log('Can not get data from database.');
      }
    })
};

exports.addUser = function(req,res){
  console.log(req.body);
  var user = req.body.user;
  User.findOne({username: user.username})
    .exec(function(err,found){
      if(found){
        res.send(200,found);
      }else{
        var newUser = new User({

        });
        newUser.save(function(err,newuser){
          if(err){
            res.send(500,err);
          }else{
            res.send(200,newuser);
          }
        })
      }
    })
}
