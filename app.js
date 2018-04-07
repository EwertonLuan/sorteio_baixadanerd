
var express = require('express')
var fs = require('fs')
var path = require('path')
var router = require('./static/js/router')
var bodyParser = require('body-parser');

var app = express()

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))
// app.post('/post', function(req, res){
//   var conteudo = JSON.stringify(req.body);
//   console.log(conteudo)
  
  // res.end('sucesso')
//   // var fs = require('fs');
//   // fs.writeFile('nome-do-ficheiro.txt', conteudo, 'utf8', function (err) {
//   //   if (err) throw err;
//   //   // correr código aqui depois do ficheiro estar gravado

//   // });
// });

app.set('view engine', 'pug')
app.set('views',path.join(__dirname, 'views'))


app.listen(3000, function () {
  console.log('Server started')
});


app.use('/', router)
app.use('/post', router)
app.use(express.static(path.join(__dirname,'static')))


