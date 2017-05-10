'use strict';

// Write a program that prints apple after 3 seconds.

function appleTime() {
    console.log('apple');
}

setTimeout(appleTime, 3000);

var pearTime = function() {
    console.log('pear');
}

setTimeout(pearTime, 3000);