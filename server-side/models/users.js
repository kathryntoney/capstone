'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

      models.users.hasMany(models.favorites, {foreignKey: 'userID'})
    }
  }
  users.init({
    id: DataTypes.STRING,
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    profilePic: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'users',
  });
  return users;
};