'use strict';

const express = require("express");
const app = express();

app.get('/', function(req, res){
    var hello = function() {
        return 'hello World';
    }
    res.send(hello())    
});


app.listen(3000, () => {console.log('server is running')});