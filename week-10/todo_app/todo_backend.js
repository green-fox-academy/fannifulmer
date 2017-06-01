'use strict';

const express = require("express");
const mysql = require("mysql");
const app = express();
let result;

app.use('/assets', express.static('assets'));

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "todo_application"
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/todo.html');
});

app.get('/todos', function(req, res){
    conn.query('SELECT * FROM todos', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            result = rows;
        }
        res.send(result);
    })
});

// app.get('/todos/:id', function(req, res){
//     conn.query('SELECT * FROM todos', function(err, rows){
//         if(err) {
//             console.log("PARA", err); 
//         } else {
//             result = rows;
//         }
//         res.send(result);
// })

app.listen(3000, () => {console.log('server is running')});