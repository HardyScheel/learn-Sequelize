// # How to use Sequelize with MySQL

// ## Install Sequelize

// Sequelize is available via npm (or yarn).

// Install Sequelize to workspace:
// ```shell
// $ npm install --save sequelize
// ```

// You'll also have to manually install the driver for your database of choice:
// $ npm install --save mysql2

// ## Connect to a database

// To connect to the database, you must create a Sequelize instance. This can be done by either passing the connection parameters separately to the Sequelize constructor or by passing a single connection URI:

const { Sequelize } = require('sequelize')

// Option 1: Passing a connection URI
// const sequelize = new Sequelize('mysql://USERNAME:PASSWORD@localhost.com:3306/dbname')
const sequelize = new Sequelize('mysql://root:root@localhost:3306', {
  logging: (...msg) => console.log(msg) // Displays all log function call parameters
})

// Option 2: Passing parameters separately
// const sequelize = new Sequelize('database', 'username', 'password', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// const sequelize = new Sequelize('', 'root', 'root', {
//   host: 'localhost',
//   dialect: 'mysql'
// });

// Testing the connection
// You can use the .authenticate() function to test if the connection is OK:
async function dbConnectTest () {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
}

dbConnectTest()

// Closing the connection
// Sequelize will keep the connection open by default, and use the same connection for all queries. If you need to close the connection, call sequelize.close() (which is asynchronous and returns a Promise).
// sequelize.close()
