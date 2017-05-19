'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();

app.get('/hello', function(req, res){
    var hello = function() {
        return 'hello World';
    }
    res.send(hello())    
});

app.listen(3000, function () {
    console.log('server running');
})