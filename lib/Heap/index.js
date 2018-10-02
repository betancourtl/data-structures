(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../utils'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../utils'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils);
    global.index = mod.exports;
  }
})(this, function (exports, _utils) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var Heap = function () {
    function Heap() {
      var _this = this;

      var compareFn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (a, b) {
        return a > b;
      };

      _classCallCheck(this, Heap);

      this.getLeftIndex = function (index) {
        return 2 * index + 1;
      };

      this.getRightIndex = function (index) {
        return 2 * index + 2;
      };

      this.getParentIndex = function (index) {
        if (index === 0) return undefined;
        return Math.floor((index - 1) / 2);
      };

      this.insert = function (index) {
        if (index !== null) {
          _this.heap.push(index);
          var lastHeapIndex = _this.heap.length - 1;
          _this.siftUp(lastHeapIndex);
        }

        return _this;
      };

      this.siftUp = function (index) {
        var parent = _this.getParentIndex(index);
        while (index > 0 && _this.compareFn(_this.heap[parent], _this.heap[index])) {
          (0, _utils.swap)(_this.heap, parent, index);
          index = parent; // should be a lower index
          parent = _this.getParentIndex(index);
        }
      };

      this.siftDown = function (index) {
        var element = index;
        // we get the left and right children
        var left = _this.getLeftIndex(index);
        var right = _this.getRightIndex(index);
        var size = _this.size;

        // the left children is less than the array length and
        // the element is bigger than the left children then
        // the index becomes the children
        if (left < size && _this.compareFn(_this.heap[element], _this.heap[left])) element = left;
        // the right children is less than the array length and
        // the element is bigger than the right children then
        // the index becomes the children
        if (left < size && _this.compareFn(_this.heap[element], _this.heap[right])) element = right;

        // when the elements are not the same we swap them out and recursively
        // apply the same function
        if (index !== element) {
          (0, _utils.swap)(_this.heap, index, element);
          _this.siftDown(element);
        }
      };

      this.extract = function () {
        if (_this.isEmpty) return undefined;
        if (_this.size === 1) return _this.heap.shift();
        var temp = _this.heap.shift();
        _this.siftDown(0);
        return temp;
      };

      if (typeof compareFn !== 'function') throw 'Heap class requires a comparing function to be passed to the constructor';
      this.compareFn = compareFn;
      this.heap = [];
    }

    _createClass(Heap, [{
      key: 'size',
      get: function get() {
        return this.heap.length;
      }
    }, {
      key: 'isEmpty',
      get: function get() {
        return this.heap.length === 0;
      }
    }, {
      key: 'min',
      get: function get() {
        return this.isEmpty ? undefined : this.heap[0];
      }
    }]);

    return Heap;
  }();

  exports.default = Heap;
});