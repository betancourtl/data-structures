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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var ValuePair = function ValuePair(key, value) {
    _classCallCheck(this, ValuePair);

    _initialiseProps.call(this);

    this.key = key;
    this.value = value;
  };

  var _initialiseProps = function _initialiseProps() {
    var _this = this;

    this.toString = function () {
      var value = _typeof(_this.value) === 'object' ? JSON.stringify(_this.value) : _this.value;
      return '[#' + _this.key + ': ' + value + ']';
    };
  };

  exports.default = ValuePair;
});