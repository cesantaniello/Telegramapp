const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/', function (req, res) {
    console.log(req.headers);
    res.header({
        "custom-header": "custom-value"
    });
    response.success(req, res, 'Lista de mensajes');
});

router.post('/', function (req, res) {

    controller.addMessage(req.body.user, req.body.message)
        .then((fullMessage) => {
            response.success(req, res, fullMessage, 201);
        })
        .catch(e => {
            response.error(req, res, 'Información inválida', 400, 'Error en el controlador');
        });
});

module.exports = router;