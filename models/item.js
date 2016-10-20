'use strict';
module.exports = function(sequelize, DataTypes) {
  var Item = sequelize.define('Item', {
    description: DataTypes.STRING,
    list_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    checked: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        Item.belongsTo(models.List, {
          onDelete: "CASCADE",
          foreignKey: {
            name: "list_id",
            allowNull: false
          }
        });
        Item.belongsTo(models.User, {
          onDelete: "CASCADE",
          foreignKey: {
            name: "user_id",
            allowNull: false
          }
        });
      }
    }
  });
  return Item;
};
