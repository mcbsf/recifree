"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const bodyParser = require("body-parser");
const cadastrodenoticias_1 = require("./cadastrodenoticias");
var app = express();
exports.app = app;
var cadastro = new cadastrodenoticias_1.CadastroDeNoticias();
var allowCrossDomain = function (req, res, next) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
};
app.use(allowCrossDomain);
app.use(bodyParser.json());
app.get('/noticias', function (req, res) {
    res.send(JSON.stringify(cadastro.getNoticias()));
});
app.post('/noticia', function (req, res) {
    var noticia = req.body; //verificar se é mesmo Noticia!
    noticia = cadastro.criar(noticia);
    if (noticia) {
        res.send({ "success": "O noticia foi cadastrado com sucesso" });
    }
    else {
        res.send({ "failure": "O noticia não pode ser cadastrado" });
    }
});
app.put('/noticia', function (req, res) {
    console.log('PUT /noticia: ' + req);
    var noticia = req.body;
    noticia = cadastro.atualizar(noticia);
    if (noticia) {
        res.send({ "success": "Formulário atualizado com sucesso" });
    }
    else {
        res.send({ "failure": "Formulário não atualizado" });
    }
});
var server = app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
exports.server = server;
function closeServer() {
    server.close();
}
exports.closeServer = closeServer;
//# sourceMappingURL=rd-server.js.map