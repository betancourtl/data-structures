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

  describe('BinarySearchTree', function () {
    it('should create a Tree', function () {
      var tree = new _2.default();
      expect(tree instanceof _2.default).to.equal(true);
    });

    it('should insert a right node', function () {
      var tree = new _2.default();
      tree.insert(5);
      tree.insert(10);
      expect(tree.root.right.key).to.equal(10);
    });

    it('should insert a left node', function () {
      var tree = new _2.default();
      tree.insert(5).insert(10).insert(4).insert(3).insert(15);
      expect(tree.root.key).to.equal(5);
      expect(tree.root.left.key).to.equal(4);
      expect(tree.root.left.left.key).to.equal(3);
      expect(tree.root.right.key).to.equal(10);
      expect(tree.root.right.right.key).to.equal(15);
    });

    it('inOrderTraverse', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(8);

      var items = [];
      tree.inOrderTraverse(function (x) {
        return items.push(x.key);
      });
      expect(items).to.deep.equal([4, 5, 6, 8]);
    });

    it('preOrderTraverse', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(8);

      var items = [];
      tree.preOrderTraverse(function (x) {
        return items.push(x.key);
      });
      expect(items).to.deep.equal([5, 4, 6, 8]);
    });

    it('postOrderTraverse', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(8);

      var items = [];
      tree.postOrderTraverse(function (x) {
        return items.push(x.key);
      });
      expect(items).to.deep.equal([4, 8, 6, 5]);
    });

    it('min', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(1).insert(8);

      var min = tree.min();
      expect(min).to.equal(1);
    });

    it('min is null', function () {
      var tree = new _2.default();
      var min = tree.min();
      expect(min).to.equal(null);
    });

    it('max', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(1).insert(8);

      var max = tree.max();
      expect(max).to.equal(8);
    });

    it('max is null', function () {
      var tree = new _2.default();
      var max = tree.max();
      expect(max).to.equal(null);
    });

    it('search node', function () {
      var tree = new _2.default();
      tree.insert(0).insert(5).insert(6).insert(4).insert(1).insert(8).insert(10);

      expect(tree.search(0)).to.equal(true);
      expect(tree.search(11)).to.equal(false);
    });

    it('should remove a leaf node', function () {
      var tree = new _2.default();
      tree.insert(5).insert(6).insert(4).insert(1).insert(8);

      tree.remove(8);
      tree.remove(1);
      expect(tree.search(8)).to.equal(false);
      expect(tree.search(1)).to.equal(false);
    });

    it('should remove a non-leaf node', function () {
      var tree = new _2.default();

      //       7
      //     6   8
      //   4  5
      //  1
      tree.insert(7).insert(6).insert(8).insert(4).insert(1).insert(5);

      tree.remove(6);
      expect(tree.search(1)).to.equal(true);
      expect(tree.search(5)).to.equal(true);
      expect(tree.search(4)).to.equal(true);
      expect(tree.search(6)).to.equal(false);
    });
  });
});