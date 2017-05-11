'use strict';
var rainRequest =  new XMLHttpRequest();
var pictureContainer = document.querySelector('.wrapper');
var imageContainer = document.querySelectorAll('img');
rainRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=rain&api_key=dc6zaTOxFJmzC', true);
rainRequest.onreadystatechange = function () {
        if(rainRequest.readyState === XMLHttpRequest.DONE && rainRequest.status === 200) {
            var resp = JSON.parse(rainRequest.response);
            console.log(resp);
            imageAdder(resp.data);
            }
        }
rainRequest.send();

var imageAdder = function(rainImages) {
    for (let j = 0; j <= 16; j++){
        var pictures = document.createElement('img');
        pictures.setAttribute('src', rainImages[j].images.original_still.url);
        pictures.addEventListener('click', onSwitchGif);
        pictureContainer.appendChild(pictures);
    }
}

var onSwitchGif = function(gifVideos){
    for (let k = 0; k <= 16; k++){
        imageContainer[k].setAttribute('src', gifVideos[k].images.downsized_medium
        .url);
    }

}