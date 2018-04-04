var request = require('request')
require('dotenv').load()

var api = 'http://api.meetup.com/'
var key = process.env.MEETUP

var eventId = '247832487' // id do evento no site do meetup
var path = '/MovimentoBaixadaNerd/events/'+eventId+'/attendance?key='+key+'&page=100'

var membros //aqui será o nome da pessoa sorteada para comparar com o perfil do meetup

var img = []

request(`${api}${path}`,(err,res,body)=>{
    var obj = JSON.parse(body)
    obj.forEach(function(o, index){
        if (o.member.name == membros){
           img.push(o.member.photo.highres_link)
            
        }
            
    })
        
})

module.exports = img
