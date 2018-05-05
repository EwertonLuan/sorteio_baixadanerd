var express = require('express')
var router = express.Router()
var bodyParser = require('body-parser')
var n = require('./busca_img.js')
var fs = require('fs')
require('dotenv').load()

var membros
var img

function test(){
 
    console.log(img)
    
 }

var membros 
var path = require('path')


router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: false }))

function gerar_imagem(imagem){
    return imagem
}

setTimeout(function(){
    router.post('/post', function(req, res){
    
        var conteudo = JSON.stringify(req.body);
        console.log(conteudo+'aqui')
        
        fs.writeFile('nome-do-ficheiro.txt', conteudo, 'utf8', function (err) {
            if (err) throw err;
            // correr código aqui depois do ficheiro estar gravado
            var imagem_arquivo
            setTimeout(function(){
                fs.readFile('imagem.txt', function(err,data){
                    if(err) {
                        console.error("Could not open file: %s", err)
                    }
                    arquivo = JSON.parse(data)
                    imagem_arquivo = arquivo.img                    
                    
                    console.log(imagem_arquivo)
                    res.render('post',{
                        link: imagem_arquivo                           
                    })
                })
            },3000)
        });

        n()

        console.log(conteudo)
        console.log(typeof(imagem_arquivo)+' tipo da imagem')

    })
},3000)

setTimeout(function(){
    
    router.get('/', function(req, res){
        res.render('index',{
        })    
    })
},3000)

module.exports = router
