'use strict';
module.exports = function(sequelize, DataTypes) {
  var List = sequelize.define('List', {
    title: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {
    classMethods: {
      associate: function(models) {
        List.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            name: "user_id",
            allowNull: false
          }
        });
      }
    }
  });
  return List;
};


/*

User {
  id: firebase_key
  name: "John Armless"
  dreams: [array of dreams]
}

Dream {
  id: 1 // long
  category: "Travel" // any string
  subcategory: "Camping" // any string
  user: {User entity}
  layers: [array of layers]
}

Layer {
  id: 1 // long
  type: // "photo", "video", "product" (constant string)
  description: "This is my dream" // the description of this layer
  url: "http://url.to.resource"
  productId: // Only for shopify's product ID (https://help.shopify.com/api/reference/product)
}

*/