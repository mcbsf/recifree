import express = require('express');
import bodyParser = require("body-parser");
import {CadastroDeNoticias} from './cadastrodenoticias';

var app = express();

var cadastro: CadastroDeNoticias = new CadastroDeNoticias();

var allowCrossDomain = function(req: any, res: any, next: any) {
    res.header('Access-Control-Allow-Origin', "*");
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
}
app.use(allowCrossDomain);

app.use(bodyParser.json());

app.get('/noticias', function (req, res) {
	res.send(JSON.stringify(cadastro.getNoticias()));
})

app.post('/noticia', function (req: express.Request, res: express.Response) {
	var noticia: Noticia = <Noticia> req.body; //verificar se é mesmo Noticia!
  noticia = cadastro.criar(noticia);
  if (noticia) {
    res.send({"success": "O noticia foi cadastrado com sucesso"});
  } else {
    res.send({"failure": "O noticia não pode ser cadastrado"});
  }
})
})

app.put('/noticia', function (req: express.Request, res: express.Response) {

})

var server = app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})

function closeServer(): void {
   server.close();
}

export { app, server, closeServer }
