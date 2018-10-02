(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../utils', '../ValuePair', '../LinkedList'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../utils'), require('../ValuePair'), require('../LinkedList'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.utils, global.ValuePair, global.LinkedList);
    global.index = mod.exports;
  }
})(this, function (exports, _utils, _ValuePair, _LinkedList) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _ValuePair2 = _interopRequireDefault(_ValuePair);

  var _LinkedList2 = _interopRequireDefault(_LinkedList);

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

  var equalsValuePair = function equalsValuePair(a, key) {
    return a.key === key;
  };

  /**
   * This class stores key, value pairs in a map by using a hash a sa key
   * The value for each key is a LinkedLik where we will store the values.
   */

  var HashMapSeparateChaining = function () {
    function HashMapSeparateChaining() {
      var _this = this;

      _classCallCheck(this, HashMapSeparateChaining);

      this.put = function (key, value) {
        // If the key is not null and the value is not null
        if (key === null || value === null) return _this;
        // hash the key
        var hash = _this.hashCode(key);
        // check if the keys exists.
        var list = _this.table[hash];
        // if it does not exist, create a linked list and add the item
        if (!list) {
          _this.table[hash] = new _LinkedList2.default();
          _this.table[hash].equals = equalsValuePair;
          _this.table[hash].push(new _ValuePair2.default(key, value));
        } else {
          list.push(new _ValuePair2.default(key, value));
        }

        return _this;
      };

      this.remove = function (key) {
        // get the hash
        var hash = _this.hashCode(key);
        // find the list
        var list = _this.table[hash];
        // if no list return this
        if (!list) return _this;
        // if there is a list remove the item.
        list.remove(key);
        if (list.size() === 0) delete _this.table[hash];
        return _this;
      };

      this.get = function (key) {
        // get the hash
        var hash = _this.hashCode(key);
        // find this list
        var list = _this.table[hash];
        if (!list) return undefined;
        if (list.isEmpty()) return undefined;
        var el = list.getElementAt(list.indexOf(key));
        if (el) return el.element;
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

    _createClass(HashMapSeparateChaining, [{
      key: 'isEmpty',
      get: function get() {
        return Object.keys(this.table).length === 0;
      }
    }]);

    return HashMapSeparateChaining;
  }();

  exports.default = HashMapSeparateChaining;
});