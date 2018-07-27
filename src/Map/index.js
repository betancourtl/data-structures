import { toStrFn } from '../utils';

class Map {
  constructor() {
    this.table = {};
    this.count = 0;
  }

  get = k => {
    return this.has(k)
      ? this.table[toStrFn(k)]
      : undefined;
  };

  set = (k, v) => {
    if (k !== null && v !== null) {
      if (!this.has(k)) this.count++;
      this.table[toStrFn(k)] = v;
    }
    return this;
  };

  remove = k => {
    if (this.has(k)) {
      delete this.table[toStrFn(k)];
      this.count--;
    }
    return this;
  };

  has = k => {
    return Object.prototype.hasOwnProperty.call(this.table, toStrFn(k));
  };

  clear = () => {
    this.table = {};
    this.count = 0;
  };

  get size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  get keys() {
    return Object.keys(this.table);
  };

  get values() {
    return Object.values(this.table);
  };

  get keyValues() {
    const keys = this.keys;
    const values = this.values;
    return keys.map((key, i) => [key, values[i]]);
  }

  forEach = fn => {
    const kv = this.keyValues;

    for (let i = 0; i < kv.length; i++) {
      fn(kv[i][0], kv[i][1], i);
    }
  };

  toString = () => {
    if (this.isEmpty()) return '';
    return `[${this.keyValues.map(([k, v]) => `[${k.toString()}, ${v.toString()}]`).join(',\n')}]`
  };
}

export default Map;
