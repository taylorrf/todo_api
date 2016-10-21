var models  = require('../models');

var users = function(app){
  /**
  * @api {all requests} api/ API Authentication
  * @apiName Authenticate
  * @apiGroup Authentication
  *
  * @apiDescription User authentication is required for all requests.
  *
  * To identify an user, you should provide the 'firebase_key' key on all headers.
  *
  * Please, always provide an valid 'firebase_key' key to get a successful response.
  *
  * @apiHeader {String} firebase_key Unique Key provided by firebase.google.com service.
  *
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "firebase_key": "123123123"
  *     }
  *
  */

  /**
  * @api {post} api/user Create a new User
  * @apiName CreateUser
  * @apiGroup User
  *
  * @apiParam {String} firebase_key Unique Key provided by firebase.google.com service.
  *
  * @apiParamExample {json} Request-Example:
  *     {
  *       "firebase_key": "123123123"
  *     }
  *
  * @apiSuccessExample {json} Success-Response:
  * HTTP/1.1 200 OK
  *  {
  *    "data": {
  *      "id": "4",
  *      "type": "lists",
  *      "attributes": {
  *        "id": 4,
  *        "firebase_key": "123123123",
  *        "updatedAt": "2016-10-20T22:53:14.430Z",
  *        "createdAt": "2016-10-20T22:53:14.430Z"
  *      }
  *    }
  *  }
  */
  app.post('/api/user', function(req, res, next) {
    models.User.create({
      firebase_key: req.body.firebase_key
    }).then(function(user) {
      res.json(app.presenters.UserPresenter.render(user));
    })
  });

}

module.exports = users;
