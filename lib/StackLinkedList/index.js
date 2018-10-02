(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../DoublyLinkedList'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../DoublyLinkedList'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.DoublyLinkedList);
    global.index = mod.exports;
  }
})(this, function (exports, _DoublyLinkedList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

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

  var StackLinkedList = function StackLinkedList() {
    var _this = this;

    _classCallCheck(this, StackLinkedList);

    this.push = function (el) {
      _this.items.push(el);
    };

    this.pop = function () {
      _this.items.removeAt(_this.items.count - 1);
    };

    this.items = new _DoublyLinkedList2.default();
  };

  exports.default = StackLinkedList;
});