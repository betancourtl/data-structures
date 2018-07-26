class Map {
  constructor() {
    this.items = {};
    this.count = 0;
  }

  // Used to convert the keys into strings.
  toStrFn = (k) => {
    if (k === null) return 'NULL';
    else if (k === undefined) return 'UNDEFINED';
    else if (typeof k === 'string' || k instanceof String) return k;
    return k.toString();
  };

  get = k => {
    return this.has(k)
      ? this.items[this.toStrFn(k)]
      : undefined;
  };

  set = (k, v) => {
    if (k !== null && v !== null) {
      if (!this.has(k)) this.count++;
      this.items[this.toStrFn(k)] = v;
    }
    return this;
  };

  remove = k => {
    if (this.has(k)) {
      delete this.items[this.toStrFn(k)];
      this.count--;
    }
    return this;
  };

  has = k => {
    return Object.prototype.hasOwnProperty.call(this.items, this.toStrFn(k));
  };

  clear = () => {
    this.items = {};
    this.count = 0;
  };

  get size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  get keys() {
    return Object.keys(this.items);
  };

  get values() {
    return Object.values(this.items);
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
