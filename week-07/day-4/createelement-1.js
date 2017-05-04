'use strict';

var astList = document.querySelector('.asteroids');
var fox = document.createElement('li');
var fox2 = document.createElement('li');
fox.textContent = 'The Green Fox';
fox2.textContent = 'The Lamplighter';
astList.appendChild(fox);
astList.appendChild(fox2);

var headCont = document.querySelector('.container');
var head = document.createElement('h1');
head.textContent = 'I can add elements to the DOM!';
headCont.appendChild(head);

var headContImg = document.createElement('img');
headCont.appendChild(headContImg);
console.log(headContImg);
headContImg.setAttribute('src', "https://static.wixstatic.com/media/f4461b_83457ca5dd844c71a760d36e6583d0ff.png/v1/fill/w_168,h_168,al_c,usm_0.66_1.00_0.01/f4461b_83457ca5dd844c71a760d36e6583d0ff.png");