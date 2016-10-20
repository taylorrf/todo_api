var models  = require('../models');

var lists = function(app){
  app.get('/lists', function(req, res) {
    var user_id = req.header('user_id'); // TODO: get user from header firebase_key
    models.List.findAll({
      attributes:  { exclude: ['UserId'] },
      where: {
        user_id: user_id
      }
    }).then(function(lists) {
      res.json(app.presenters.ListPresenter.render(lists));
    });
  });

  // creates a list
  app.post("/list", function(req, res){
    models.List.create({
      title: req.body.title,
      user_id: req.body.user_id
    }).then(function(list) {
      res.json(app.presenters.ListPresenter.render(list));
    })
  });

  // delete a list
  app.delete("/list/:id", function(req, res){
    var list_id = req.params.id;
    models.List.destroy(
      {
        where: { id : list_id }
      })
      .then(function (result) {
        res.send("ok");
      }, function(rejectedPromiseError){
        res.send(rejectedPromiseError);
      });
  });
}

module.exports = lists;
