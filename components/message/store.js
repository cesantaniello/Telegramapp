const db = require('mongoose');
const Model = require('./model')

const uri = 'mongodb+srv://admin:admin@cluster0.ni2ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

db.Promise = global.Promise;

db.connect(uri, { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Conectado a MongoDB');
    })
    .catch(err => {
        console.error('No se ha podido conectar a la BB. DD.');
});


function addMessage(message) {
    const myMessage = new Model(message);
    myMessage.save();
}

async function getMessages(filterUser) {
    let filter = {};
    if (filterUser !== null) {
        filter = { user: filterUser };
    }
    const messages = await Model.find(filter);
    return messages;
}

async function updateText(id, message) {
    const foundMessage = await Model.findOne({
        _id: id
    });

    foundMessage.message = message;

    const newMessage = await foundMessage.save();
    return newMessage;
}

module.exports = {
    add: addMessage,
    list: getMessages,
    updateText: updateText,
    // get
    // update
    // delete
};
