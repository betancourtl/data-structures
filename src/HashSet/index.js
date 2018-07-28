import { toStrFn } from '../utils';
import Set from '../Set';

class HashSet {
  constructor() {
    this.table = {};
  }

  get isEmpty() {
    return Object.keys(this.table).length === 0;
  }

  put = val => {
    if (val === null) return this;
    const hash = this.hashCode(val);
    const set = this.table[hash];
    if (!set) {
      this.table[hash] = new Set();
      this.table[hash].add(val)
    } else {
      set.add(val);
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

  get = val => {
    const set = this.table[this.hashCode(val)];
    return set && set.has(val)
      ? set.items[val]
      : undefined;
  };

  loseLoseHashCode = val => {
    if (typeof val === 'number') return val;
    const tableKey = toStrFn(val);

    let hash = 0;
    for (let i = 0; i < tableKey.length; i++) hash += tableKey.charCodeAt(i);

    return hash % 37;
  };

  hashCode = val => this.loseLoseHashCode(val);

  toString = () => {
    if (this.isEmpty) return '';
    return Object
      .keys(this.table)
      .map(hash => `{ ${hash} => ${this.table[hash].toString()}}`)
      .join('\n  ');
  };
}

export default HashSet;