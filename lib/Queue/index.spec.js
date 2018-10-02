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

  describe('Queue', function () {
    it('should create a queue', function () {});

    it('should queue an item', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.items).to.deep.equal({
        0: 1,
        1: 2,
        2: 3
      });
    });

    it('should queue an array of items', function () {
      var queue = new _2.default();
      queue.enqueue([1, 2, 3]);
      expect(queue.items).to.deep.equal({
        0: 1,
        1: 2,
        2: 3
      });
    });

    it('should dequeue an item', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.dequeue();
      expect(queue.items).to.deep.equal({
        1: 2,
        2: 3
      });
    });

    it('should return this size of the queue', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.size()).to.equal(3);
    });

    it('should clear the queue', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      queue.clear();
      expect(queue.items).to.deep.equal({});
      expect(queue.lowestCount).to.deep.equal(0);
      expect(queue.count).to.deep.equal(0);
    });

    it('should dequeue an empty queue and return the empty queue', function () {
      var queue = new _2.default();
      expect(queue.dequeue()).to.deep.equal(undefined);
    });

    it('should peek at the next base item', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.peek()).to.deep.equal(1);
    });

    it('should return true if the queue is empty', function () {
      var queue = new _2.default();
      expect(queue.isEmpty()).to.equal(true);
    });

    it('should print the stack', function () {
      var queue = new _2.default();
      queue.enqueue(1);
      queue.enqueue(2);
      queue.enqueue(3);
      expect(queue.toString()).to.equal('1, 2, 3');
    });
  });
});