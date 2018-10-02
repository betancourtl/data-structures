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

  describe('should ', function () {
    it('should create a set', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3);
      expect(set.items[1]).to.equal(1);
      expect(set.items[2]).to.equal(2);
      expect(set.items[3]).to.equal(3);
      expect(set.count).to.equal(3);
    });

    it('should remove to a set', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3).remove(2).remove(3);
      expect(set.items[1]).to.equal(1);
      expect(set.items[2]).to.equal(undefined);
      expect(set.items[3]).to.equal(undefined);
      expect(set.count).to.equal(1);
    });

    it('should get the values of a set', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3);
      expect(set.values).to.deep.equal([1, 2, 3]);
      expect(set.count).to.equal(3);
    });

    it('should clear the set', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3).clear();
      expect(set.values).to.deep.equal([]);
      expect(set.count).to.equal(0);
    });

    it('should check if the set has a value', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3);
      expect(set.values).to.deep.equal([1, 2, 3]);
      expect(set.has(1)).to.equal(true);
      expect(set.has(2)).to.equal(true);
      expect(set.has(3)).to.equal(true);
      expect(set.count).to.equal(3);
    });

    it('should return the size of a set', function () {
      var set = new _2.default();
      set.add(1).add(2).add(3);
      expect(set.size).to.equal(3);
    });

    it('should return the items in SetA and Set B', function () {
      var setA = new _2.default([1, 2, 3]);
      var setB = new _2.default([4, 5, 6]);
      var setC = setA.union(setB);
      expect(setC.values).to.deep.equal([1, 2, 3, 4, 5, 6]);
    });

    it('should return the items that are the same in Set A and Set B', function () {
      var setA = new _2.default([1, 2, 3, 4, 5]);
      var setB = new _2.default([3, 4, 5, 6, 7]);
      var setC = setA.intersection(setB);
      expect(setC.values).to.deep.equal([3, 4, 5]);
    });

    it('should return the items that are not the same in Set A and Set B', function () {
      var setA = new _2.default([1, 2, 3, 4, 5]);
      var setB = new _2.default([3, 4, 5, 6, 7]);
      var setC = setA.difference(setB);
      expect(setC.values).to.deep.equal([1, 2]);
    });

    it('should return true if setA is a subset of setB', function () {
      var setA = new _2.default([4, 5]);
      var setB = new _2.default([1, 2, 3, 4, 5]);
      var isSubset = setA.isSubsetOf(setB);
      expect(isSubset).to.equal(true);
    });

    it('should return false if setB is not a subset of setA', function () {
      var setA = new _2.default([4, 5, 6]);
      var setB = new _2.default([1, 2, 3, 4, 5]);
      var isSubset = setA.isSubsetOf(setB);
      expect(isSubset).to.equal(false);
    });
  });
});