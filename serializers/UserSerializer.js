'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var UserSerializer = new JSONAPISerializer('users', {
  attributes: ['id','firebase_key', 'updatedAt', 'createdAt']
});

module.exports = UserSerializer;
