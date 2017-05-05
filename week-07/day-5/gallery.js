'use strict'

var clickPhoto = document.querySelector('img');
var body = document.querySelector('body');

function onClick() {
    var zoomScreen = document.createElement('div');
    // var button = document.createElement('button');
    // zoomScreen.appendChild('button');
    console.log(zoomScreen);
    zoomScreen.style.width = '100%';
    zoomScreen.style.height = '100%';
    zoomScreen.style.position = "fixed"
    zoomScreen.style.left = 0;
    zoomScreen.style.top = 0;
    zoomScreen.style.backgroundColor = 'white';
    zoomScreen.zIndex = 10;
    body.appendChild(zoomScreen);
    
    // newphoto.setAttribute('src', 'clickPhoto.getAttribute("src")');
    // newphoto.style.display = 'flex';
}

clickPhoto.addEventListener('click', onClick);