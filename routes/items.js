var models  = require('../models');

var items = function(app){
  /**
   * @api {get} api/items/:id Get all Items from a List
   * @apiName GetItems
   * @apiGroup Item
   *
   * @apiParam {Number} id ID of a List.
   * @apiExample {curl} Example usage:
   *     curl -i http://localhost:3000/api/items/2
   * @apiSuccess {Integer} id Item ID.
   * @apiSuccess {String} description Description of the Item.
   * @apiSuccess {Integer} list-id ID of the List related with the Item
   * @apiSuccess {Boolean} checked  Item was already done? True/False
   * @apiSuccess {Date} created-at Date when the Item was created
   * @apiSuccess {Date} updated-at Date of the last Item update
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "data": [
   *    {
   *      "type":"items",
   *      "id":"1",
   *      "attributes":
   *        {
   *          "id":"1",
   *          "description":"to be done",
   *          "list-id":1,
   *          "checked":false,
   *          "created-at":"2016-10-20T19:36:58.751Z",
   *          "updated-at":"2016-10-20T19:36:58.751Z"
   *        }
   *    },
   *    {
   *      "type":"items",
   *      "id":"2",
   *      "attributes":
   *        {
   *          "id":"2",
   *          "description":"to be done",
   *          "list-id":1,
   *          "checked":false,
   *          "created-at":"2016-10-20T19:36:58.751Z",
   *          "updated-at":"2016-10-20T19:36:58.751Z"
   *        }
   *    }
   *  ]
   * }
   */
  app.get('/api/items/:id', function(req, res) {
    var list_id = req.params.id;
    models.Item.findAll({
      attributes:  { exclude: ['UserId'] },
      where: {
        list_id: list_id
      }
    }).then(function(item) {
      res.json(app.serializers.ItemSerializer.serialize(item));
    });
  });

  /**
   * @api {post} api/item/ Create a new Item
   * @apiName CreateItem
   * @apiGroup Item
   *
   * @apiParam {String} description  Item Description.
   * @apiParam {Integer} list_id ID of the List related with the Item
   *
   * @apiParamExample {json} Request-Example:
   *     {
   *       "description": "to do",
   *       "list_id": "1"
   *     }
   *
   * @apiSuccess {Integer} id Item ID.
   * @apiSuccess {String} description Description of the Item.
   * @apiSuccess {Integer} list-id ID of the List related with the Item
   * @apiSuccess {Boolean} checked  Item was already done? True/False
   * @apiSuccess {Date} created-at Date when the Item was created
   * @apiSuccess {Date} updated-at Date of the last Item update
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "data": {
   *      "type":"items",
   *      "id":"1",
   *      "attributes": {
   *          "id": 1,
   *          "description":"new to-do",
   *          "list-id":1,
   *          "checked":false,
   *          "created-at":"2016-10-20T19:36:58.751Z",
   *          "updated-at":"2016-10-20T19:36:58.751Z"
   *        }
   *    }
   * }
   */
  app.post("/api/item", function(req, res){
    var user_id = req.user_id;
    models.Item.create({
      description: req.body.description,
      checked: false,
      list_id: req.body.list_id,
      user_id: user_id,
    }).then(function(item) {
      res.json(app.serializers.ItemSerializer.serialize(item));
    })
  });

  /**
   * @api {put} api/item/ Edit the description of an Item
   * @apiName EditItem
   * @apiGroup Item
   *
   * @apiParam {Integer} id Item ID
   * @apiParam {String} description Item Description.
   *
   * @apiParamExample {json} Request-Example:
   *     {
   *       "id": "1"
   *       "description": "to do",
   *     }
   *
   * @apiSuccess {Integer} id Item ID.
   * @apiSuccess {String} description Description of the Item.
   * @apiSuccess {Integer} list-id ID of the List related with the Item
   * @apiSuccess {Boolean} checked  Item was already done? True/False
   * @apiSuccess {Date} created-at Date when the Item was created
   * @apiSuccess {Date} updated-at Date of the last Item update
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "data": {
   *      "type":"items",
   *      "id":"1",
   *      "attributes": {
   *          "id": 1,
   *          "description":"updated to-do",
   *          "list-id":1,
   *          "checked":false,
   *          "created-at":"2016-10-20T19:36:58.751Z",
   *          "updated-at":"2016-10-20T19:36:58.751Z"
   *        }
   *    }
   * }
   */
  app.put("/api/item", function(req, res){
    models.Item.findOne({
      attributes:  { exclude: ['UserId'] },
      where: {
        id: req.body.id
      }
    }).then(function(item) {
      if (item) {
        models.Item.update(
          {
            description: req.body.description
          },
          {
            where: { id : req.body.id }
          }
        );
        item.description = req.body.description;
        res.json(app.serializers.ItemSerializer.serialize(item));
      }else{
        res.json({
            success: false,
            message: 'Item not found.'
        });
      }
    });
  });

  /**
   * @api {put} api/item/:id/checked Check an Item
   * @apiName CheckItem
   * @apiGroup Item
   *
   * @apiParam {Number} id ID of an Item.
   */
  app.put("/api/item/:id/checked", function(req, res){
    var item_id = req.params.id;
    models.Item.update(
      {
        checked: true
      },
      {
        where: { id : item_id }
      }
    ).then(function (result) {
        res.json(result);
      }, function(rejectedPromiseError){
        res.send(rejectedPromiseError);
    });
  });

  /**
   * @api {delete} api/item/:id Delete an Item
   * @apiName DeleteItem
   * @apiGroup Item
   *
   * @apiParam {Number} id ID of an Item.
   */
  app.delete("/api/item/:id", function(req, res){
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
