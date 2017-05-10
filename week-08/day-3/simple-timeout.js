'use strict';

// Write a program that prints apple after 3 seconds.

function appleTime() {
    console.log('apple');
}

setTimeout(appleTime, 3000);

var appleTime2 = function() {
    console.log('apple');
}

setTimeout(appleTime2, 3000);