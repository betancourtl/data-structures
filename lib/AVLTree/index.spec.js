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

  // We use parentInsert because it will not autorotate the nodes
  // The insert method does rotate unbalanced nodes. We use both for testing purposes.
  describe('AVLTree', function () {
    it('should do LL Rotation', function () {
      // Tree is imbalanced when we go from the root node to the left and to the left again
      // The path we took from root was LL so we do a LL rotation.
      // BEFORE
      //
      //         18
      //        /  \
      //      12
      //     /
      //    6
      //
      // AFTER
      //
      //         12
      //        /  \
      //       6   18
      //
      var tree = new _2.default();
      tree.parentInsert(18).parentInsert(12).parentInsert(6);

      var newNode = tree.rotationLL(tree.root);
      expect(newNode.key).to.equal(12);
      expect(newNode.left.key).to.equal(6);
      expect(newNode.right.key).to.equal(18);
    });
    it('should rotate node when inserting a node which causes LL unbalance', function () {
      var tree = new _2.default();
      tree.insert(18);
      tree.insert(12);
      var factor = tree.insert(6);
      // const root = tree.root;
      // expect(root.key).to.equal(12);
      // expect(root.left.key).to.equal(6);
      // expect(root.right.key).to.equal(18);
    });

    it('should do RR rotation', function () {
      // Tree is imbalanced when we to from the root node to the right and to the right again
      // The path we took from root was RR so we do a RR rotation.
      // BEFORE
      //
      //         18
      //         / \
      //            24
      //             \
      //              32
      //
      // AFTER
      //
      //          24
      //         /  \
      //        18   32
      //
      var tree = new _2.default();
      tree.parentInsert(18).parentInsert(24).parentInsert(32);

      var newNode = tree.rotationRR(tree.root);
      expect(newNode.key).to.equal(24);
      expect(newNode.left.key).to.equal(18);
      expect(newNode.right.key).to.equal(32);
    });

    it('should do LR rotation', function () {
      // Tree is imbalanced when we to from the root node to the left and to the right
      // The path we took from root was LR so we do the following:
      // RR on 15 because it's the first unbalanced node.
      // LL on 28 because its the first unbalanced node.
      // BEFORE
      //
      //         28
      //         / \
      //        15
      //          \
      //           21
      //
      // AFTER right rotation (We now have the LL problem)
      //
      //         28
      //         / \
      //        21
      //       /  \
      //      15
      //
      // AFTER left rotation
      //
      //         21
      //        /  \
      //      15    28
      //
      var tree = new _2.default();
      tree.parentInsert(28).parentInsert(15).parentInsert(21);

      var newNode = tree.rotationLR(tree.root);
      expect(newNode.key).to.equal(21);
      expect(newNode.left.key).to.equal(15);
      expect(newNode.right.key).to.equal(28);
    });

    it('should do RL rotation', function () {
      // Tree is imbalanced when we go from the root node to the left and to the right
      // The path we took from root was RL so we do the following:
      // LL on 15 because it's the first unbalanced node.
      // RR on 28 because its the first unbalanced node.
      // BEFORE
      //
      //         24
      //         / \
      //            47
      //           /
      //          36
      //
      // AFTER right rotation (We now have the RR problem)
      //
      //         24
      //         / \
      //            36
      //             \
      //             47
      //
      // AFTER left rotation
      //
      //         36
      //        /  \
      //      24    47
      //
      var tree = new _2.default();
      tree.parentInsert(24).parentInsert(47).parentInsert(36);

      var newNode = tree.rotationRL(tree.root);
      expect(newNode.key).to.equal(36);
      expect(newNode.left.key).to.equal(24);
      expect(newNode.right.key).to.equal(47);
    });
  });
});