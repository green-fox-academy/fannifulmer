'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require('cors');
let result = {'posts': 0};

app.use(cors());
app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "reddit"
});

app.get('/hello', function(req, res){
    var hello = function() {
        return 'hello World';
    }
    res.send(hello())    
});

app.get('/posts', function(req, res){
    conn.query('SELECT * FROM posts', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            result.posts = rows;
        }
        res.send(result);
    })
})

app.post('/posts', function(req, res){
    let timestamp = Math.floor(Date.now() / 1000);
    let resp = {};
    conn.query('INSERT INTO posts (title, href, timestamp) VALUES( ' + '"' + req.body.title + '"' + ', "' + req.body.href + '"' + ',"' + timestamp + '");'  ,function(err,rows){
        conn.query('SELECT * FROM posts WHERE title="' +  req.body.title + '"', function(err, rows){
            if(err) {
                console.log("PARA", err); 
            } else {
                resp = rows;
            }
            res.send(resp);
        })
    })
})


app.delete('/posts/:id', function(req, res){
    let respDel = {};
    conn.query('DELETE FROM posts WHERE id="' + req.params.id + '"' ,function(err,rows){
        conn.query('SELECT * FROM posts', function(err, rows){
            if(err) {
                console.log("PARA", err); 
            } else {
                respDel = rows;
            }
            res.send(respDel);
        })
    })
});


app.listen(3000, function () {
    console.log('server running');
})