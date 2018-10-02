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

  var _slicedToArray = function () {
    function sliceIterator(arr, i) {
      var _arr = [];
      var _n = true;
      var _d = false;
      var _e = undefined;

      try {
        for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
          _arr.push(_s.value);

          if (i && _arr.length === i) break;
        }
      } catch (err) {
        _d = true;
        _e = err;
      } finally {
        try {
          if (!_n && _i["return"]) _i["return"]();
        } finally {
          if (_d) throw _e;
        }
      }

      return _arr;
    }

    return function (arr, i) {
      if (Array.isArray(arr)) {
        return arr;
      } else if (Symbol.iterator in Object(arr)) {
        return sliceIterator(arr, i);
      } else {
        throw new TypeError("Invalid attempt to destructure non-iterable instance");
      }
    };
  }();

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

  var Map = function () {
    function Map() {
      var _this = this;

      _classCallCheck(this, Map);

      this.get = function (k) {
        return _this.has(k) ? _this.table[(0, _utils.toStrFn)(k)] : undefined;
      };

      this.set = function (k, v) {
        if (k !== null && v !== null) {
          if (!_this.has(k)) _this.count++;
          _this.table[(0, _utils.toStrFn)(k)] = v;
        }
        return _this;
      };

      this.remove = function (k) {
        if (_this.has(k)) {
          delete _this.table[(0, _utils.toStrFn)(k)];
          _this.count--;
        }
        return _this;
      };

      this.has = function (k) {
        return Object.prototype.hasOwnProperty.call(_this.table, (0, _utils.toStrFn)(k));
      };

      this.clear = function () {
        _this.table = {};
        _this.count = 0;
      };

      this.forEach = function (fn) {
        var kv = _this.keyValues;

        for (var i = 0; i < kv.length; i++) {
          fn(kv[i][0], kv[i][1], i);
        }
      };

      this.toString = function () {
        if (_this.isEmpty()) return '';
        return '[' + _this.keyValues.map(function (_ref) {
          var _ref2 = _slicedToArray(_ref, 2),
              k = _ref2[0],
              v = _ref2[1];

          return '[' + k.toString() + ', ' + v.toString() + ']';
        }).join(',\n') + ']';
      };

      this.table = {};
      this.count = 0;
    }

    _createClass(Map, [{
      key: 'isEmpty',
      value: function isEmpty() {
        return this.count === 0;
      }
    }, {
      key: 'size',
      get: function get() {
        return this.count;
      }
    }, {
      key: 'keys',
      get: function get() {
        return Object.keys(this.table);
      }
    }, {
      key: 'values',
      get: function get() {
        return Object.values(this.table);
      }
    }, {
      key: 'keyValues',
      get: function get() {
        var keys = this.keys;
        var values = this.values;
        return keys.map(function (key, i) {
          return [key, values[i]];
        });
      }
    }]);

    return Map;
  }();

  exports.default = Map;
});