import { toStrFn } from '../utils';
import ValuePair from '../ValuePair';

// Do not use this class. It has collision issues when using the hashcode.
// Other implementations of the hashMap should be used like:
// HashMapSeparateChaining, HashMapLinearProbing
class HashMap {
  constructor() {
    this.table = {};
  }

  get isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  put = (key, value) => {
    if (key === null || value === null) return this;
    const hash = this.hashCode(key);
    this.table[hash] = new ValuePair(key, value);
    return this;
  };

  remove = key => {
    const hash = this.hashCode(key);
    const vp = this.table[hash];
    if (vp === null) return this;
    delete this.table[hash];
    return this;
  };

  // We only return the value from the ValuePair
  get = key => {
    const kv = this.table[this.hashCode(key)];
    return kv === null ? undefined : kv.value;
  };

  loseLoseHashCode = key => {
    if (typeof key === 'number') return key;
    const tableKey = toStrFn(key);

    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) hash += tableKey.charCodeAt(i);

    return hash % 37;
  };

  hashCode = key => this.loseLoseHashCode(key);

  toString = () => {
    if (this.isEmpty) return '';
    return Object
      .keys(this.table)
      .map(hash => `{ ${hash} => ${this.table[hash].toString()}}`)
      .join('\n  ');
  };
}

export default HashMap;