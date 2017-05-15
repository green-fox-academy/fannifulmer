'use strict';

// Write a program that prints the following fruits:
// apple -> immediately
// pear -> after 1 seconds
// melon -> after 3 seconds
// grapes -> after 5 seconds

var appleTime = function() {
    console.log('apple');
}

var pearTime = function() {
    console.log('pear');
}

var melonTime = function() {
    console.log('melon');
}

var grapesTime = function() {
    console.log('grapes');
}

setTimeout(appleTime, 0);
setTimeout(pearTime, 1000);
setTimeout(melonTime, 3000);
setTimeout(grapesTime, 5000);