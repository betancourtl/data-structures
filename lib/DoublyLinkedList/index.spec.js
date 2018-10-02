(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['./'], factory);
  } else if (typeof exports !== "undefined") {
    factory(require('./'));
  } else {
    var mod = {
      exports: {}
    };
    factory(global._);
    global.indexSpec = mod.exports;
  }
})(this, function (_) {
  'use strict';

  var _2 = _interopRequireDefault(_);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('DoublyLinkedList', function () {
    it('should push 1 item to a linked list', function () {
      var list = new _2.default();
      list.push(1);
      expect(list.head).to.deep.equal({
        element: 1,
        next: null,
        prev: null
      });
      expect(list.tail).to.equal(list.getElementAt(0));
    });
    it('should push 3 items to a linked list', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.head).to.deep.equal({
        element: 1,
        prev: null,
        next: {
          element: 2,
          prev: list.getElementAt(0),
          next: {
            element: 3,
            prev: list.getElementAt(1),
            next: null
          }
        }
      });
      expect(list.tail).to.equal(list.getElementAt(2));
    });
    it('should insert item at head', function () {
      var list = new _2.default();
      list.push(2);
      list.insertAt(0, 1);
      expect(list.head).to.deep.equal({
        element: 1,
        prev: null,
        next: {
          element: 2,
          prev: list.getElementAt(0),
          next: null
        }
      });
      expect(list.tail).to.deep.equal(list.getElementAt(1));
    });
    it('should insert item at non-head', function () {
      var list = new _2.default();
      list.push(1);
      list.push(3);
      list.push(4);
      list.insertAt(1, 2);
      expect(list.head).to.deep.equal({
        element: 1,
        prev: null,
        next: {
          element: 2,
          prev: list.getElementAt(0),
          next: {
            element: 3,
            prev: list.getElementAt(1),
            next: {
              element: 4,
              prev: list.getElementAt(2),
              next: null
            }
          }
        }
      });
    });
    it('should insert item at tail', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(4);
      list.insertAt(2, 3);
      expect(list.head).to.deep.equal({
        element: 1,
        prev: null,
        next: {
          element: 2,
          prev: list.getElementAt(0),
          next: {
            element: 3,
            prev: list.getElementAt(1),
            next: {
              element: 4,
              prev: list.getElementAt(2),
              next: null
            }
          }
        }
      });
      expect(list.tail).to.deep.equal({
        element: 4,
        prev: list.getElementAt(2),
        next: null
      });
    });
    it('should should remove a head node', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.removeAt(0);
      expect(list.head).to.deep.equal({
        element: 2,
        next: null,
        prev: null
      });
      expect(list.tail.element).to.equal(2);
    });
    it('should should remove a non-head node', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2); // to be removed
      list.push(3);
      list.removeAt(1);
      expect(list.getElementAt(0).element).to.equal(1);
      expect(list.getElementAt(0).prev).to.equal(null);
      expect(list.getElementAt(0).next).to.equal(list.getElementAt(1));

      expect(list.getElementAt(1).element).to.equal(3);
      expect(list.getElementAt(1).prev).to.equal(list.getElementAt(0)); // error
      expect(list.getElementAt(1).next).to.equal(null);
      expect(list.tail.element).to.equal(3);
    });
    it('should should remove a tail and update tail', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3); // to be removed
      list.removeAt(2);
      expect(list.getElementAt(0).element).to.equal(1);
      expect(list.getElementAt(0).prev).to.equal(null);
      expect(list.getElementAt(0).next).to.equal(list.getElementAt(1));

      expect(list.getElementAt(1).element).to.equal(2);
      expect(list.getElementAt(1).prev).to.equal(list.getElementAt(0)); // error
      expect(list.getElementAt(1).next).to.equal(null);
      expect(list.tail.element).to.equal(2);
    });
    it('should remove the only element and update tail', function () {
      var list = new _2.default();
      list.push(1);
      list.removeAt(0);
      expect(list.tail).to.equal(null);
    });
    it('should remove an element', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.remove(1);
      expect(list.getElementAt(0).element).to.equal(2);
    });
  });
});