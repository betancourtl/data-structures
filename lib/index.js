(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(['exports', './Set', './Map', './Queue', './Dequeue', './HashMap', './HashSet', './AVLTree', './MinHeap', './MaxHeap', './stack-object', './LinkedList', './DoublyNode', './CircularList', './StackLinkedList', './BinarySearchTree', './DoublyLinkedList', './HashMapSeparateChaining'], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require('./Set'), require('./Map'), require('./Queue'), require('./Dequeue'), require('./HashMap'), require('./HashSet'), require('./AVLTree'), require('./MinHeap'), require('./MaxHeap'), require('./stack-object'), require('./LinkedList'), require('./DoublyNode'), require('./CircularList'), require('./StackLinkedList'), require('./BinarySearchTree'), require('./DoublyLinkedList'), require('./HashMapSeparateChaining'));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.Set, global.Map, global.Queue, global.Dequeue, global.HashMap, global.HashSet, global.AVLTree, global.MinHeap, global.MaxHeap, global.stackObject, global.LinkedList, global.DoublyNode, global.CircularList, global.StackLinkedList, global.BinarySearchTree, global.DoublyLinkedList, global.HashMapSeparateChaining);
    global.index = mod.exports;
  }
})(this, function (exports, _Set, _Map, _Queue, _Dequeue, _HashMap, _HashSet, _AVLTree, _MinHeap, _MaxHeap, _stackObject, _LinkedList, _DoublyNode, _CircularList, _StackLinkedList, _BinarySearchTree, _DoublyLinkedList, _HashMapSeparateChaining) {
  'use strict';

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.HashMapSeparateChaining = exports.BinarySearchTree = exports.DoublyLinkedList = exports.StackLinkedList = exports.CircularList = exports.LinkedList = exports.DoublyNode = exports.MaxHeap = exports.MinHeap = exports.HashSet = exports.HashMap = exports.AVLTree = exports.Queue = exports.Stack = exports.Deque = exports.Set = exports.Map = undefined;

  var _Set2 = _interopRequireDefault(_Set);

  var _Map2 = _interopRequireDefault(_Map);

  var _Queue2 = _interopRequireDefault(_Queue);

  var _Dequeue2 = _interopRequireDefault(_Dequeue);

  var _HashMap2 = _interopRequireDefault(_HashMap);

  var _HashSet2 = _interopRequireDefault(_HashSet);

  var _AVLTree2 = _interopRequireDefault(_AVLTree);

  var _MinHeap2 = _interopRequireDefault(_MinHeap);

  var _MaxHeap2 = _interopRequireDefault(_MaxHeap);

  var _stackObject2 = _interopRequireDefault(_stackObject);

  var _LinkedList2 = _interopRequireDefault(_LinkedList);

  var _DoublyNode2 = _interopRequireDefault(_DoublyNode);

  var _CircularList2 = _interopRequireDefault(_CircularList);

  var _StackLinkedList2 = _interopRequireDefault(_StackLinkedList);

  var _BinarySearchTree2 = _interopRequireDefault(_BinarySearchTree);

  var _DoublyLinkedList2 = _interopRequireDefault(_DoublyLinkedList);

  var _HashMapSeparateChaining2 = _interopRequireDefault(_HashMapSeparateChaining);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  exports.Map = _Map2.default;
  exports.Set = _Set2.default;
  exports.Deque = _Dequeue2.default;
  exports.Stack = _stackObject2.default;
  exports.Queue = _Queue2.default;
  exports.AVLTree = _AVLTree2.default;
  exports.HashMap = _HashMap2.default;
  exports.HashSet = _HashSet2.default;
  exports.MinHeap = _MinHeap2.default;
  exports.MaxHeap = _MaxHeap2.default;
  exports.DoublyNode = _DoublyNode2.default;
  exports.LinkedList = _LinkedList2.default;
  exports.CircularList = _CircularList2.default;
  exports.StackLinkedList = _StackLinkedList2.default;
  exports.DoublyLinkedList = _DoublyLinkedList2.default;
  exports.BinarySearchTree = _BinarySearchTree2.default;
  exports.HashMapSeparateChaining = _HashMapSeparateChaining2.default;
});