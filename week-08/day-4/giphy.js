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
    for (let i = 0; i < 16; i++){
        let pictures = document.createElement('img');
        pictures.setAttribute('src', rainImages[i].images.original_still.url);
        pictures.addEventListener('click', function () {
            pictures.setAttribute('src', rainImages[i].images.original.url);
        })
        pictureContainer.appendChild(pictures);
    }
}
