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

  describe('DoublyNode', function () {
    it('should create a DoublyNode', function () {
      var dblNode = new _2.default(1);
      expect(dblNode).to.deep.equal({
        prev: null,
        next: null,
        element: 1
      });
    });
  });
});