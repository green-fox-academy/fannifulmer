'use strict';
// Click Three Times
// 
// Create a simple HTML document with one button. If the user clicks the button 3 times, and 5 seconds is already ellapsed since the page is loaded, a text should apper under the button: 5 seconds ellapsed and clicked 3 times

'use strict';

var button = document.querySelector('button');
var wrapper = document.querySelector('div');
var time = false;
var buttonClicked = 0;

var timer = function(){
    if (buttonClicked === 3){
        time = true;
        showdiv();
    } else {
        time = true;
        clicker();
    }
}

var clicker = function(){
    buttonClicked++;
    if (buttonClicked === 4 && time === true) {
        showdiv()
}
}

function showdiv() {
    if (buttonClicked >= 3){
        var text = document.createElement('p');
        wrapper.appendChild(text);
        text.innerHTML = "5 seconds ellapsed and clicked 3 times";
    }
}
setTimeout(timer, 5000);
button.addEventListener('click', clicker);


