'use strict';

var body = document.querySelector('body');
var createNewpost = document.querySelector('.creatPost');
var mainMenu = document.querySelector('.main');

var postCreate = function() {
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
    
    body.appendChild(coverDiv);
    coverDiv.appendChild(titleofPage);
    coverDiv.appendChild(blueLine);
    coverDiv.appendChild(urlDiv);
    urlDiv.appendChild(urlLabel);
    urlDiv.appendChild(urlInput);
    urlDiv.appendChild(title);
    urlDiv.appendChild(titleInput);
    urlDiv.appendChild(options);
    urlDiv.appendChild(optionsInput);
    body.appendChild(submitButton);
    submitButton.addEventListener('click', function(){
        postReddit(titleInput, urlInput, getReddit);
    });
    
} 

var postReddit = function(titleInput, urlInput, getReddit) {
    var redditPost =  new XMLHttpRequest();
    redditPost.open('POST', 'https://time-radish.glitch.me/posts', true);
    redditPost.setRequestHeader('Accept', 'application/json');
    redditPost.setRequestHeader('Content-Type', 'application/json');
    
    redditPost.onreadystatechange = function() {
        if(redditPost.readyState === 4 && redditPost.status === 200) {
            var resp = JSON.parse(redditPost.response);
            getReddit(gettingData);
        }
    }
    var newInput = {
        title: titleInput.value,
        href: urlInput.value
    }
    redditPost.send(JSON.stringify(newInput));
}

createNewpost.addEventListener('click', function(){
    postCreate();
    let articles = document.querySelectorAll('article');
    for (let i = 0; i < articles.length; i++){
        articles[i].style.display = 'none';
    }
})

mainMenu.addEventListener('click', function(){
    createPost();
})
