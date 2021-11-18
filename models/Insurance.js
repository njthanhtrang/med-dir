const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection.js');

class Insurance extends Model {}

Insurance.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    provider_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Provider",
        key: "id"
      },
    },
    patient_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "Patient",
        key: "id"
      }
    }
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
