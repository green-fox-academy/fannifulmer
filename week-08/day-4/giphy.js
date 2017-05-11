'use strict';
var rainRequest =  new XMLHttpRequest();
var pictureContainer = document.querySelector('.wrapper');
rainRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=rain&api_key=dc6zaTOxFJmzC', true);
rainRequest.onreadystatechange = function () {
        if(rainRequest.readyState === XMLHttpRequest.DONE && rainRequest.status === 200) {
            var resp = JSON.parse(rainRequest.response);
            imageAdder(resp.data)
            }
        }
rainRequest.send();

var imageAdder = function(images) {
    for (let j = 0; j <= 16; j++){
        var pictures = document.createElement('img');
        pictures.setAttribute('src', images[j].images.original_still.url)
        pictureContainer.appendChild(pictures);
    }
}