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

  describe('HashMap', function () {
    it('should create a HashMap', function () {
      expect(new _2.default() instanceof _2.default);
    });

    it('should hash a char', function () {
      var hashMap = new _2.default();
      var hash = hashMap.loseLoseHashCode('dog');
      expect(hash).to.equal(314 % 37);
    });

    it('should put a value into the map', function () {
      var hashMap = new _2.default();
      var value = { name: 'Fluffy', breed: 'Shi Tzu' };
      hashMap.put('dog', value);
      expect(hashMap.get('dog')).to.deep.equal(value);
    });

    it('should remove a value from the map', function () {
      var hashMap = new _2.default();
      var value = { name: 'Fluffy', breed: 'Shi Tzu' };
      hashMap.put('dog', value);
      hashMap.remove('dog');
      expect(hashMap.table).to.deep.equal({});
    });

    it('should get a value from the map', function () {
      var hashMap = new _2.default();
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'KitKat', breed: 'Choco flow' };
      hashMap.put('dog', dog);
      hashMap.put('cat', cat);
      expect(hashMap.get('dog')).to.equal(dog);
      expect(hashMap.get('cat')).to.equal(cat);
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
      expect(hashMap.isEmpty).to.equal(true);
      var dog = { name: 'Fluffy', breed: 'Shi Tzu' };
      var cat = { name: 'KitKat', breed: 'Choco flow' };
      hashMap.put('dog', dog);
      hashMap.put('cat', cat);
    });
  });
});