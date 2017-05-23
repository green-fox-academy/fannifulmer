'use strict';

var body = document.querySelector('body');
var createNewpost = document.querySelector('.creatPost');
var url = 'http://localhost:3000/posts';
var container = document.querySelector('.container');
var mainMenu = document.querySelector('.main');

var getReddit = function(callback) {
    var reddit =  new XMLHttpRequest();
    reddit.open('GET', url, true);

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
    container.innerHTML = '';
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
    headline.innerHTML = post.title;
    headline.classList.add('headline');
    headline.setAttribute('href', post.href);
    
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
    
    container.appendChild(article);
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
    xhr.open('DELETE', url + '/' + id, true);
    xhr.setRequestHeader('Accept', 'application/json');

    xhr.send();

    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4) 
        getReddit(gettingData);
    }
}

var postCreate = function() {
    container.innerHTML = '';
    let coverDiv = document.createElement('div');
    coverDiv.classList.add('cover_div')
    
    let titleofPage = document.createElement('h1');
    titleofPage.innerHTML = 'submit to the page';
    titleofPage.classList.add('titleof_page');
    
    let blueLine = document.createElement('div');
    blueLine.classList.add('blue_line');
    
    let urlDiv = document.createElement('div');
    urlDiv.classList.add('url_div');
    
    let urlLabel = document.createElement('label');
    urlLabel.innerHTML = 'url';
    
    let urlInput = document.createElement('input');
    urlInput.classList.add('url_input');
    
    let title = document.createElement('label');
    title.innerHTML = 'title';
    
    let titleInput = document.createElement('textarea');
    titleInput.setAttribute("required", "");
    titleInput.classList.add('title_input');
    
    let options = document.createElement('label');
    options.innerHTML = 'options';
    let optionsInput = document.createElement('input');
    optionsInput.setAttribute('type', 'checkbox');
    optionsInput.setAttribute('id', 'check');
    // optionsInput.innerHTML = 'post as anonymus';
    
    let submitButton = document.createElement('button');
    submitButton.classList.add('submit_button');
    submitButton.innerHTML = 'submit';
    
    container.appendChild(coverDiv);
    coverDiv.appendChild(titleofPage);
    coverDiv.appendChild(blueLine);
    coverDiv.appendChild(urlDiv);
    urlDiv.appendChild(urlLabel);
    urlDiv.appendChild(urlInput);
    urlDiv.appendChild(title);
    urlDiv.appendChild(titleInput);
    urlDiv.appendChild(options);
    urlDiv.appendChild(optionsInput);
    coverDiv.appendChild(submitButton);
    // console.log(urlInput);
    submitButton.addEventListener('click', function(){
        postReddit(titleInput, urlInput, getReddit);
        coverDiv.style.display = 'none';
    });
    
} 

var postReddit = function(titleInput, urlInput, getReddit) {
    console.log(urlInput);
    console.log(titleInput);
    var xhr =  new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            var resp = JSON.parse(xhr.response);
            getReddit(gettingData);
        }
    }
    var newInput = {
        title: titleInput.value,
        href: urlInput.value
    }
    xhr.send(JSON.stringify(newInput));
}

createNewpost.addEventListener('click', function(){
    postCreate();
})

mainMenu.addEventListener('click', function(){
    getReddit(gettingData);
})

getReddit(gettingData);
