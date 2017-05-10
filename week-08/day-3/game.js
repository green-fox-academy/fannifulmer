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
console.log(candies);
var candyButton = document.querySelector('.create-candies');
var lollyButton = document.querySelector('.buy-lollypops')
var lollypop = document.querySelector('.lollypops')
candyButton.addEventListener('click', candyCreate);
lollyButton.addEventListener('click', lollypopCreate);


function candyCreate() {
    candies.innerHTML++
}

function lollypopCreate() {
    if (candies.innerHTML >= 100){
    lollypop.innerHTML += '🍭';
    candies.innerHTML -= 100;
}
}