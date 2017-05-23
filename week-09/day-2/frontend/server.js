'use strict';
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use('/assets', express.static('assets'));

app.get('/', function(req, res){
    res.sendFile(__dirname + '/index.html');
});


app.get('/doubling', function(req, res){
    if (req.query === {} || req.query.input === undefined){
        res.send({
            error: "Please provide an input!"
        })
    } else {
        res.send({
            received: parseInt(req.query.input),
            result: req.query.input*2
        });
    }
});

app.get('/greeter', function(req, res){
    if (req.query.name === undefined){
        res.send({
            error: "Please provide a name!"
        });
    } else if (req.query.title === undefined){
        res.send({
            error: "Please provide a title!"
        });
    } else {
        res.send({
            welcome_message: "Oh, hi there " + req.query.name + ", my dear " + req.query.title + "!"
        });
    }
});

app.get('/appenda/:appendable', function(req, res){
        res.send({
            appended: req.params.appendable + 'a'
        })
});

const sum = function(number) {
    let total = 0;
    for (let i = 0; i < number + 1; i++) {
        total += i;
    }
    return total;
}

const factorio = function(number) {
    let total = 1;
    for (let i = 1; i < number + 1; i++) {
        total *= i;
    }
    return total;
}

app.post('/dountil/:what', function(req, res){
    if (req.params.what === 'sum'){
        console.log(sum(req.body.until));
        res.send({
            result: sum(req.body.until)
        })
    } else if (req.params.what === 'factor'){
        console.log(factorio(req.body.until));
        res.send({
            result: factorio(req.body.until)
        })
    } else {
        res.send({
            error: "Please provide a number!"
        })
    }
});


app.listen(8080);