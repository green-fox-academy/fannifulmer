'use strict';

var url = 'http://localhost:3000/playlists';
const playlists = document.querySelector('.playlists');

var getPlaylists = function(callback) {
    var xhr =  new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var resp = JSON.parse(xhr.response);
            console.log(resp);
            callback(resp);
        }
    }
    xhr.send();
}

var renderPlaylists = function(response) {
    let output = Mustache.render("{{#tracks}} <li class='listStyle'>{{title}}<span class='deleter'>X</span></li> {{/tracks}}", {tracks:response});
    console.log({tracks:response});
    console.log(output);
    playlists.innerHTML = output;
}

getPlaylists(renderPlaylists);