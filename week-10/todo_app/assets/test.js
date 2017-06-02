'use strict';

const test = require('tape');
const tester = require('../todo_backend.js');


test('Correct data returned', function (t) {
  req(app)
    // .get('/todos')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
    var expectedOutput = [{"id":5,"title":"Code more","state":0},{"id":13,"title":"Make a nice gift","state":0},{"id":15,"title":"Go climbing","state":0}];

      t.error(err, 'No error');
      t.same(res.body, expectedOutput, 'Users as expected');
      t.end();
    });
});