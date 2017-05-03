'use strict';
// - Write a function called `sum` that sum all the numbers until the given parameter
// - The function should return the results

function sum(numbers) {
    var summed = 0;
    for (var i = 0; i <= numbers; i++){
        summed += i;
    }
    return summed;
}

console.log(sum(5));