'use strict';
// - Create an array variable named `ag` with the following content: `['Gin', 'Whiskey', 'Wine', 'Beer']`
// - Double all the strings in the array, use a built in array method instead of a loop
// It should print: ['GinGin', 'WhiskeyWhiskey', 'WineWine', 'BeerBeer']`

var ag = ['Gin', 'Whiskey', 'Wine', 'Beer'];

var doubleAg = ag.map(function(e, i){
    return e + e;
})
console.log(doubleAg);