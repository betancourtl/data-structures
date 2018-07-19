"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Stack class using arrays. This provides a very simple implementation but some operations
// end up being O(n).
var Stack = function Stack() {
  var _this = this;

  _classCallCheck(this, Stack);

  this.push = function (x) {
    var _items;

    Array.isArray(x) ? (_items = _this.items).push.apply(_items, _toConsumableArray(x)) : _this.items.push(x);
  };

  this.pop = function () {
    return _this.items.pop();
  };

  this.clear = function () {
    _this.items = [];
  };

  this.isEmpty = function () {
    return _this.items.length === 0;
  };

  this.size = function () {
    return _this.items.length;
  };

  this.peek = function () {
    return _this.items[_this.items.length - 1];
  };

  this.items = [];
};

exports.default = Stack;