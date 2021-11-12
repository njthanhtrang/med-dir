const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Insurance extends Model {}

Insurance.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'insurance',
  }
);

module.exports = Insurance;
