'use strict';

// 10.

// Create a function that takes an array of integers and returns the average of the even numbers from that array

const evenAvarageReturner = function(array){
    let totalOfNumbers = 0;
    let devider = []
    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
        totalOfNumbers += array[i]
        devider.push(array[i])
        }
    }
    return totalOfNumbers / devider.length
}

console.log(evenAvarageReturner([3, 4, 4, 1, 9, 1, 3, 5]));