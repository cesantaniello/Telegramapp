const express = require('express');
const app = express();
const server = require('http').Server(app);


const bodyParser = require('body-parser');
const socket = require('socket.io');
const db = require('./db');
const router = require('./network/routes');

db('mongodb+srv://admin:admin@cluster0.ni2ao.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

socket(server);

router(app);

app.use('/app', express.static('public'));

server.listen(3000, function() {
    console.log('La aplicación está escuchando en http://localhost:3000');
});