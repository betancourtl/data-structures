(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../LinkedList', '../Node'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../LinkedList'), require('../Node'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.LinkedList, global.Node);
    global.index = mod.exports;
  }
})(this, function (exports, _LinkedList2, _Node) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _LinkedList3 = _interopRequireDefault(_LinkedList2);

  var _Node2 = _interopRequireDefault(_Node);

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

  var CircularList = function (_LinkedList) {
    _inherits(CircularList, _LinkedList);

    function CircularList() {
      _classCallCheck(this, CircularList);

      var _this = _possibleConstructorReturn(this, (CircularList.__proto__ || Object.getPrototypeOf(CircularList)).call(this));

      _this.push = function (el) {
        var node = new _Node2.default(el);
        if (_this.head === null) {
          node.next = node;
          _this.head = node;
        } else {
          _this.getElementAt(_this.count - 1).next = node;
          node.next = _this.head;
        }
        _this.count++;
        return _this;
      };

      _this.removeAt = function (index) {
        // check if the index is within boundary
        if (!_this._withinBoundary(index)) return undefined;
        // find the node and the prev node.
        var current = _this.head;

        if (index === 0) {
          _this.head = current.next;
          _this.count--;
          // update the tail pointers
          _this.count === 0 ? _this.head = null : _this.getElementAt(_this.count - 1).next = _this.head;
          return;
        }

        var prev = null;
        for (var i = 0; i < index; i++) {
          prev = current;
          current = current.next;
        }
        prev.next = current.next;
        _this.count--;
        return current.element;
      };

      _this.tail = null;
      return _this;
    }

    // whenever I push an item it needs to change the tail pointer.


    return CircularList;
  }(_LinkedList3.default);

  exports.default = CircularList;
});