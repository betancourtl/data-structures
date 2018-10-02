(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../Node', '../utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../Node'), require('../utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Node, global.utils);
    global.index = mod.exports;
  }
})(this, function (exports, _Node, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var LinkedList = function LinkedList() {
    var _this = this;

    _classCallCheck(this, LinkedList);

    this._withinBoundary = function (index) {
      return (index >= 0 && index < _this.count) === true;
    };

    this._withinInsertBoundary = function (index) {
      return (index >= 0 && index <= _this.count) === true;
    };

    this.getElementAt = function (index) {
      if (!_this._withinBoundary(index)) return undefined;
      var current = _this.head;
      for (var i = 0; i < index; i++) {
        current = current.next;
      }
      return current;
    };

    this.push = function (el) {
      _this.insertAt(_this.count, el);
      return _this;
    };

    this.insertAt = function (index, el) {
      if (!_this._withinInsertBoundary(index)) return undefined;
      var node = new _Node2.default(el);
      var prev = null;
      var current = _this.head;

      // element is at head
      if (index === 0) {
        node.next = current;
        _this.head = node;
      }

      // element is not at head
      else {
          var i = 0;
          while (i < index) {
            prev = current;
            current = current.next;
            i++;
          }
          prev.next = node;
          node.next = current;
        }
      _this.count++;
    };

    this.removeAt = function (index) {
      // check id the index is within boundary
      if (!_this._withinBoundary(index)) return undefined;
      // find the node and the prev node.
      var current = _this.head;

      if (index === 0) {
        _this.head = current.next;
        _this.count--;
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

    this.remove = function (el) {
      var index = _this.indexOf(el);
      return _this.removeAt(index);
    };

    this.indexOf = function (el) {
      var current = _this.head;

      for (var i = 0; i < _this.count && current !== null; i++) {
        if (_this.equals(current.element, el)) return i;
        current = current.next;
      }

      return -1;
    };

    this.size = function () {
      return _this.count;
    };

    this.isEmpty = function () {
      return _this.head === null;
    };

    this.toString = function () {
      if (_this.isEmpty()) return '';
      var current = _this.head;
      var acc = [];
      for (var i = 0; i < _this.count; i++) {
        acc.push(current.element);
        current = current.next;
      }

      return acc.join(', ');
    };

    this.count = 0;
    this.head = null;
    this.equals = _utils.defaultEquals; // User can change this to be able to compare different data structures.
  };

  exports.default = LinkedList;
});