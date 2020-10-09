const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('mysql://root:root@localhost:3306')

async function dbConnectTest () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  sequelize.close()
}

dbConnectTest()
