'use strict';

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser.json());

let result;
let results;

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
    });
});

const tester = app.get('/todos/:id', function(req, res){
    conn.query('SELECT * FROM todos WHERE id = ?', req.params.id, function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            results = rows;
            if (results.length > 0){
                res.send(results);    
            } else {
                res.send('There is no such todo');
            };
        };
    });
});
module.exports = tester;

app.post('/todos', function(req, res){
    conn.query('INSERT INTO todos (title) VALUES("' + req.body.title + '");'  ,function(err,rows){
        res.send(result);
    });
});

app.delete('/todos/:id', function(req, res){
    conn.query('DELETE FROM todos WHERE id="' + req.params.id + '"' , function(err,rows){
        res.send(result);
    });
});


app.listen(3000, () => {console.log('server is running')})