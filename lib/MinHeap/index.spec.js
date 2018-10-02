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

  describe.only('MinHeap', function () {
    it('should extract the minimum value of heap', function () {
      var heap = new _2.default();
      heap.insert(1).insert(4).insert(5).insert(7).insert(8).insert(20).insert(0);

      expect(heap.extract()).to.equal(0);
      expect(heap.min).to.equal(1);
    });
  });
});