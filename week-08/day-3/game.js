'use strict';
// Find the HTML skeleton of the game in the candy game folder.
// 
// Gather 10.000 candies!
// Clicking the ‘Create candies’ button gives you 1 candy.
// You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// 10 lollipops generate 1 candy per second.
// Use the 🍭 emoji to display the lollipops you have
// Display the candy producton rate in the Candies / Second row
// If you press the "make candy rain" button, the candy generation should speed up 10x


var candies = document.querySelector('.candies');
var candyButton = document.querySelector('.create-candies');
var lollyButton = document.querySelector('.buy-lollypops');
var lollypop = document.querySelector('.lollypops');
var freeCandy = document.querySelector('.speed');
var rain = document.querySelector('.candy-machine');
var time = 1000;
candyButton.addEventListener('click', candyCreate);
lollyButton.addEventListener('click', lollypopCreate);
rain.addEventListener('click', candyRain);

function candyCreate() {
    candies.innerHTML++
}

function lollypopCreate() {
    if (candies.innerHTML >= 100){
    lollypop.innerHTML += '🍭';
    candies.innerHTML -= 100;
    console.log(time);
    console.log(lollypop.innerHTML.length/2);
    lollypopChecker();
}
}

function lollypopChecker() {
    if (lollypop.innerHTML.length/2 === 10){
        candyGenerator()    
    }
}
function candyGenerator(time) {
    var interval = window.setInterval(candyAdder, 1 * time);
    candiesPerTime();
}

function candyAdder() {
    candies.innerHTML++;
}

function candiesPerTime() {
    freeCandy.innerHTML = 1;
}

function candyRain() {
    time = time / 10;
    console.log(time);
    return time;
    candyGenerator(time);
}
