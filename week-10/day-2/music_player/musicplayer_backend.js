'use strict';

const express = require("express");
const mysql = require("mysql");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();
var result;
var trackResult;

app.use('/assets', express.static('assets'));
// app.use(cors());
// app.use(bodyParser.json());

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "musicplayer"
});

app.get('/', function(req, res){
    res.sendFile(__dirname + '/musicplayer.html');
});

app.get('/playlists', function(req, res){
    conn.query('SELECT * FROM playlists', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            result = rows;
        }
        res.send(result);
    })
});

app.get('/playlist-tracks', function(req, res){
    conn.query('SELECT * FROM tracks', function(err, rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            trackResult = rows;
        }
        res.send(trackResult);
    })
});


app.listen(3000, () => {console.log('server is running')});