const store = require('./store');

function addUser(name){
    if(!name){
        return Promise.reject('Name is required');
    }
    
    const user = {
        name: name
    };

    return store.add(user);
}

module.exports = {
    addUser,
}