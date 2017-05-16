'use strict';
var express = require('express');

var app = express();

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});

app.use('/assets', express.static('assets'));

// app.get('/doubling/:input', function(req, res){
//     
// })
// app.get('/five/:lang', function(req, res){
//     var lang = req.params.lang;
//     var fiveFunc = five[lang];
//     res.send(fiveFunc());
});

app.listen(8080);