'use strict';

// Implement the selectLastEvenNumber function that takes an array and callback,
// it should call the callback immediately with the last even number on the array


function printNumber(num) {
  console.log(num);
}

function selectLastEvenNumber(array, callback){
    var lastNumber = array.filter(function(number){
        if (number % 2 === 0){
            return number
        }
    })
    var last = lastNumber.slice(-1);
    return last
}


console.log(selectLastEvenNumber([2, 5, 7, 8, 9, 11], printNumber)); // should print 8