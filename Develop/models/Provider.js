const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Provider extends Model {}

Provider.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'provider',
  }
);

module.exports = Provider;
