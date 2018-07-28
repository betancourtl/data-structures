import { toStrFn } from '../utils';
import Set from '../Set';

class HashSet {
  constructor() {
    this.table = {};
  }

  get isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  put = (value) => {
    if (value === null) return this;
    const hash = this.hashCode(value);
    const set = this.table[hash];
    if (!set) {
      this.table[hash] = new Set();
      this.table[hash].add(value)
    } else {
      set.add(value);
    }
    return this;
  };

  remove = val => {
    const hash = this.hashCode(val);
    const set = this.table[hash];
    if (set === null) return this;
    set.remove(val);
    if (!set.size) delete this.table[hash];
    return this;
  };

  // We only return the value from the ValuePair
  get = key => {
    const set = this.table[this.hashCode(key)];
    return set && set.has(key)
      ? set.items[key]
      : undefined;
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

export default HashSet;