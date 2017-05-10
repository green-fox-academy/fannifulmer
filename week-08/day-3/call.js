'use strict';

function factorialTillLimitWithCallback(limit, callback) {
  var factorial = 1;
  for (var i = 1; i <= limit; ++i) {
    callback(factorial);
    factorial *= i;
  }
}

function callMe(callthis) {
    console.log(callthis)
}

factorialTillLimitWithCallback(20, callMe)

// Create a function and pass it as a parameter to the factorialTillLimitWithCallback
// function, and print all the factorial numbers till 20

// function provideName(callback) {
//   callback('John Doe');
// }
// 
// function printName(name) {
//   console.log(name);
// }
// 
// provideName(printName); // prints John Doe