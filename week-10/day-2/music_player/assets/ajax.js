'use strict';

const playlists = document.querySelector('.playlists');
const tracklists = document.querySelector('.trackUl');
const currentlyPlay = document.querySelector('.currently_playing');
const deleter = document.querySelectorAll('.deleter');


const getPlaylists = function(callback) {
    const method = 'GET';
    const endpoint = 'http://localhost:3000/playlists';
    callback(method, endpoint, function(resp) {
        renderPlaylists(resp);
    });
}

const postPlaylist = function(){
    const method = 'POST';
    const endpoint = 'http://localhost:3000/playlists';
    
}

const getTracks = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    const method = 'GET';
    callback(method, endpoint, function(resp) {
        renderTracks(resp);
        audioControll(resp);
    });
}

const getCurrent = function(callback) {
    const endpoint = 'http://localhost:3000/playlist-tracks';
    const method = 'GET';
    callback(method, endpoint, function(resp) {
        // renderCurrentPlay(resp);
    });
}

const ajax = function(method, url, callback) {
    const xhr =  new XMLHttpRequest();
    xhr.open(method, url, true);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var resp = JSON.parse(xhr.response);
            callback(resp);
            // keypress(resp);
        }
    }
    xhr.send();
}

const keypress = function(resp, trackIndex, track, currentSong) {
    const audioSpaceToogle = document.querySelector('audio');
    let counter = 0;
    document.body.onkeyup = function(key){
        if(counter === 0 && key.keyCode === 32 ){
            audioSpaceToogle.play();
            counter++;
            highlighter(resp, trackIndex, currentSong);
        } else if (key.keyCode === 32){
            highlighter(resp, trackIndex, currentSong);
            audioSpaceToogle.pause();
            counter--;
        }
        audioSpaceToogle.addEventListener("ended", function(){
            trackIndex++;
            songChanger(resp, trackIndex, track); 
            highlighter(resp, trackIndex, currentSong);
        });
    }
}

const renderPlaylists = function(response) {
    const output = Mustache.render("{{#playlists}} <li class='listStyle'>{{title}}<span class='deleter'><img src='assets/trash_icon.png' class='trash_can'></span></li> {{/playlists}}", {playlists:response});
    playlists.innerHTML = output;
}


const renderTracks = function(response) {
    const tracksOutput = Mustache.render("{{#tracks}} <li class='clicked_track'><span>1.</span><a>{{title}}</a><span>{{duration}}</span></li> {{/tracks}}", {tracks:response});
    console.log(response);
    console.log({tracks:response});
    console.log(tracksOutput);
    tracklists.innerHTML = tracksOutput;
    // let onClickTrack = document.querySelectorAll('.clicked_track');
}

const audioControll = function(response) {
    let currentSong = document.querySelectorAll('.clicked_track');
    currentSong.forEach(function(track){
        const trackIndex = Array.from(track.parentNode.children).indexOf(track);
        track.addEventListener('click', function(){
            const trackIndex = Array.from(track.parentNode.children).indexOf(track);
            songChanger(response, trackIndex, track);
            highlighter(response, trackIndex, currentSong);
            playNextSong(response, trackIndex, track, currentSong);
        })
        keypress(response, trackIndex, track, currentSong);
    })    
}

const highlighter = function(resp, trackIndex, currentSong) {
        currentSong.forEach(function(el){
        el.classList.remove('songHighlight');
        currentSong[trackIndex].classList.add('songHighlight');
    })
}

const playNextSong = function(resp, trackIndex, track, currentSong){
    let audio = document.querySelector('audio');
    audio.addEventListener('ended', function(){
        if (trackIndex === currentSong.length - 1){
            trackIndex = 0;
        } else {
            trackIndex++;        
        }
        songChanger(resp, trackIndex, track); 
        highlighter(resp, trackIndex, currentSong);
    })
}

const songChanger = function(resp, trackIndex, track) {
    let songAudio = document.querySelector('audio');
    songAudio.setAttribute('autoplay', "");
    songAudio.setAttribute('src', resp[trackIndex].path);
    renderCurrentPlay(resp, trackIndex, track);
}

const renderCurrentPlay = function(resp, trackIndex, track) {
    currentlyPlay.innerHTML = "<h1 class='current_song'>" + resp[trackIndex].title + "</h1><h4 class='current_artist'>" + resp[trackIndex].artist + "</h4>"
}

getPlaylists(ajax)
getTracks(ajax);
getCurrent(ajax);