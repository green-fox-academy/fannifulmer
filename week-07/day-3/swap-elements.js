'use strict';
// - Create a variable named `abc` with the following content: `["Arthur", "Boe", "Chloe"]`
// - Swap the first and the third element of `abc`

var abc = ["Arthur", "Boe", "Chloe"];

abc.push(abc[0]);
abc.unshift(abc[2]);
abc.splice(1, 1);
abc.splice(2, 1);

console.log(abc);

