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

  describe('Utils', function () {
    it('should swap', function () {
      var arr = [1, 2, 3, 4];
      (0, _.swap)(arr, 0, 1);
      expect(arr).to.deep.equal([2, 1, 3, 4]);
    });
  });
});