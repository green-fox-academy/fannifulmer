'use strict';
// - Create a function called `factorio`
//   that returns it's input's factorial

function factorio(numbers) {
    var factor = 1;
    for (var i = 1; i <= numbers; i++){
        factor *= i;
    }
    return factor;
}

console.log(factorio(4));