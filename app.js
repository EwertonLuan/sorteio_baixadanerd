
var express = require('express')
var fs = require('fs')
var path = require('path')
var router = require('./static/js/router')


var app = express()

app.set('view engine', 'pug')
app.set('views',path.join(__dirname, 'views'))


app.listen(3000, function () {
  console.log('Server started')
});


app.use('/', router)
app.use(express.static(path.join(__dirname,'static')))







