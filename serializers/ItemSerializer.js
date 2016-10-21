'use strict';
var JSONAPISerializer = require('jsonapi-serializer').Serializer;

var ItemSerializer = new JSONAPISerializer('items', {
  attributes: ['id','description', 'list_id', 'checked', 'createdAt', 'updatedAt' ]
});

module.exports = ItemSerializer;
