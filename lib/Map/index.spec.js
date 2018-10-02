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

  describe('Map', function () {
    it('should create a Map', function () {
      var map = new _2.default();
      expect(map instanceof _2.default).to.equal(true);
    });

    it('should return true if map has an element', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      expect(map.has(1)).to.equal(true);
      expect(map.has(2)).to.equal(false);
    });

    it('should set to a map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      expect(map.table['1']).to.equal('Luis');
      expect(map.size).to.equal(1);
    });

    it('should overwrite the map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.set(1, 'Tae');
      expect(map.table[1]).to.equal('Tae');
    });

    it('should get a value from the map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.set(1, 'Tae');
      expect(map.get(1)).to.equal('Tae');
    });

    it('should get a value from the map', function () {
      var map = new _2.default();
      map.set(null, 'Luis');
      expect(map.get(1)).to.equal(undefined);
    });

    it('should get a value from the map', function () {
      var map = new _2.default();
      map.set(1, null);
      expect(map.get(1)).to.equal(undefined);
    });

    it('should remove from a map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.remove(1);
      expect(map.size).to.equal(0);
    });

    it('should get the size of the map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.set(2, 'Cristian');
      map.set(3, 'Tae');
      expect(map.size).to.equal(3);
      map.remove(1);
      map.remove(2);
      map.remove(3);
      expect(map.size).to.equal(0);
    });

    it('should clear the map', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.set(2, 'Cristian');
      map.set(3, 'Tae');
      map.clear();
      expect(map.table).to.deep.equal({});
      expect(map.size).to.equal(0);
    });

    it('should return if true if the map is empty', function () {
      var map = new _2.default();
      expect(map.isEmpty()).to.equal(true);
      map.set(1, 'Cristian');
      expect(map.isEmpty()).to.equal(false);
    });

    it('should return the keys', function () {
      var map = new _2.default();
      map.set(1, 'Cristian');
      map.set(2, 'Cristian');
      map.set(3, 'Cristian');
      expect(map.keys).to.deep.equal(['1', '2', '3']);
    });

    it('should return the values', function () {
      var map = new _2.default();
      map.set(1, 'Cristian');
      map.set(2, 'Luis');
      expect(map.values).to.deep.equal(['Cristian', 'Luis']);
    });

    it('should return the key value pairs', function () {
      var map = new _2.default();
      map.set(1, 'Cristian');
      map.set(2, 'Luis');
      expect(map.keyValues).to.deep.equal([['1', 'Cristian'], ['2', 'Luis']]);
    });

    it('should call the forEach cb fn ', function () {
      var map = new _2.default();
      map.set(1, 'Cristian');
      map.set(2, 'Luis');
      map.forEach(function (k, v, i) {});
    });

    it('should call the toString method', function () {
      var map = new _2.default();
      map.set(1, 'Luis');
      map.set(2, 'Cristian');
      map.set(3, 'Michael');
      expect(map.toString()).to.equal('[[1, Luis],\n[2, Cristian],\n[3, Michael]]');
    });
  });
});