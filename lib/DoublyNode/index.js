(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../Node'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../Node'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Node);
    global.index = mod.exports;
  }
})(this, function (exports, _Node2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Node3 = _interopRequireDefault(_Node2);

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

  var DoublyNode = function (_Node) {
    _inherits(DoublyNode, _Node);

    function DoublyNode(element) {
      var prev = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
      var next = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;

      _classCallCheck(this, DoublyNode);

      var _this = _possibleConstructorReturn(this, (DoublyNode.__proto__ || Object.getPrototypeOf(DoublyNode)).call(this, element, next));

      _this.prev = prev;
      return _this;
    }

    return DoublyNode;
  }(_Node3.default);

  exports.default = DoublyNode;
});