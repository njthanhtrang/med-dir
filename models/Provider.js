const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class Provider extends Model {}

Provider.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    provider_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    medical_assistant: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    visit_price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
    appointments: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      validate: {
        isNumeric: true
      }
    },
    specialty_id: {
      type: DataTypes.INTEGER,
      references: {
        model: "specialty",
        key: "id"
      }
    },
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
