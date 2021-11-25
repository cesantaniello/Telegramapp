const express = require('express');
const bodyParser = require('body-parser');
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
    res.send('Lista de mensajes');
});

router.post('/message', function (req, res) {
    res.send('Mensaje agregado');
});

router.delete('/message', function (req, res) {
    console.log(req.query);
    console.log(req.body);
    res.send('Mensaje '+ req.body.text +' borrado');
});

// app.use('/', function (req, res) {
//     res.send('Hola');
// });

app.listen(3000);
console.log('La aplicación está escuchando en http://localhost:3000');