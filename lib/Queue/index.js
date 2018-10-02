(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.index = mod.exports;
  }
})(this, function (exports) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var Queue = function Queue() {
    var _this = this;

    _classCallCheck(this, Queue);

    this.enqueue = function (item) {
      [].concat(item).forEach(function (x) {
        _this.items[_this.count] = x;
        _this.count++;
      });
    };

    this.dequeue = function () {
      if (_this.isEmpty()) return undefined;
      var result = _this.items[_this.lowestCount];
      delete _this.items[_this.lowestCount];
      _this.lowestCount++;
      return result;
    };

    this.clear = function () {
      _this.items = {};
      _this.lowestCount = 0;
      _this.count = 0;
    };

    this.peek = function () {
      if (_this.isEmpty()) return undefined;
      return _this.items[_this.lowestCount];
    };

    this.size = function () {
      return _this.count - _this.lowestCount;
    };

    this.isEmpty = function () {
      return _this.size() === 0;
    };

    this.toString = function () {
      if (_this.isEmpty()) return '';

      return Object.keys(_this.items).map(function (x) {
        return _this.items[x];
      }).join(', ');
    };

    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  };

  exports.default = Queue;
});