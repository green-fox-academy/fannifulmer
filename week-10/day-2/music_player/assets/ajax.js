'use strict';

const playlists = document.querySelector('.playlists');
const tracklists = document.querySelector('.trackUl');
const currentlyPlay = document.querySelector('.currently_playing');
const deleter = document.querySelectorAll('.deleter');


const getPlaylists = function(callback) {
    const endpoint = 'http://localhost:3000/playlists';
    callback(endpoint, function(resp) {
        console.log(resp);
        renderPlaylists(resp);
    });
}

const getTracks = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    callback(endpoint, function(resp) {
        renderTracks(resp);
        audioControll();
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
    const tracksOutput = Mustache.render("{{#tracks}} <li class='clicked_track'><span>1.</span><a>{{title}}</a><span>{{duration}}</span></li> {{/tracks}}", {tracks:response});
    tracklists.innerHTML = tracksOutput;
    // let onClickTrack = document.querySelectorAll('.clicked_track');
}

const currentPlayingSong = function(response){
    console.log('alma');
}

const renderCurrentPlay = function(response) {
    // const currentPlayOutput = Mustache.render("{{#currentPlay}}<h1 class='current_song'>{{title}}</h1><h4 class='current_artist'>{{artist}}</h4>{{/currentPlay}}", {currentPlay:response});
    // currentlyPlay.innerHTML = currentPlayOutput;
    currentlyPlay.innerHTML = "<h1 class='current_song'>" + response[0].title + "</h1><h4 class='current_artist'>" + response[0].artist + "</h4>"
}

const audioControll = function() {
    let currentSong = document.querySelectorAll('.clicked_track');
    currentSong.forEach(function(track){
        track.addEventListener('click', function(){
            Array.from(track.parentNode.children).indexOf(track)
            console.log(track);
        })   
    })    
}

getPlaylists(ajax)
getTracks(ajax);
getCurrent(ajax);