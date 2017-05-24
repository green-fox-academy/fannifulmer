'use strict';

const playlists = document.querySelector('.playlists');
const tracklists = document.querySelector('.tracks');
const currentlyPlay = document.querySelector('.current_song');


const getPlaylists = function(callback) {
    const endpoint = 'http://localhost:3000/playlists';
    callback(endpoint, function(resp) {
        renderPlaylists(resp);
    });
}

const getTracks = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    callback(endpoint, function(resp) {
        renderTracks(resp);
    });
}

const ajax = function(url, callback) {
    const xhr =  new XMLHttpRequest();
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

const renderPlaylists = function(response) {
    const output = Mustache.render("{{#playlists}} <li class='listStyle'>{{title}}<span class='deleter'>X</span></li> {{/playlists}}", {playlists:response});
    console.log({playlists:response});
    playlists.innerHTML = output;
    console.log(output);
}

const renderTracks = function(response) {
    let songDuration = getTime(response[0].duration)
    const tracksOutput = Mustache.render("{{#tracks}} <li class='listStyle'><span>1.</span><a>{{title}}</a><span>" + songDuration + "</span></li> {{/tracks}}", {tracks:response});
    console.log({tracks:response});
    tracklists.innerHTML = tracksOutput;
    console.log(tracksOutput);
}

const render currentPlay = function(response) {
    const currentPlayOutput = Mustache.render("{{#currentPlay}}<h1 class="current_song">Purple Drift</h1>{{/currentPlay}}", {currentPlay:response}); {currentPlay:response});
    console.log({currentPlay:response});
    currentlyPlay.innerHTML = tracksOutput;
    console.log(tracksOutput);
}

const getTime = function(time) {   
    console.log(time);
    var minutes = "0" + Math.floor(time / 60);
    var seconds = "0" + time % 60;
    console.log(minutes);
    return minutes + ":" + seconds;
}

getPlaylists(ajax)
getTracks(ajax);