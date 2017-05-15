'use strict';

var test = require('tape');
var getApple = require('./apple.js');

test('print apple', function (t) {
  var actual = getApple();
  var expected = 'apple';

  t.equal(actual, expected);
  t.end();
});