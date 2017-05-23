'use strict';

var body = document.querySelector('body');
var createNewpost = document.querySelector('.creatPost');
var mainMenu = document.querySelector('.main');
var container = document.querySelector('.container');
var url = 'http://localhost:3000/posts';

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
    submitButton.addEventListener('click', function(){
        postReddit(titleInput, urlInput, getReddit);
        coverDiv.style.display = 'none';
    });
    
} 

var postReddit = function(titleInput, urlInput, getReddit) {
    var xhr =  new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.setRequestHeader('Content-Type', 'application/json');
    
    xhr.onreadystatechange = function() {
        if(xhr.readyState === 4 && xhr.status === 200) {
            console.log(xhr.response);
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
    console.log('bello');
    postCreate();
    // let articles = document.querySelectorAll('article');
    // for (let i = 0; i < articles.length; i++){
    //     articles[i].style.display = 'none';
    // }
})

mainMenu.addEventListener('click', function(){
    console.log('hello');
    // let artic = document.querySelectorAll('article');
    // for (let i = 0; i < artic.length; i++){
    //     artic[i].style.display = 'block';
    // let coverdiv = document.querySelector('.cover_div');
    // coverdiv.style.display = 'none';
    // }
})
