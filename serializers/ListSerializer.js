'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var ListSerializer = new JSONAPISerializer('lists', {
  attributes: ['id','title', 'createdAt', 'updatedAt' ]
});

module.exports = ListSerializer;
