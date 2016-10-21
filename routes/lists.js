var models  = require('../models');

var lists = function(app){
  /**
   * @api {get} api/lists Get all Lists
   * @apiName GetLists
   * @apiGroup Lists
   *
   * @apiSuccess {Integer} id List ID
   * @apiSuccess {String} title Title of the List.
   * @apiSuccess {Date} createdAt Date when the List was created
   * @apiSuccess {Date} updatedAt Date of the last List update
   *
   * @apiSuccessExample {json} Success-Response:
   * HTTP/1.1 200 OK
   * {
   *   "data": [
   *     {
   *       "id": "1",
   *       "type": "lists",
   *       "attributes": {
   *         "title": "Decluttering",
   *         "createdAt": "2016-10-20T16:40:43.878Z",
   *         "updatedAt": "2016-10-20T16:40:43.878Z"
   *       }
   *     },
   *     {
   *       "id": "2",
   *       "type": "lists",
   *       "attributes": {
   *         "title": "Kids school",
   *         "createdAt": "2016-10-20T16:43:01.269Z",
   *         "updatedAt": "2016-10-20T16:43:01.269Z"
   *       }
   *     }
   *   ]
   * }
   */
  app.get('/api/lists', function(req, res) {
    var user_id = req.user_id;
    models.List.findAll({
      attributes:  { exclude: ['UserId'] },
      where: {
        user_id: user_id
      }
    }).then(function(lists) {
      res.json(app.serializers.ListSerializer.serialize(lists));
    });
  });

  /**
  * @api {post} api/list/ Create a new List
  * @apiName CreateList
  * @apiGroup Lists
  *
  * @apiParam {String} title  List title.
  *
  * @apiParamExample {json} Request-Example:
  *     {
  *       "title": "to do"
  *     }
  *
  * @apiSuccess {Integer} id List ID
  * @apiSuccess {String} title Title of the List.
  * @apiSuccess {Date} createdAt Date when the List was created
  * @apiSuccess {Date} updatedAt Date of the last List update
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
  * {
  *   "data":[
  *    {
  *      "id":"1",
  *      "type":"lists",
  *      "attributes":
  *        {
  *          "title":"new awesome list",
  *          "createdAt":"2016-10-20T19:36:58.751Z",
  *          "updatedAt":"2016-10-20T19:36:58.751Z"
  *        }
  *    }
  *    ]
  * }
  */
  app.post("/api/list", function(req, res){
    var user_id = req.user_id;
    models.List.create({
      title: req.body.title,
      user_id: user_id
    }).then(function(list) {
      res.json(app.serializers.ListSerializer.serialize(list));
    })
  });

  /**
   * @api {delete} api/list/:id Delete a List
   * @apiName DeleteList
   * @apiGroup Lists
   *
   * @apiParam {Number} id ID of the List.
   */
  app.delete("/api/list/:id", function(req, res){
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
