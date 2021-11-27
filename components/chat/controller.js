const store = require('./store');

function addChat(users) {
        if(!user || !Array.isArray(users)) {
            return Promise.reject('Invalid data');
        }

        const chat = {
            users: users,
        };
        return store.add(chat);
}

function listChats(userId) {
    return store.list(userId);
}

module.exports = {
    addChat,
    listChats,
};