'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reddit"
});

var result = {'posts': 0}

app.get('/posts', function(req, res){
    conn.query('SELECT * FROM posts', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            result = rows;
        }
        res.send(result);
    })
})


app.get('/hello', function(req, res){
    var hello = function() {
        return 'hello World';
    }
    res.send(hello())    
});

app.listen(3000, function () {
    console.log('server running');
})