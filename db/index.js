// create database in MySQL
// import Sequelize
// instantiate connection from sequelize to database
// authenticate connection
// export connection

import Sequelize from 'sequelize';

const sequelize = new Sequelize('checkout_experience', 'root', 'hackreactor', {
    host: localhost,
    dialect: mysql
})

sequelize.authenticate()
    .then(() => console.log('---- database connected! ----'))
    .catch((err) => console.error(err))

module.exports = sequelize;