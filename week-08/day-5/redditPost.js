'use strict';
console.log(getReddit);
var body = document.querySelector('body');
var newpost = document.querySelector('.newpost');

var postCreate = function() {
    var titleofPage = document.createElement('h1');
    titleofPage.innerHTML = 'submit to the page';
    titleofPage.classList.add('titleof_page');
    
    var blueLine = document.createElement('div');
    blueLine.classList.add('blue_line');
    
    
    var urlDiv = document.createElement('div');
    urlDiv.classList.add('url_div');
    
    var urlLabel = document.createElement('label');
    urlLabel.innerHTML = 'url';
    
    var urlInput = document.createElement('input');
    urlInput.classList.add('url_input');
    
    var title = document.createElement('label');
    title.innerHTML = 'title';
    var titleInput = document.createElement('textarea');
    titleInput.setAttribute("required", "");
    titleInput.classList.add('title_input');
    
    var options = document.createElement('label');
    options.innerHTML = 'options';
    var optionsInput = document.createElement('input');
    optionsInput.setAttribute('type', 'checkbox');
    optionsInput.setAttribute('id', 'check');
    // optionsInput.innerHTML = 'post as anonymus';
    
    var submitButton = document.createElement('button');
    submitButton.classList.add('submit_button');
    submitButton.innerHTML = 'submit';
    
    // var submitAnchor = document.createElement('a');
    // submitAnchor.setAttribute('href', 'reddit.html');
    
    body.appendChild(titleofPage);
    body.appendChild(blueLine);
    body.appendChild(urlDiv);
    urlDiv.appendChild(urlLabel);
    urlDiv.appendChild(urlInput);
    urlDiv.appendChild(title);
    urlDiv.appendChild(titleInput);
    urlDiv.appendChild(options);
    urlDiv.appendChild(optionsInput);
    body.appendChild(submitButton);
    // submitButton.appendChild(submitAnchor);
    submitButton.addEventListener('click', function(){
        postReddit(titleInput, urlInput, getReddit);
    });
    
} 

var postReddit = function(titleInput, urlInput, getReddit) {
    console.log(this);
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



postCreate();
