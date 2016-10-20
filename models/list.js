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
