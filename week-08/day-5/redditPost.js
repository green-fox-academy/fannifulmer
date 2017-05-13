'use strict';

var body = document.querySelector('body');
var newpost = document.querySelector('.newpost');

var postCreate = function() {
    console.log('hello');
    var urlLabel = document.createElement('label');
    urlLabel.innerHTML = 'url';
    
    var urlInput = document.createElement('input');
    
    var title = document.createElement('label');
    title.innerHTML = 'title';
    var titleInput = document.createElement('textarea');
    titleInput.setAttribute("required", "");
    
    var options = document.createElement('label');
    var optionsInput = document.createElement('input');
    optionsInput.setAttribute('type', 'checkbox');
    optionsInput.setAttribute('id', 'check');
    // optionsInput.setAttribute("checked disabled", "");
    
    var submitButton = document.createElement('button');
    submitButton.innerHTML = 'submit';
    
    body.appendChild(urlLabel);
    body.appendChild(urlInput);
    body.appendChild(title);
    body.appendChild(titleInput);
    body.appendChild(options);
    body.appendChild(optionsInput);
    body.appendChild(submitButton);
} 
postCreate();

