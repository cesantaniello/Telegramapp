const express = require('express');

let app = express();

app.use('/', function (req, res) {
    res.send('Hola');
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');