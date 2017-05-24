'use strict';

var url = 'http://localhost:3000/playlists';

var getPlaylists = function(callback) {
    var xhr =  new XMLHttpRequest();
    xhr.open('GET', url, true);

    xhr.onreadystatechange = function() {
        if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            var resp = JSON.parse(xhr.response);
            console.log(resp);
            // callback(resp);
        }
    }
    xhr.send();
}


getPlaylists();