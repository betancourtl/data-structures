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

  describe('LinkedList', function () {
    it('should push to a linked list', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 2,
          next: {
            element: 3,
            next: null
          }
        }
      });
      expect(list.count).to.equal(3);
    });
    it('should insert at head', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insertAt(0, 4);

      expect(list.head).to.deep.equal({
        element: 4,
        next: {
          element: 1,
          next: {
            element: 2,
            next: {
              element: 3,
              next: null
            }
          }
        }
      });
    });
    it('should insert at non-head', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insertAt(1, 4);

      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 4,
          next: {
            element: 2,
            next: {
              element: 3,
              next: null
            }
          }
        }
      });
    });
    it('should insert at tail', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insertAt(2, 4);

      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 2,
          next: {
            element: 4,
            next: {
              element: 3,
              next: null
            }
          }
        }
      });
    });
    it('should insert at out of bounds', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insertAt(3, 4);

      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 2,
          next: {
            element: 3,
            next: {
              element: 4,
              next: null
            }
          }
        }
      });
    });
    it('should try to remove an empty linked list', function () {
      var list = new _2.default();
      list.removeAt(0);
      expect(list.head).to.deep.equal(null);
    });
    it('should try to remove the only linked list', function () {
      var list = new _2.default();
      list.push(1);
      list.removeAt(0);
      expect(list.head).to.deep.equal(null);
    });
    it('should remove the head node', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.removeAt(0);
      expect(list.head).to.deep.equal({
        element: 2,
        next: {
          element: 3,
          next: null
        }
      });
    });
    it('should remove a non-head node', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.removeAt(1);
      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 3,
          next: null
        }
      });
    });
    it('should remove the tail node', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.removeAt(2);
      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 2,
          next: null
        }
      });
    });
    it('should remove an element from the array', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(2);
      expect(list.head).to.deep.equal({
        element: 1,
        next: {
          element: 3,
          next: null
        }
      });
    });
    it('should return this size', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.size()).to.equal(3);
      list.remove(3);
      list.remove(2);
      list.remove(1);
      expect(list.size()).to.equal(0);
    });
    it('should return an empty LinkedList using toString', function () {
      var list = new _2.default();
      expect(list.toString()).to.deep.equal('');
    });
    it('should return LinkedList using toString', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.toString()).to.deep.equal('1, 2, 3');
    });
    it('should return the element at index', function () {
      var list = new _2.default();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.getElementAt(-1)).to.equal(undefined);
      expect(list.getElementAt(0).element).to.equal(1);
      expect(list.getElementAt(1).element).to.equal(2);
      expect(list.getElementAt(2).element).to.equal(3);
      expect(list.getElementAt(3)).to.equal(undefined);
    });
  });
});