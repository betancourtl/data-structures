(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./index'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./index'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.index);
    global.indexSpec = mod.exports;
  }
})(this, function (_index) {
  'use strict';

  var _index2 = _interopRequireDefault(_index);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('CircularList', function () {
    it('should create a circular list', function () {
      var list = new _index2.default();
      list.push(1);

      expect(list.head.next.next.next.element).to.equal(1);
    });
    it('should create a circular list', function () {
      var list = new _index2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);

      expect(list.head.next.next.next.next.next.element).to.equal(1);
    });
    it('should remove the tail in a circular list', function () {
      var list = new _index2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5); // will be removed
      list.removeAt(4);
      expect(list.getElementAt(3).next.element).to.equal(1);
    });
    it('should remove the head in a circular list', function () {
      var list = new _index2.default();
      list.push(1); // will be removed
      list.push(2);
      list.push(3);
      list.push(4);
      list.push(5);
      list.removeAt(0);
      expect(list.getElementAt(3).next.element).to.equal(2);
    });
    it('should remove all elements in a circular list', function () {
      var list = new _index2.default();
      list.push(1); // will be removed
      list.removeAt(0);
      expect(list.head).to.equal(null);
    });
  });
});