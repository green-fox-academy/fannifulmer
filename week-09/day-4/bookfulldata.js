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
    sql: "SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id=book_mast.aut_id INNER JOIN category ON category.cate_id=book_mast.cate_id INNER JOIN publisher ON publisher.pub_id=book_mast.pub_id ORDER BY book_name"

}

app.get('/', function get(req, res) {
    var HTML = "<table>";
    HTML += "<tr> <th>" + "Book title" + "</th>";
    HTML += "<th>" + "Author's name" + "</th>";
    HTML += "<th>" + "Category" + "</th>";
    HTML += "<th>" + "Publisher's name" + "</th>";
    HTML += "<th>" + 'Book price' + "</th> </tr>";
    // var HTML = "<tr>";
    // var tableRow = [book_name, aut_name, cate_descrip, pub_name, book_price]
    conn.query(query, function(err,rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            rows.forEach(row => {
                console.log(rows);
                // console.log(row);
                HTML += "<tr> <td>" + row.book_name + "</td>";
                HTML += "<td>" + row.aut_name + "</td>";
                HTML += "<td>" + row.cate_descrip + "</td>";
                HTML += "<td>" + row.pub_name + "</td>";
                HTML += "<td>" + row.book_price + "</td> </tr>";
            });
            HTML += "</table>";
        }
        res.send(HTML);
    });
});

app.get('/books', function(req, res){
    var result = "<table>";
    result += "<tr> <th>" + "Book title" + "</th>";
    result += "<th>" + "Author's name" + "</th>";
    result += "<th>" + "Category" + "</th>";
    result += "<th>" + "Publisher's name" + "</th>";
    result += "<th>" + 'Book price' + "</th> </tr>";
    var queryParts = [];
    var sqlBase = "SELECT book_name, aut_name, cate_descrip, pub_name, book_price FROM book_mast INNER JOIN author ON author.aut_id=book_mast.aut_id INNER JOIN category ON category.cate_id=book_mast.cate_id INNER JOIN publisher ON publisher.pub_id=book_mast.pub_id";
    if (req.query.category){
        let category = 'cate_descrip = ' + '"' + req.query.category + '"';
        queryParts.push(category)
    }
    if (req.query.publisher){
        let publisher = 'pub_name = ' + '"' + req.query.publisher + '"';
        queryParts.push(publisher);
    }
    if (req.query.plt){
        let plt =  'book_price < ' + '"' + req.query.plt + '"';
        queryParts.push(plt);
    }
    if (req.query.pgt){
        let pgt =  'book_price > ' + '"' + req.query.pgt + '"';
        queryParts.push(pgt);
    }
    if (queryParts.length !== 0){
        sqlBase += " WHERE " + queryParts.join(" AND ");
    }
    console.log(sqlBase);
    
    conn.query(sqlBase, function(err,rows){
        if(err) {
            console.log("PARA", err); 
        } else {
            rows.forEach(row => {
                result += "<tr> <td>" + row.book_name + "</td>";
                result += "<td>" + row.aut_name + "</td>";
                result += "<td>" + row.cate_descrip + "</td>";
                result += "<td>" + row.pub_name + "</td>";
                result += "<td>" + row.book_price + "</td> </tr>";
            });
            result += "</table>";
        }
        res.send(result);
    });
    
});

app.listen(3000, function () {
    console.log('server running');
})


// conn.query(sqlDase, fuction (err, row){
//     if(err) {
//         console.log("PARA", err); 
//     } else {
//         rows.forEach(row => {
//             console.log(rows);
//             result += "<tr> <td>" + row.book_name + "</td>";
//             result += "<td>" + row.aut_name + "</td>";
//             result += "<td>" + row.cate_descrip + "</td>";
//             result += "<td>" + row.pub_name + "</td>";
//             result += "<td>" + row.book_price + "</td> </tr>";
//         });
//     }
//     result += "</table>";
//     res.send(result);
// });
