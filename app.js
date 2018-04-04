
var express = require('express')
var fs = require('fs')
var path = require('path')
var router = require('./static/js/router')
var img = require('./static/js/busca_img')

var app = express()

app.listen(3000, function () {
  console.log('Server started')
});


app.use(express.static(path.join(__dirname,'views')))
app.use(express.static(path.join(__dirname,'static')))







