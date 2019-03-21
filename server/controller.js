const helpers = require('../db/dbhelpers.js');


const postUser = (req, res) => {
    helpers.postUserHelper()
    .then(() => res.status(200).send('user created'))
    .catch((err) => res.status(404).send(err))
}

// const updateForm1 = (req, res)

module.exports = {
    postUser
}