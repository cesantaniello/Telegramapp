const express = require('express');
const router = express.Router();
const controller = require('./controller');
const response = require('../../network/response');

router.get('/:userId', function (req, res) {
    controller.listChats(req.params.userId)
        .then(users => {
            response.success(req, res, users, 200);
        })
        .catch(err => {
            response.error(req, res, 'Unexpected Error', 500, err);
        });
});

router.post('/', function (req, res) {

    controller.addChat(req.body.users)
        .then((data) => {
            response.success(req, res, data, 201);
        })
        .catch(err => {
            response.error(req, res, 'Información inválida', 500, err);
        });
});

module.exports = router;