(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../BinarySearchTree'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../BinarySearchTree'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.BinarySearchTree);
    global.index = mod.exports;
  }
})(this, function (exports, _BinarySearchTree2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _BinarySearchTree3 = _interopRequireDefault(_BinarySearchTree2);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var _get = function get(object, property, receiver) {
    if (object === null) object = Function.prototype;
    var desc = Object.getOwnPropertyDescriptor(object, property);

    if (desc === undefined) {
      var parent = Object.getPrototypeOf(object);

      if (parent === null) {
        return undefined;
      } else {
        return get(parent, property, receiver);
      }
    } else if ("value" in desc) {
      return desc.value;
    } else {
      var getter = desc.get;

      if (getter === undefined) {
        return undefined;
      }

      return getter.call(receiver);
    }
  };

  var factors = {
    UNBALANCED_RIGHT: 1,
    SLIGHTLY_UNBALANCED_RIGHT: 2,
    BALANCED: 3,
    SLIGHTLY_UNBALANCED_LEFT: 4,
    UNBALANCED_LEFT: 5
  };

  var AVLTree = function (_BinarySearchTree) {
    _inherits(AVLTree, _BinarySearchTree);

    function AVLTree() {
      _classCallCheck(this, AVLTree);

      var _this = _possibleConstructorReturn(this, (AVLTree.__proto__ || Object.getPrototypeOf(AVLTree)).call(this));

      _this.parentInsert = function (key) {
        return _get(AVLTree.prototype.__proto__ || Object.getPrototypeOf(AVLTree.prototype), 'insert', _this).call(_this, key);
      };

      _this.getNodeHeight = function (node) {
        if (node === null) return -1;
        return Math.max(_this.getNodeHeight(node.left), _this.getNodeHeight(node.right)) + 1;
      };

      _this.getBalanceFactor = function (node) {
        switch (_this.getNodeHeight(node.left) - _this.getNodeHeight(node.right)) {
          case -2:
            return factors.UNBALANCED_RIGHT;
          case -1:
            return factors.SLIGHTLY_UNBALANCED_RIGHT;
          case 1:
            return factors.SLIGHTLY_UNBALANCED_LEFT;
          case 2:
            return factors.UNBALANCED_LEFT;
          default:
            return factors.BALANCED;
        }
      };

      _this.rotationLL = function (root) {
        // root
        //         18
        //        /  \
        //      12
        //     /
        //    6

        var temp = root.left;
        // temp
        //         12
        //        /  \
        //      6

        root.left = root.right;
        // root
        //         18
        //        /  \
        //      null

        temp.right = root;
        // temp
        //         12
        //        /  \
        //      6     18

        return temp;
      };

      _this.rotationRR = function (root) {
        // root
        //         18
        //         / \
        //            24
        //             \
        //              32
        var temp = root.right;
        // temp
        //           24
        //             \
        //              32
        root.right = root.left;
        // root
        //         18
        //         / \
        temp.left = root;
        // temp
        //           24
        //          /  \
        //        18    32

        return temp;
      };

      _this.rotationLR = function (root) {
        root.left = _this.rotationRR(root.left);
        return _this.rotationLL(root);
      };

      _this.rotationRL = function (root) {
        root.right = _this.rotationLL(root.right);
        return _this.rotationRR(root);
      };

      return _this;
    }

    // single rotation to the right


    // single rotation to the left


    // Double rotation first to the right and then to the left


    // Double rotation first to the left and then to the right


    _createClass(AVLTree, [{
      key: 'insert',
      value: function insert(key) {
        _get(AVLTree.prototype.__proto__ || Object.getPrototypeOf(AVLTree.prototype), 'insert', this).call(this, key);
        var balanceFactor = this.getBalanceFactor(this.root);
        if (balanceFactor === factors.UNBALANCED_LEFT) {}
      }
    }]);

    return AVLTree;
  }(_BinarySearchTree3.default);

  exports.default = AVLTree;
});