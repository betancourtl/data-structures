(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../utils', '../ValuePair'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../utils'), require('../ValuePair'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.ValuePair);
    global.index = mod.exports;
  }
})(this, function (exports, _utils, _ValuePair) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ValuePair2 = _interopRequireDefault(_ValuePair);

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

  var HashMap = function () {
    function HashMap() {
      var _this = this;

      _classCallCheck(this, HashMap);

      this.put = function (key, value) {
        if (key === null || value === null) return _this;
        var hash = _this.hashCode(key);
        _this.table[hash] = new _ValuePair2.default(key, value);
        return _this;
      };

      this.remove = function (key) {
        var hash = _this.hashCode(key);
        var vp = _this.table[hash];
        if (vp === null) return _this;
        delete _this.table[hash];
        return _this;
      };

      this.get = function (key) {
        var kv = _this.table[_this.hashCode(key)];
        return kv === null ? undefined : kv.value;
      };

      this.loseLoseHashCode = function (key) {
        if (typeof key === 'number') return key;
        var tableKey = (0, _utils.toStrFn)(key);

        var hash = 0;
        for (var i = 0; i < tableKey.length; i++) {
          hash += tableKey.charCodeAt(i);
        }return hash % 37;
      };

      this.hashCode = function (key) {
        return _this.loseLoseHashCode(key);
      };

      this.toString = function () {
        if (_this.isEmpty) return '';
        return Object.keys(_this.table).map(function (hash) {
          return '{ ' + hash + ' => ' + _this.table[hash].toString() + '}';
        }).join('\n  ');
      };

      this.table = {};
    }

    _createClass(HashMap, [{
      key: 'isEmpty',
      get: function get() {
        return Object.keys(this.table).length === 0;
      }
    }]);

    return HashMap;
  }();

  exports.default = HashMap;
});