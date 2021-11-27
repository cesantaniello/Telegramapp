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

function listUsers(){
    return store.list();
}

module.exports = {
    addUser,
    listUsers,
}