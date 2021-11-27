const Model = require('./model');

function addUser(user) {
    const myUser = new Model(user);
    myUser.save();
}

module.exports = {
    add: addUser,
}