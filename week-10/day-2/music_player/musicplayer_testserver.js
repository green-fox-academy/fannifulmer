'use strict';

const express = require("express");
const app = express();

app.get('/playlists', function(req, res){
    var dataServer = [
	{ "id": 1, "title": "Favorites", "system": 1},
	{ "id": 2, "title": "Music for programming", "system": 0},
	{ "id": 3, "title": "Driving", "system": 0},
	{ "id": 5, "title": "Fox house", "system": 0},
];
    res.send(dataServer)
});


app.listen(3000, () => {console.log('server is running')});