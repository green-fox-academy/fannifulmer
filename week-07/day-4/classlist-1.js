'use strict';

if (document.querySelector('.cat')) {
    alert('YEAH CAT!');
}

var pElements = document.querySelectorAll('p');

if (pElements[3].className === "dolphin") {
    document.querySelector('.apple').innerHTML = 'pear';
}

if (pElements[0].className === "apple") {
    document.querySelector('.cat').innerHTML = 'dog';
}

pElements[0].setAttribute('class', 'red');

var ball = document.querySelector('.balloon');
ball.style.borderRadius = "0%";


