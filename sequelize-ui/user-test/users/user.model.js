const { DataTypes } = require('sequelize')

module.exports = model

function model(sequelize) {
  const attributes = {
    customerId: { type: DataTypes.STRING, allowNull: false },
    firstName: { type: DataTypes.STRING, allowNull: false },
    lastName: { type: DataTypes.STRING, allowNull: false },
    created: { type: DataTypes.DATE, allowNull: false, defaultValue: DataTypes.NOW },
    updated: { type: DataTypes.DATE }
  }
  const options = {
    // disable Sequelize's default timestamp fields (createdAt and updatedAt)
    timestamps: false
  }
  return sequelize.define('user', attributes, options);
}
