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

  describe('StackLinkedList', function () {
    it('should push to a stack', function () {
      var stack = new _2.default();
      stack.push(1);
      stack.push(2);
      expect(stack.items.getElementAt(0).element).to.equal(1);
      expect(stack.items.getElementAt(1).element).to.equal(2);
      stack.pop();
      expect(stack.items.getElementAt(1)).to.equal(undefined);
      stack.pop();
      expect(stack.items.getElementAt(0)).to.equal(undefined);
    });
  });
});