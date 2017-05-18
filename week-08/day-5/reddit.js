'use strict';

var body = document.querySelector('body');
var createNewpost = document.querySelector('.creatPost');

var getReddit = function(callback) {
    // let articleDel = document.querySelector('article');
    // articleDel.innerHTML = '';
    var reddit =  new XMLHttpRequest();
    reddit.open('GET', 'https://time-radish.glitch.me/posts', true);

    reddit.onreadystatechange = function() {
        if(reddit.readyState === XMLHttpRequest.DONE && reddit.status === 200) {
            var resp = JSON.parse(reddit.response);
            console.log(resp);
            callback(resp.posts);
        }
    }
    reddit.send();
}

var gettingData = function(baseData){
    for (let i = 0; baseData.length; i++){
        if (baseData[i].owner === null) {
            baseData[i].owner = 'anonymus';
        }
        createPost(baseData[i], i);
    }
}

 var createPost = function(post, i){
    let article = document.createElement('article');
    article.style.display = 'block';
    
    let span = document.createElement('span');
    span.classList.add('span');
    
    let upArrow = document.createElement('img');
    upArrow.setAttribute('src', 'upvote.png');
    upArrow.classList.add('upvote')
    
    let downArrow = document.createElement('img');
    downArrow.setAttribute('src', 'downvote.png');
    downArrow.classList.add('downvote')
    
    let counter = document.createElement('span');
    counter.classList.add("counter");
    counter.innerHTML = 1;
    
    let headline = document.createElement('a');
    headline.setAttribute('href', post.href);
    headline.classList.add('headline');
    headline.innerHTML = post.title;
    
    let submittion = document.createElement('span');
    submittion.classList.add('submittion');
    submittion.innerHTML = "submitted" + " " + timeago().format(post.timestamp) + " by" + " " + post.owner;
    
    let modify = document.createElement('a');
    modify.innerHTML = "modify";
    modify.classList = "modify"
    
    let remove = document.createElement('a');
    remove.innerHTML = "remove";
    span.innerHTML = i+1;
    remove.classList.add("remove");
    
    body.appendChild(article);
    article.appendChild(span);
    article.appendChild(downArrow)
    article.appendChild(upArrow);
    article.appendChild(counter); 
    article.appendChild(headline);
    article.appendChild(submittion);
    article.appendChild(modify);
    article.appendChild(remove);
    
    
    remove.addEventListener('click', function(){
        deleteReddit(post.id);
        var articles = document.querySelectorAll('article');
        article.style.display = "none";
        console.log(article);
    });

};

var deleteReddit = function(id) {
    var xhr =  new XMLHttpRequest();
    xhr.open('DELETE', 'https://time-radish.glitch.me/posts/' + id, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) {
        }
    }
}

getReddit(gettingData);
