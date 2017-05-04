'use strict';

var picture = document.querySelector('img');
console.log(picture.getAttribute('src'));
picture.setAttribute('src', 'new.jpg');

var link = document.querySelector('a');
link.setAttribute('href', 'https://www.greenfoxacademy.com/');

var thisButton = document.querySelector(".this-one")
thisButton.innerHTML = "Don't click me!";
thisButton.setAttribute("disabled", "disabled");