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

  describe('HashSet', function () {
    it('should create a HashMap', function () {
      expect(new _2.default() instanceof _2.default);
    });

    it('should hash a char', function () {
      var hashSet = new _2.default();
      var hash = hashSet.loseLoseHashCode('dog');
      expect(hash).to.equal(314 % 37);
    });

    it('should put a value into the hashSet', function () {
      var hashSet = new _2.default();
      hashSet.put('Luis');
      hashSet.put('Raul');
      expect(hashSet.get('Luis')).to.equal('Luis');
      expect(hashSet.get('Raul')).to.equal('Raul');
    });

    it('should remove a value from the hashSet', function () {
      var hashSet = new _2.default();
      hashSet.put('Luis');
      hashSet.put('Raul');
      hashSet.remove('Luis');
      hashSet.remove('Raul');
      expect(hashSet.get('Luis')).to.equal(undefined);
      expect(hashSet.get('Raul')).to.equal(undefined);
      expect(hashSet.table).to.deep.equal({});
    });

    it('should get a value from the hashSet', function () {
      var hashSet = new _2.default();
      hashSet.put('Luis');
      hashSet.put('Raul');
      expect(hashSet.get('Luis')).to.equal('Luis');
      expect(hashSet.get('Raul')).to.equal('Raul');
    });

    it('should return true if it is empty and false if not', function () {
      var hashMap = new _2.default();
      expect(hashMap.isEmpty).to.equal(true);
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'KitKat', breed: 'Meow Mix' };
      hashMap.put('dog', dog);
      hashMap.put('cat', cat);
      expect(hashMap.isEmpty).to.equal(false);
    });

    it('should return the table as a string', function () {
      var hashSet = new _2.default();
      hashSet.put('Luis');
      hashSet.put('Jonathan');
      hashSet.put('Jaime');
      hashSet.put('Raul');
      expect(_typeof(hashSet.toString())).to.equal('string');
    });
  });
});