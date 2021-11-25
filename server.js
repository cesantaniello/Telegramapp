const express = require('express');
const bodyParser = require('body-parser');

const response = require('./network/response');
const router = express.Router();

let app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(router);

router.get('/message', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "custom-value"
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/message', function (req, res) {
    console.log(req.query);
    (req.query.error == 'ok') 
        ? response.error(req, res, 'Error simulado', 400) 
        : response.success(req, res, 'Creado correctamente', 201);
});

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');