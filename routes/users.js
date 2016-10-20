var models  = require('../models');

var users = function(app){
  app.post('/user', function(req, res, next) {
    models.User.create({
      firebase_key: req.body.firebase_key
    }).then(function(user) {
      res.json(user);
    })
  });

}

module.exports = users;
