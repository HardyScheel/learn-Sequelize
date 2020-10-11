const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://learn-sequelize-user:learn-sequelize-user-password@localhost:3306/learn-sequelize', {
  logging: (...msg) => console.log(msg) // Displays all log function call parameters
})

// Providing the table name directly:
const Client = sequelize.define('Client', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'Clients'
})

// Test the model
console.log(Client === sequelize.models.Client) // true

// Model synchronization - This creates the table if it doesn't exist (and does nothing if it already exists)
if (Client.sync()) {
  console.log('The table "Clients" was just created!')
}
