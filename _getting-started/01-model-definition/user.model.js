const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('mysql://learn-sequelize-user:learn-sequelize-user-password@localhost:3306/learn-sequelize', {
  logging: (...msg) => console.log(msg) // Displays all log function call parameters
})

// Using sequelize.define - Model Definition:
const User = sequelize.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
})

// Test the model
console.log(User === sequelize.models.User) // true

// Model synchronization - This creates the table if it doesn't exist (and does nothing if it already exists)
if (User.sync()) {
  console.log('The table "Users" was just created!')
}
