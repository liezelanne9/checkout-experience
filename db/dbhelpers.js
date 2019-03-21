const Users = require('./models.js');

// post
const postUserHelper = (obj) =>
    Users.create(obj)

const getUserHelper = () =>
    Users.findAll()

module.exports = {
    postUserHelper,
    getUserHelper
}