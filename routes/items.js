var models  = require('../models');

var items = function(app){
  // Get all items of a list
  app.get('/items/:id', function(req, res) {
    var list_id = req.params.id;
    models.Item.findAll({
      attributes:  { exclude: ['UserId'] },
      where: {
        list_id: list_id
      }
    }).then(function(item) {
      res.json(app.presenters.ItemPresenter.render(item));
    });
  });

  // Create a new item
  app.post("/item", function(req, res){
    models.Item.create({
      description: req.body.description,
      checked: false,
      list_id: req.body.list_id,
      user_id: req.body.user_id,
    }).then(function(item) {
      res.json(app.presenters.ItemPresenter.render(item));
    })
  });

  // Check an item as complete
  app.post("/item/:id/checked", function(req, res){
    var item_id = req.params.id;
    models.Item.update(
      {
        checked: true
      },
      {
        where: { id : item_id }
      })
      .then(function (result) {
        res.json(result);
      }, function(rejectedPromiseError){
        res.send(rejectedPromiseError);
      });
  });

  // delete an item
  app.delete("/item/:id", function(req, res){
    var item_id = req.params.id;
    models.Item.destroy(
      {
        where: { id : item_id }
      })
      .then(function (result) {
        res.send("ok");
      }, function(rejectedPromiseError){
        res.send(rejectedPromiseError);
      });
  });
}
module.exports = items;
