'use strict';

const playlists = document.querySelector('.playlists');
const tracklists = document.querySelector('.tracks');
const currentlyPlay = document.querySelector('.currently_playing');
const deleter = document.querySelectorAll('.deleter');


const getPlaylists = function(callback) {
    const endpoint = 'http://localhost:3000/playlists';
    callback(endpoint, function(resp) {
        console.log(resp);
        renderPlaylists(resp.playlists);
    });
}

const getTracks = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    callback(endpoint, function(resp) {
        renderTracks(resp.tracks);
    });
}

const getCurrent = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    callback(endpoint, function(resp) {
        renderCurrentPlay(resp);
    });
}

const ajax = function(url, callback) {
    const xhr =  new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var resp = JSON.parse(xhr.response);
            callback(resp);
        }
    }
    xhr.send();
}

const renderPlaylists = function(response) {
    console.log(response);
    const output = Mustache.render("{{#playlists}} <li class='listStyle'>{{title}}<span class='deleter'>X</span></li> {{/playlists}}", {playlists:response});
    console.log(response);
    playlists.innerHTML = output;
}


const renderTracks = function(response) {
    // let songDuration = getTime(response[0].duration)
    const tracksOutput = Mustache.render("{{#tracks}} <li class='listStyle'><span>1.</span><a>{{title}}</a><span>{{duration}}</span></li> {{/tracks}}", {tracks:response});
    tracklists.innerHTML = tracksOutput;
}

// const renderCurrentPlay = function(response) {
//     const currentPlayOutput = Mustache.render("{{#currentPlay}}<h1 class='current_song'>{{title}}</h1><h4 class='current_artist'>{{artist}}</h4>{{/currentPlay}}", {currentPlay:response});
//     currentlyPlay.innerHTML = currentPlayOutput;
// }
// 
// const getTime = function(time) {
//     var minutes = "0" + Math.floor(time / 60);
//     var seconds = "0" + time % 60;
//     return minutes + ":" + seconds;
// }


getPlaylists(ajax)
getTracks(ajax);
// getCurrent(ajax);