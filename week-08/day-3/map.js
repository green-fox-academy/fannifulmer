'use strict';

var fruits = [
  'melon',
  'apple',
  'strawberry',
  'blueberry',
  'pear',
  'banana'
];

// Create a new array of consists numbers that shows how many times the 'e' letter
// occurs in the word stored under the same index at the fruits array!
// Please use the map method.


var fruitsWithe = fruits.map(function(fruit){
    let consistNumbers = 0;
    let splitted = fruit.split('')
    splitted.forEach(function(letter){
        if (letter === 'e'){
            consistNumbers += 1;
        }
    })
    return consistNumbers
})
console.log(fruitsWithe);