(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../utils', '../TreeNode'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../utils'), require('../TreeNode'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.TreeNode);
    global.index = mod.exports;
  }
})(this, function (exports, _utils, _TreeNode) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _TreeNode2 = _interopRequireDefault(_TreeNode);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];
        descriptor.enumerable = descriptor.enumerable || false;
        descriptor.configurable = true;
        if ("value" in descriptor) descriptor.writable = true;
        Object.defineProperty(target, descriptor.key, descriptor);
      }
    }

    return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);
      if (staticProps) defineProperties(Constructor, staticProps);
      return Constructor;
    };
  }();

  var BinarySearchTree = function () {
    function BinarySearchTree() {
      var _this = this;

      var equalsFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : _utils.defaultEquals;

      _classCallCheck(this, BinarySearchTree);

      this.inOrderTraverse = function (cb) {
        _this.inOrderTraverseNode(cb, _this.root);
      };

      this.preOrderTraverse = function (cb) {
        _this.preOrderTraverseNode(cb, _this.root);
      };

      this.postOrderTraverse = function (cb) {
        _this.postOrderTraverseNode(cb, _this.root);
      };

      this.inOrderTraverseNode = function (cb, node) {
        if (node !== null) {
          _this.inOrderTraverseNode(cb, node.left);
          cb(node);
          _this.inOrderTraverseNode(cb, node.right);
        }
      };

      this.preOrderTraverseNode = function (cb, node) {
        if (node !== null) {
          cb(node);
          _this.preOrderTraverseNode(cb, node.left);
          _this.preOrderTraverseNode(cb, node.right);
        }
      };

      this.postOrderTraverseNode = function (cb, node) {
        if (node !== null) {
          _this.postOrderTraverseNode(cb, node.left);
          _this.postOrderTraverseNode(cb, node.right);
          cb(node);
        }
      };

      this.min = function () {
        var node = _this.findMinNode(_this.root);
        return node !== null ? node.key : null;
      };

      this.findMinNode = function (node) {
        if (node === null) return node;else if (node.left !== null) return _this.findMinNode(node.left);else return node;
      };

      this.max = function () {
        var node = _this.findMaxNode(_this.root);
        return node !== null ? node.key : null;
      };

      this.findMaxNode = function (node) {
        if (node === null) return node;else if (node.right !== null) return _this.findMaxNode(node.right);else return node;
      };

      this.search = function (key) {
        return _this.searchNode(_this.root, key);
      };

      this.searchNode = function (node, key) {
        if (node === null) return false;
        if (key < node.key) return _this.searchNode(node.left, key);else if (key > node.key) return _this.searchNode(node.right, key);else return true;
      };

      this.remove = function (key) {
        return _this.removeNode(_this.root, key);
      };

      this._isLeafNode = function (node) {
        return node.left === null && node.right === null;
      };

      this.removeNode = function (node, key) {
        if (node === null) return null;
        var nodeKey = node.key;

        if (key < nodeKey) {
          // we want to replace the left node here with the new node or null
          node.left = _this.removeNode(node.left, key);
          return node;
        } else if (key > nodeKey) {
          // we want to replace the left node here with the new node or null
          node.right = _this.removeNode(node.right, key);
          return node;
        }

        // node has been found at this point
        else {
            // case 1
            if (_this._isLeafNode(node)) {
              // set the node to null and return it back so it can replace
              // the left or right parent node values
              node = null;
              return node;
            }
            //case 2
            if (node.left === null) {
              // we can do this because we know that one of the leaf nodes is null
              node = node.right;
              return node;
            }
            //case 3
            else if (node.right === null) {
                // we can do this because we know that one of the leaf nodes is null
                node = node.left;
                return node;
              }

            // case 3
            // left and right nodes exist.
            // we find the minimum node in this tree.
            // we then set the node.key value that we are removing to the minimum node key.
            // we remove the minimum node.key from the tree.
            // this is a very clever implementation (I found this on a packt javascript data structures book).
            var aux = _this.minNode(node.right);
            node.key = aux.key;
            node.right = _this.removeNode(node.right, aux.key);
            return node;
          }
      };

      this.root = null;
      this.equalsFn = equalsFn;
    }

    // do not bind "this" with arrow fn so subclasses can call this with super.


    _createClass(BinarySearchTree, [{
      key: 'insert',
      value: function insert(key) {
        this.root === null ? this.root = new _TreeNode2.default(key) : this.insertNode(this.root, key);

        return this;
      }
    }, {
      key: 'insertNode',
      value: function insertNode(root, key) {
        var right = root.right;
        var left = root.left;

        if (key < root.key) {
          left === null ? root.left = new _TreeNode2.default(key) : this.insertNode(root.left, key);
        } else {
          right === null ? root.right = new _TreeNode2.default(key) : this.insertNode(root.right, key);
        }
      }
    }]);

    return BinarySearchTree;
  }();

  exports.default = BinarySearchTree;
});