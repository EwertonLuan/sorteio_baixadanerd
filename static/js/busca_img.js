var request = require('request')
var fs = require('fs')
// var dotenv = require('./../../node_modules/dotenv')
require('dotenv').load()

// var result = dotenv.config()

// if ( result.error ) {
//   throw result.error
// }

// console.log ( result.parsed)

// var membros


function read(){
    var membros
    var test
    fs.readFile('nome-do-ficheiro.txt', function(err,data){
        if(err) {
            console.error("Could not open file: %s", err)
        }
        
        var nome = JSON.parse(data)

        if (!nome.nome){
            membros = nome.name
        }else{
            membros = nome.nome
        }
        console.log('nome do membro enviado para imagem'+ membros)
        imagem(membros)
    })

}
function imagem(membros){
    var img = []
    var api = 'http://api.meetup.com/'
    var key = process.env.MEETUP_API
    

    var eventId = '247832487' // id do evento no site do meetup
    var path = '/MovimentoBaixadaNerd/events/'+eventId+'/attendance?key='+key+'&page=1000'
    var test=[]
    request(`${api}${path}`,(err,res,body)=>{

        var obj = JSON.parse(body)
        console.log('O nome passado para imagem foi '+membros)
        var teste = 0
        obj.forEach(function(o, index){
            var valida
            var padrao
            
            if(o.member.name == membros ){
                
                if(o.member.photo) {
                    console.log('o membro tem foto')
                    valida = o.member.photo.photo_link
                    teste= 1
                }else{
                    console.log('o membro tem foto não tem foto')
                    valida = '/img/baixada.png'
                    teste= 1

                    fs.writeFile('imagem.txt',valida, 'utf8', function (err) {
                    if (err) throw err;
                    // correr código aqui depois do ficheiro estar gravado

                });

                // fs.writeFile('nome-do-ficheiro.txt',usuario_metup, 'utf8', function (err) {
                //     if (err) throw err;
                //     // correr código aqui depois do ficheiro estar gravado

                // });
                }
                padrao = '{"img":"'+valida+'"}'
                console.log('modelo padrao'+padrao)

                fs.writeFile('imagem.txt',padrao, 'utf8', function (err) {
                    if (err) throw err;
                    // correr código aqui depois do ficheiro estar gravado

                });


                return false
        }
        if(teste == 0){
            console.log('o membro não esta no metup')
            var valida = '/img/robo.png'
            padrao = '{"img":"'+valida+'"}'

            fs.writeFile('imagem.txt',padrao, 'utf8', function (err) {
            if (err) throw err;
            // correr código aqui depois do ficheiro estar gravado
            return false

        });
        }

    })
    setTimeout(function(){
        test.push(img[0])
    },3000)
})
    
}
function agr_vai(img){
    read()

}
module.exports = agr_vai

