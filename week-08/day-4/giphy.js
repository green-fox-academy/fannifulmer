'use strict';
var rainRequest =  new XMLHttpRequest();
rainRequest.open('GET', 'http://api.giphy.com/v1/gifs/search?q=rain&api_key=dc6zaTOxFJmzC', true);
rainRequest.onreadystatechange = function () {
        if(rainRequest.readyState === XMLHttpRequest.DONE && rainRequest.status === 200) {
                // console.log(rainRequest.response);
                var resp = JSON.parse(rainRequest.response);
                for (let i = 0; i <= 16; i++){
                console.log(resp.data[i].images.original_still.url);
            }
        }
    };
rainRequest.send();

