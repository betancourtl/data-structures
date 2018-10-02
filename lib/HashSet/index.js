(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../utils', '../Set'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../utils'), require('../Set'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.Set);
    global.index = mod.exports;
  }
})(this, function (exports, _utils, _Set) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Set2 = _interopRequireDefault(_Set);

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

  var HashSet = function () {
    function HashSet() {
      var _this = this;

      _classCallCheck(this, HashSet);

      this.put = function (val) {
        if (val === null) return _this;
        var hash = _this.hashCode(val);
        var set = _this.table[hash];
        if (!set) {
          _this.table[hash] = new _Set2.default();
          _this.table[hash].add(val);
        } else {
          set.add(val);
        }
        return _this;
      };

      this.remove = function (val) {
        var hash = _this.hashCode(val);
        var set = _this.table[hash];
        if (set === null) return _this;
        set.remove(val);
        if (!set.size) delete _this.table[hash];
        return _this;
      };

      this.get = function (val) {
        var set = _this.table[_this.hashCode(val)];
        return set && set.has(val) ? set.items[val] : undefined;
      };

      this.loseLoseHashCode = function (val) {
        if (typeof val === 'number') return val;
        var tableKey = (0, _utils.toStrFn)(val);

        var hash = 0;
        for (var i = 0; i < tableKey.length; i++) {
          hash += tableKey.charCodeAt(i);
        }return hash % 37;
      };

      this.hashCode = function (val) {
        return _this.loseLoseHashCode(val);
      };

      this.toString = function () {
        if (_this.isEmpty) return '';
        return Object.keys(_this.table).map(function (hash) {
          return '{ ' + hash + ' => ' + _this.table[hash].toString() + '}';
        }).join('\n  ');
      };

      this.table = {};
    }

    _createClass(HashSet, [{
      key: 'isEmpty',
      get: function get() {
        return Object.keys(this.table).length === 0;
      }
    }]);

    return HashSet;
  }();

  exports.default = HashSet;
});