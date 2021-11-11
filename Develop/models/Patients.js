const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Patients extends Model {}

Patients.init(
  {
    // define columns
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'patients',
  }
);

module.exports = Patients;
