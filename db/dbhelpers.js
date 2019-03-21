const Users = require('./models.js');

// post
const postUserHelper = () =>
    Users.create({})

// update
const formOneHelper = (name, email, password) => {
    Users.update()
}


// get

module.exports = {
    postUserHelper
}