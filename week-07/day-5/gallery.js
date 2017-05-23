'use strict'

var photoCollection = document.querySelectorAll('img');
var body = document.querySelector('body');
var images = document.querySelectorAll('.images');
var index;

function onClick(e) {
    var imgSrc = getSource(e);
    var imgIndex = getIndex(e);
    index = imgIndex;
    var zoomScreen = document.createElement('div');
    zoomScreen.classList.add("close");
    var wrapper = document.createElement('div');
    wrapper.classList.add("wrapper");
    var leftButton = document.createElement('button');
    leftButton.classList.add("leftclick");
    leftButton.innerHTML = '<';
    var rightButton = document.createElement('button');
    rightButton.classList.add("rightclick");
    rightButton.innerHTML = '>';
    var newImg = document.createElement('img');
    newImg.setAttribute('src', imgSrc);
    newImg.classList.add("zoomPicture");
    var button = document.createElement('button');
    button.classList.add("button");
    button.innerHTML = "X";
    zoomScreen.zIndex = 10;
    body.appendChild(zoomScreen);
    zoomScreen.appendChild(wrapper);
    wrapper.appendChild(button);
    wrapper.appendChild(newImg);
    wrapper.appendChild(leftButton);
    wrapper.appendChild(rightButton);
    button.addEventListener('click', xClick);
    leftButton.addEventListener('click', lClick);
    rightButton.addEventListener('click', rClick);
    console.log(newImg);


function lClick() {
    if (index === 0 || index === -1) {
        index = photoCollection.length-1;
        newImg.setAttribute('src', photoCollection[index].getAttribute('src'));
    } else {
        index--;
        newImg.setAttribute('src', photoCollection[index].getAttribute('src'));
    console.log(newImg);
}
}

function rClick() {
    if (index === photoCollection.length-1){
        index = 0;
        newImg.setAttribute('src', photoCollection[index].getAttribute('src'));
    } else {
    index++;
    newImg.setAttribute('src', photoCollection[index].getAttribute('src'));
}
}
};

for (var i = 0; i < photoCollection.length; i++) {
    photoCollection[i].addEventListener('click', onClick);
}

function xClick() {
    var zoomScreen = document.querySelector('.close');
    body.removeChild(zoomScreen);
}

function getSource(e) {
  var target = e.target || e.srcElement;
  var source = target.getAttribute('src');
  return source;
}

function getIndex(e) {
  var target = e.target || e.srcElement;
  var index = target.getAttribute('alt');
  return Number(index);
}

