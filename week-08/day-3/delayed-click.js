'use strict';

var button = document.querySelector('button');
var wrapper = document.querySelector('div');
button.addEventListener('click', delayedClick);


function onClick(){
    var text = document.createElement('p');
    wrapper.appendChild(text);
    text.innerHTML = '2 seconds ellapsed';
    console.log(text);
}

function delayedClick(){
    setTimeout(onClick, 2000);
}
