const { Sequelize, DataTypes, Model } = require('sequelize')

const sequelize = new Sequelize('mysql://sequelize-test-user:sequelize-test-user-password@localhost:3306/sequelize-test', {
  logging: (...msg) => console.log(msg) // Displays all log function call parameters
})

// Extending Model - Model Definition:
class Cat extends Model { }

Cat.init({
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  }
}, {
  sequelize,
  modelName: 'Cat'
})

// Test the model
console.log(Cat === sequelize.models.Cat) // true

// Model synchronization - This creates the table if it doesn't exist (and does nothing if it already exists)
if (Cat.sync()) {
  console.log('The table "Cats" was just created!')
}
