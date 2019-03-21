const Sequelize = require('sequelize');

const sequelize = new Sequelize('checkout_experience', 'root', 'hackreactor', {
    host: 'localhost',
    dialect: 'mysql'
})

sequelize.authenticate()
    .then(() => console.log('---- database connected! ----'))
    .catch((err) => console.error('Unable to connect to database', err))

module.exports = sequelize;