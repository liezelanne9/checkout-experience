const helpers = require('../db/dbhelpers.js');


const postUser = (req, res) => {
    helpers.postUserHelper(req.body) // state
    .then(() => res.status(200).send('user created'))
    .catch((err) => res.status(404).send(err))
}

const getUser = (req, res) => {
    let { email } = req.body
    helpers.getUserHelper(email)
    .then((data) => res.status(200).send(data))
    .catch((err) => res.status(404).send(err))
}

module.exports = {
    postUser,
    getUser
}