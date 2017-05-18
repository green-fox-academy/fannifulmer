'use strict';

const mysql = require("mysql");
const express = require("express");
const app = express();

var conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "bookstore"
});

const query = {
    sql: "SELECT book_name FROM book_mast"
}

app.get('/', function get(req, res) {
    var HTML = "<ul>"
    conn.query(query, function(err,rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            rows.forEach(row => {
                HTML += "<li>" + row.book_name + "</li>";
            });
            HTML += "</ul>"
        }
        res.send(HTML);
    });
});

app.listen(3000, function () {
    console.log('server running');
})
