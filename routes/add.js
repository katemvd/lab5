var data = require("../data.json");

exports.addFriend = function(req, res) {    
  var name = req.query.name;
  var description = req.query.description; 
  var userobj = {"name": name, "description": description, "imageURL": "http://lorempixel.com/400/400/people"};
  console.log(userobj);
  data.friends.push(userobj);
  res.render('index', data);
 }
