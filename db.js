const db = require('mongoose');

db.Promise = global.Promise;

async function connect(uri) {
    await db.connect(uri, { 
        useNewUrlParser: true,
        useUnifiedTopology: true,
        })
        .then(() => {
            console.log('Conectado a MongoDB');
        })
        .catch(err => {
            console.error('No se ha podido conectar a la BB. DD.');
    });
}

module.exports = connect;
