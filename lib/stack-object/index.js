'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Stack class using objects. This implementation ends up being O(1).
var Stack = function Stack() {
  var _this = this;

  _classCallCheck(this, Stack);

  this.push = function (items) {
    var arr = [].concat(items);
    arr.forEach(function (x) {
      _this.items[_this.count] = x;
      _this.count++;
    });
  };

  this.pop = function () {
    if (_this.isEmpty()) return undefined;

    _this.count--;
    var result = _this.items[_this.count];
    delete _this.items[_this.count];
    return result;
  };

  this.clear = function () {
    _this.items = {};
  };

  this.isEmpty = function () {
    return _this.count === 0;
  };

  this.size = function () {
    return _this.count;
  };

  this.peek = function () {
    if (_this.isEmpty()) return undefined;

    return _this.items[_this.count - 1];
  };

  this.toString = function () {
    if (_this.isEmpty()) return '';

    return Object.keys(_this.items).map(function (x) {
      return _this.items[x];
    }).join(', ');
  };

  this.count = 0;
  this.items = {};
};

exports.default = Stack;