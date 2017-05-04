'use strict';

var remParent = document.querySelector('.asteroids');
var remChild = document.querySelector('li');
var remove = remParent.removeChild(remChild);
var fox = document.createElement('li');

for (var i = 0; i <= 3; i++) {
    fox.textContent = 'The Fox';
    remParent.appendChild(fox);
}