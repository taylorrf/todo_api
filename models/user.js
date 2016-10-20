'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    firebase_key: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        User.hasMany(models.List);
        User.hasMany(models.Item);
      }
    }
  });
  return User;
};
