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

  var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  };

  describe('HashMapSeparateChaining', function () {
    it('should create a HashMapSeparateChaining', function () {
      expect(new _2.default() instanceof _2.default);
    });

    it('should hash a char', function () {
      var hashMap = new _2.default();
      var hash = hashMap.loseLoseHashCode('dog');
      expect(hash).to.equal(314 % 37);
    });

    it('should put a value into the map', function () {
      var hashMap = new _2.default();
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'Wizzy', breed: 'Fuzzy' };
      hashMap.put('Jonathan', dog);
      hashMap.put('Jamie', cat);
      expect(hashMap.table[5].head.element.key).to.equal('Jonathan');
      expect(hashMap.table[5].head.next.element.key).to.equal('Jamie');
    });

    it('should get a value from the map', function () {
      var hashMap = new _2.default();
      var person1 = { name: 'Fluffy', breed: 'Shi Tzu' };
      var person2 = { name: 'Wizzy', breed: 'Fuzzy' };
      hashMap.put('Jonathan', person1);
      hashMap.put('Jamie', person2);
      var jonathan = hashMap.get('Jonathan');
      expect(jonathan.key).to.equal('Jonathan');
    });

    it('should remove a value from the map', function () {
      var hashMap = new _2.default();
      var person1 = { name: 'Fluffy', breed: 'Shi Tzu' };
      hashMap.put('Jonathan', person1);
      hashMap.remove('Jonathan');
      expect(hashMap.table).to.deep.equal({});
    });

    it('should return true if it is empty and false if not', function () {
      var hashMap = new _2.default();
      expect(hashMap.isEmpty).to.equal(true);
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'KitKat', breed: 'Choco flow' };
      hashMap.put('dog', dog);
      hashMap.put('cat', cat);
      expect(hashMap.isEmpty).to.equal(false);
    });

    it('should return the table as a string', function () {
      var hashMap = new _2.default();
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'KitKat', breed: 'Choco flow' };
      hashMap.put('dog', dog);
      hashMap.put('cat', cat);
      expect(_typeof(hashMap.toString())).to.equal('string');
    });
  });
});