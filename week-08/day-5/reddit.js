'use strict';

var body = document.querySelector('body');

var getReddit = function(callback) {
    console.log(callback);
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

// module.exports = getReddit;

var gettingData = function(baseData){
    for (let i = 0; baseData.length; i++){
        if (baseData[i].owner === null) {
            baseData[i].owner = 'anonymus';
        }
        createPost(baseData[i], i);
    }
}

 var createPost = function(post, i){
    console.log(post);
    let article = document.createElement('article');
    
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
    
    let submittion = document.createElement('span');
    submittion.classList.add('submittion');
    submittion.innerHTML = "submitted" + " " + timeago().format(post.timestamp) + " by" + " " + post.owner;
    
    let modify = document.createElement('a');
    modify.innerHTML = "modify";
    modify.classList = "modify"
    let remove = document.createElement('a');
    remove.innerHTML = "remove";
    remove.classList = "remove";
    headline.innerHTML = post.title;
    span.innerHTML = i+1;
    
    body.appendChild(article);
    article.appendChild(span);
    article.appendChild(downArrow)
    article.appendChild(upArrow);
    article.appendChild(counter); 
    article.appendChild(headline);
    article.appendChild(submittion);
    article.appendChild(modify);
    article.appendChild(remove);

};

getReddit(gettingData);