'use strict'

var photoCollection = document.querySelectorAll('img');
var body = document.querySelector('body');
var images = document.querySelector('.images');
var button 

function onClick() {
    var zoomScreen = document.createElement('div');
    zoomScreen.className += "close";
    button = document.createElement('button');
    button.style.backgroundColor = 'white';
    button.style.position = "fixed";
    button.style.right = 0;
    button.style.top = 0;
    button.innerHTML = "X";
    console.log(zoomScreen);
    zoomScreen.style.width = '100%';
    zoomScreen.style.height = '100%';
    zoomScreen.style.position = "fixed"
    zoomScreen.style.left = 0;
    zoomScreen.style.top = 0;
    zoomScreen.style.backgroundColor = 'white';
    zoomScreen.zIndex = 10;
    body.appendChild(zoomScreen);
    zoomScreen.appendChild(button);
    button.addEventListener('click', xClick);
}

for (var i = 0; i < photoCollection.length; i++) {
    photoCollection[i].addEventListener('click', onClick);
}

function xClick() {
    var zoomScreen = document.querySelector('.close');
    console.log(zoomScreen);
    body.removeChild(zoomScreen);
}

