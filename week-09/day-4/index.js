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


// conn.query(query, function(err,rows){
//     if(err) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data recevied from DB:\n");
//         rows.forEach(row => {
//             console.log(row.aut_name)        
//         });
//     }
// });


// const country = 'USA';
// const city = 'Atlanta';
// const query = "SELECT * FROM author WHERE country = ? AND home_city = ?"
// conn.query(query, [country, city], function(err,rows){
//     if(err) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data recevied from DB:\n");
//         rows.forEach(row => {
//             console.log(row.aut_name)        
//         });
//     }
// });
// 
// conn.query("SELECT * FROM author", function(err,rows){
//     if(err) {
//         console.log("PARA", err);
//     } else {
//         console.log("Data recevied from DB:\n");
//         rows.forEach(row => {
//             console.log(row.country)        
//         });
//     }
// });

const country = 'USA';
const city = 'Atlanta';
const query = {
    sql: "SELECT * FROM author WHERE country = ? AND home_city = ?",
    values: [country, city]
}

app.get('/', function get(req, res) {
    var result = [];
    conn.query( query, function(err,rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            rows.forEach(row => {
                result.push(row.aut_name);
            });
        }
        res.send(result);
    });
});

app.listen(3000, function () {
    console.log('server running');
})
