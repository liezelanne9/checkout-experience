// import Sequelize
// import database connection

// instantiate a Table in database

// sync to database

// export Table

const Sequelize = require('sequelize');
const sequelize = require('./index.js');

const Users = sequelize.define('users',
    {
        name: { type: Sequelize.STRING },
        email: { type: Sequelize.STRING, isEmail: true},
        password: { type: Sequelize.STRING },

        address1: { type: Sequelize.STRING },
        address2: { type: Sequelize.STRING},
        address_city: { type: Sequelize.STRING },
        address_state: { type: Sequelize.STRING(2) },
        address_zip: { type: Sequelize.BIGINT(5) },
        phone: { type: Sequelize.BIGINT(11) },

        cc_num: { type: Sequelize.INTEGER },
        cc_expmonth: { type: Sequelize.INTEGER },
        cc_expyear: { type: Sequelize.INTEGER },
        cc_ccv: { type: Sequelize.INTEGER },
        cc_zip: { type: Sequelize.BIGINT(5) }
    }
)

sequelize.sync()
.then(() => console.log('*-*-synced users table-*-*'))
.catch(err => console.error('Could not load table: ', err))

module.exports = Users;

// columns:
// F1:  name, 
//      email, 
//      password
// F2:  address line 1
//      address line 2, 
//      city,
//      state, 
//      zip code
//      phone number
// F3:  credit card #
//      expiry date, CVV, and billing zip code
