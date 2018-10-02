(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "../LinkedList", "../DoublyNode"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("../LinkedList"), require("../DoublyNode"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.LinkedList, global.DoublyNode);
    global.index = mod.exports;
  }
})(this, function (exports, _LinkedList2, _DoublyNode) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _LinkedList3 = _interopRequireDefault(_LinkedList2);

  var _DoublyNode2 = _interopRequireDefault(_DoublyNode);

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

  function _possibleConstructorReturn(self, call) {
    if (!self) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return call && (typeof call === "object" || typeof call === "function") ? call : self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
  }

  var DoublyLinkedList = function (_LinkedList) {
    _inherits(DoublyLinkedList, _LinkedList);

    function DoublyLinkedList() {
      _classCallCheck(this, DoublyLinkedList);

      var _this = _possibleConstructorReturn(this, (DoublyLinkedList.__proto__ || Object.getPrototypeOf(DoublyLinkedList)).call(this));

      _this.push = function (el) {
        _this.insertAt(_this.count, el);
      };

      _this.insertAt = function (index, el) {
        if (!_this._withinInsertBoundary(index)) return undefined;
        var node = new _DoublyNode2.default(el);
        var current = _this.head;

        // When inserting in the head
        if (index === 0) {
          if (_this.head === null) {
            _this.head = node;
            _this.tail = node;
          } else {
            node.next = _this.head;
            current.prev = node;
            _this.head = node;
          }
        }

        // when inserting in the tail
        else if (index === _this.count) {
            current = _this.tail;
            current.next = node;
            node.prev = current;
            _this.tail = node;
          } else {
            // when inserting anywhere else
            var previous = _this.getElementAt(index - 1);
            current = previous.next;
            node.next = current;
            previous.next = node;
            current.prev = node;
            node.prev = previous;
          }
        _this.count++;
      };

      _this.removeAt = function (index) {
        if (!_this._withinBoundary(index)) return undefined;
        var current = _this.head;

        // The item is the head
        if (index === 0) {
          // prev | current | next
          //        ^ to be deleted
          _this.head = current.next;
          current.next && current.next.prev ? current.next.prev = null : _this.tail = null;
          _this.count--;
          return;
        }

        // If the item is the tail
        var prev = null;

        // We use the tail reference to avoid searching for the element
        // This results in an 0(1) operation
        if (_this.count - 1 === index) {
          prev = _this.tail.prev;
          current = _this.tail;
        } else {
          // We use the search for the index
          // This results in an 0(n) operation
          current = _this.getElementAt(index);
          prev = current.prev;
        }

        prev.next = current.next;
        prev.next && prev.next.prev ? prev.next.prev = prev : _this.tail = prev;

        _this.count--;
        return current.element;
      };

      _this.tail = undefined;
      return _this;
    }

    return DoublyLinkedList;
  }(_LinkedList3.default);

  exports.default = DoublyLinkedList;
});