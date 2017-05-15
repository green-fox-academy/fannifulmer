'use strict';

var test = require('tape');
var fruit = require('./apple.js');

test('print apple', function (t) {
  var actual = fruit.getApple('alma');
  var expected = 'alma';

  t.equal(actual, expected);
  t.end();
});

var test = require('tape');
var count = require('./sum.js');

test('sum elements', function (t) {
  var actual = count.summadder([2, 5, 9]);
  var expected = 16;

  t.equal(actual, expected);
  t.end();
});