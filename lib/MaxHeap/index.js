(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', '../Heap'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('../Heap'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Heap);
    global.index = mod.exports;
  }
})(this, function (exports, _Heap2) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _Heap3 = _interopRequireDefault(_Heap2);

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

  var maxHeapCompareFn = function maxHeapCompareFn(a, b) {
    return a < b;
  };

  var MaxHeap = function (_Heap) {
    _inherits(MaxHeap, _Heap);

    function MaxHeap(compareFn) {
      _classCallCheck(this, MaxHeap);

      return _possibleConstructorReturn(this, (MaxHeap.__proto__ || Object.getPrototypeOf(MaxHeap)).call(this, compareFn || maxHeapCompareFn));
    }

    return MaxHeap;
  }(_Heap3.default);

  exports.default = MaxHeap;
});