var models  = require('../models');

var users = function(app){
  /**
  * @api {all requests} api/ API Authentication
  * @apiName Authenticate
  * @apiGroup Authentication
  *
  * @apiDescription The authentication strategy for all API requests used here is a header with an auth secret key.
  *
  * Our user key is the 'firebase_key' header. Use it to get proprely responses, otherwise you will get back an 403 Forbidden.
  *
  * An 'firebase_key' is storaged on the User (see how create a new user) as the unique key to identify him.
  *
  * We're using the http://firebase.google.com service to authenticate an User using their own credentials from
  * others services like Google Accounts, so feel free to also use it or modify it as you want.
  *
  * @apiHeader {String} firebase_key Unique Key provided by http://firebase.google.com service.
  *
  * @apiHeaderExample {json} Header-Example:
  *     {
  *       "firebase_key": "123123123"
  *     }
  *
  * @apiError UserNotFound The <code>firebase_key</code> of the User was not found.
  * @apiErrorExample {json} Error-Response:
  *     HTTP/1.1 403 Forbidden
  *     {
  *       "success": false,
  *       "message": "No User Key provided."
  *     }
  *
  */

  /**
  * @api {post} user Create a new User
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
  *      "type": "users",
  *      "attributes": {
  *        "id": "4",
  *        "firebase_key": "123123123",
  *        "updated-at": "2016-10-20T22:53:14.430Z",
  *        "created-at": "2016-10-20T22:53:14.430Z"
  *      }
  *    }
  *  }
  */
  app.post('/user', function(req, res, next) {
    var firebase_key = req.body.firebase_key;
    models.User.findOne({
      where: {
        firebase_key: firebase_key
      }
    }).then(function(user) {
      if (!user) {
        models.User.create({
          firebase_key: firebase_key
        }).bind(user).then(function(user){
            res.json(app.serializers.UserSerializer.serialize(user));
        })
      }else{
        res.json(app.serializers.UserSerializer.serialize(user));
      }
    })
  });

}

module.exports = users;
