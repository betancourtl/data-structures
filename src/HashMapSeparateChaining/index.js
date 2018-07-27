import { toStrFn } from '../utils';
import ValuePair from '../ValuePair';

/**
 * This class stores key, value pairs in a map by using a hash a sa key
 * The value for each key is a LinkedLik where we will store the values.
 */
class HashMapSeparateChaining {
  constructor() {
    this.table = {};
  }

  get isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  put = (key, value) => {
    // If the key is not null and the value is not null
    // check if the keys exists.
    // if it does not exist, create a linked list and add the item
    // If it does exist, add the item to the
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

export default HashMapSeparateChaining;