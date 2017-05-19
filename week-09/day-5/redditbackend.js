'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();
const cors = require('cors');
let result = {'posts': 0}

app.use(cors());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reddit"
});


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