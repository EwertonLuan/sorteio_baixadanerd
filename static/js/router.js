var express = require('express')
var router = express.Router()
var img = require('./busca_img.js')

var path = require('path')
function a(){
    setTimeout(function(){
        console.log(img)
    },3000)
}
a()

setTimeout(function(){
    router.get('/', function(req, res){
        res.render('index',{
            link: img[0] 
                   
        
        })
    })
},3000)
module.exports = router
