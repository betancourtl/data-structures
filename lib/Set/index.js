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

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }

      return arr2;
    } else {
      return Array.from(arr);
    }
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

  var Set = function () {
    function Set(items) {
      var _this = this;

      _classCallCheck(this, Set);

      this.add = function (el) {
        [].concat(el).forEach(function (item) {
          if (!_this.has(item)) {
            _this.items[item] = item;
            _this.count++;
          }
        });
        return _this;
      };

      this.remove = function (el) {
        [].concat(el).forEach(function (item) {
          if (_this.has(item)) {
            delete _this.items[el];
            _this.count--;
          }
        });
        return _this;
      };

      this.clear = function () {
        _this.items = {};
        _this.count = 0;
      };

      this.has = function (el) {
        return Object.prototype.hasOwnProperty.call(_this.items, el);
      };

      this.union = function (setB) {
        return new Set([].concat(_toConsumableArray(_this.values), _toConsumableArray(setB.values)));
      };

      this.intersection = function (setB) {
        return new Set([].concat(_toConsumableArray(_this.values)).filter(function (x) {
          return setB.has(x);
        }));
      };

      this.difference = function (setB) {
        return new Set([].concat(_toConsumableArray(_this.values)).filter(function (x) {
          return !setB.has(x);
        }));
      };

      this.isSubsetOf = function (setB) {
        return _this.size > setB.size ? false : _this.values.every(function (x) {
          return setB.has(x) === true;
        });
      };

      this.items = {};
      this.count = 0;
      if (items) this.add(items);
    }

    _createClass(Set, [{
      key: 'toString',
      value: function toString() {
        if (this.isEmpty) return '';
        var values = this.values;
        var objString = '' + values[0];
        for (var i = 1; i < values.length; i++) {
          objString = objString + ',' + values[i].toString();
        }
        return objString;
      }
    }, {
      key: 'values',
      get: function get() {
        return Object.values(this.items);
      }
    }, {
      key: 'size',
      get: function get() {
        return this.count;
      }
    }]);

    return Set;
  }();

  exports.default = Set;
});