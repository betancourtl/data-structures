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
  var defaultEquals = exports.defaultEquals = function defaultEquals(a, b) {
    return a === b;
  };

  var toStrFn = exports.toStrFn = function toStrFn(k) {
    if (k === null) return 'NULL';else if (k === undefined) return 'UNDEFINED';else if (typeof k === 'string' || k instanceof String) return k;
    return k.toString();
  };

  // mutating function
  var swap = exports.swap = function swap(arr, a, b) {
    var _ref;

    return _ref = [arr[b], arr[a]], arr[a] = _ref[0], arr[b] = _ref[1], _ref;
  };
});