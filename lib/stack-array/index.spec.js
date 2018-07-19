'use strict';

var _ = require('./');

var _2 = _interopRequireDefault(_);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

describe('Stack data structure', function () {
  it('should push to the stack', function () {
    var stack = new _2.default();
    stack.push(1);
    expect(stack.items).to.deep.equal([1]);
  });

  it('should push an array to the stack', function () {
    var stack = new _2.default();
    stack.push([1, 2, 3, 4]);
    expect(stack.items).to.deep.equal([1, 2, 3, 4]);
  });

  it('should pop from the stack', function () {
    var stack = new _2.default();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.items).to.deep.equal([1]);
  });

  it('should pop from the empty stack', function () {
    var stack = new _2.default();
    stack.pop();
    expect(stack.items).to.deep.equal([]);
  });

  it('should return the popped item from the empty stack', function () {
    var stack = new _2.default();
    stack.push(1);
    stack.push(2);
    expect(stack.pop()).to.deep.equal(2);
  });

  it('should clear the stack', function () {
    var stack = new _2.default();
    Array(5).fill('').map(function (x, i) {
      return stack.push(i + 1);
    });
    expect(stack.items).to.deep.equal([1, 2, 3, 4, 5]);
    stack.clear();
    expect(stack.items).to.deep.equal([]);
  });

  it('should return true when empty', function () {
    var stack = new _2.default();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('should return false when not empty', function () {
    var stack = new _2.default();
    stack.push(1);
    expect(stack.isEmpty()).to.equal(false);
  });

  it('should return the size', function () {
    var stack = new _2.default();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).to.equal(3);
  });

  it('should return the first item on the stack', function () {
    var stack = new _2.default();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).to.equal(3);
  });
});