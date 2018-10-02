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

  describe('Heap', function () {
    it('should getParentIndex', function () {
      var heap = new _2.default();
      heap.heap = [1, 2, 3, 4, 5, 6, 7];
      heap.insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7);
      // level 1
      expect(heap.getParentIndex(0)).to.equal(undefined);
      // level 2
      expect(heap.getParentIndex(1)).to.equal(0);
      expect(heap.getParentIndex(2)).to.equal(0);
      // level 3
      expect(heap.getParentIndex(3)).to.equal(1);
      expect(heap.getParentIndex(4)).to.equal(1);
      expect(heap.getParentIndex(5)).to.equal(2);
      expect(heap.getParentIndex(6)).to.equal(2);
    });

    it('should getLeftChild', function () {
      var heap = new _2.default();
      heap.insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7);
      // level 1
      expect(heap.getLeftIndex(0)).to.equal(1);
      // level 2
      expect(heap.getLeftIndex(1)).to.equal(3);
      expect(heap.getLeftIndex(2)).to.equal(5);
    });

    it('should get the size', function () {
      var heap = new _2.default();
      heap.insert(1).insert(2).insert(3).insert(4).insert(5).insert(6).insert(7);
      expect(heap.size).to.equal(7);
    });

    it('should return true if heap is empty and false if not', function () {
      var heap = new _2.default();
      heap.heap = [];
      expect(heap.isEmpty).to.equal(true);
      heap.heap = [1];
      expect(heap.isEmpty).to.equal(false);
    });

    it('should return minimum value of heap', function () {
      var heap = new _2.default();
      heap.insert(1).insert(4).insert(5).insert(7).insert(8).insert(20).insert(0);

      expect(heap.min).to.equal(0);
    });
    it('should extract the minimum value of heap', function () {
      var heap = new _2.default();
      heap.insert(1).insert(4).insert(5).insert(7).insert(8).insert(20).insert(0);

      expect(heap.extract()).to.equal(0);
      expect(heap.min).to.equal(1);
      expect(heap.heap).to.deep.equal([1, 4, 7, 8, 20, 5]);
    });
  });
});