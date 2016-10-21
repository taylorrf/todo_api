'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var UserSerializer = new JSONAPISerializer('users', {
  attributes: ['firebase_key', 'updatedAt', 'createdAt']
});

module.exports = UserSerializer;
