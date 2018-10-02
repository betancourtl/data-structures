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

  describe('TreeNode', function () {
    it('should create a tree node', function () {
      var node = new _2.default();
      expect(node instanceof _2.default);
    });

    it('should add a left and right property to the class', function () {
      var node = new _2.default();
      node.left = 'Hello';
      node.right = 'World';
      node.key = 1;
      expect(node.left).to.equal(node.left);
      expect(node.right).to.equal(node.right);
      expect(node.key).to.equal(node.key);
    });
  });
});