'use strict'

var button = document.querySelector('button');
var press = document.querySelector('div');

function isOn() {
    press.classList.toggle('party');
}

button.addEventListener('click', isOn);