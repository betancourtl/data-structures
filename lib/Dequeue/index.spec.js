(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._);
    global.indexSpec = mod.exports;
  }
})(this, function (_) {
  'use strict';

  var _2 = _interopRequireDefault(_);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Deque', function () {
    it('should add items in back of the deque', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      deque.addBack(3);
      expect(deque.items).to.deep.equal({
        0: 1,
        1: 2,
        2: 3
      });
    });

    it('should add an array of items in the back of the deque', function () {
      var deque = new _2.default();
      deque.addBack([1, 2, 3]);
      expect(deque.items).to.deep.equal({
        0: 1,
        1: 2,
        2: 3
      });
    });

    it('should remove an array of items from the back of the deque', function () {
      var deque = new _2.default();
      deque.addBack([1, 2, 3]);
      expect(deque.items).to.deep.equal({
        0: 1,
        1: 2,
        2: 3
      });

      deque.removeBack();
      expect(deque.items).to.deep.equal({
        0: 1,
        1: 2
      });
    });

    it('should add an array of items in the front of the deque', function () {
      var deque = new _2.default();
      deque.addFront([1, 2, 3]);
      expect(deque.items).to.deep.equal({
        '-2': 3,
        '-1': 2,
        0: 1
      });
    });

    it('should remove items from front of the deque', function () {
      var deque = new _2.default();
      deque.addBack([1, 2, 3]);
      deque.removeFront();
      expect(deque.items).to.deep.equal({
        1: 2,
        2: 3
      });
    });

    it('should return true if the deque is empty', function () {
      var deque = new _2.default();
      expect(deque.isEmpty()).to.equal(true);
    });

    it('should return false if the deque is not empty', function () {
      var deque = new _2.default();
      deque.addBack(1);
      expect(deque.isEmpty()).to.equal(false);
    });

    it('should clear the deque', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      deque.clear();
      expect(deque.items).to.deep.equal({});
      expect(deque.lowestCount).to.equal(0);
      expect(deque.count).to.equal(0);
    });

    it('should return this size of the deque', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.size()).to.equal(2);
    });

    it('should peek the front item', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.peekFront()).to.equal(1);
    });

    it('should peek the back item', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      expect(deque.peekBack()).to.equal(2);
    });

    it('should print the stack', function () {
      var deque = new _2.default();
      deque.addBack(1);
      deque.addBack(2);
      deque.addBack(3);
      expect(deque.toString()).to.equal('1, 2, 3');
    });
  });
});