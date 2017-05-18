'use strict';

var deleteReddit = function(id) {
    var redditDelete =  new XMLHttpRequest();
    redditDelete.open('DELETE', 'https://time-radish.glitch.me/posts' + id, true);
    redditDelete.setRequestHeader('Accept', 'application/json');
    
    redditDelete.send();
    
    // 
    redditDelete.onreadystatechange = function() {
        if(redditDelete.readyState === 4 && redditDelete.status === 200) {
            // var resp = JSON.parse(redditDelete.response);
            getReddit(gettingData);
        }
    }
}

var removeButton = document.querySelectorAll('.remove');
console.log(removeButton);
removeButton.addEventListener('click', function(){
    console.log('delete');
    deleteReddit();
});