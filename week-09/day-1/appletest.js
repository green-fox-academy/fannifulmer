'use strict';

var test = require('tape');
var fruits = require('./apple.js');
var count = require('./sum.js');

test('print apple', function (t) {
  var actual = fruits.getApple('alma');
  var expected = 'alma';

  t.equal(actual, expected);
  t.end();
});


test('sum elements', function (t) {
    var sum1 = new count();
    var actual = sum1.sumAdder([2, 5, 9]);
    var expected = 16;

  t.equal(actual, expected);
  t.end();
});


test('sum element', function (t) {
    var sum2 = new count();
    t.equal(sum2.sumAdder([]), 0);
    t.end();
});

test('sum element', function (t) {
    var sum3 = new count();
    t.equal(sum3.sumAdder([4]), 4);
    t.end();
});

test('sum element', function (t) {
    var sum4 = new count();
    t.equal(sum4.sumAdder([0]), 0);
    t.end();
});

// test('sum element', function (t) {
//     var sum2 = new count();
//     t.equal(sum2.sumAdder(['hello']), );
//     t.end();
// });


