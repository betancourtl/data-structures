import { toStrFn } from '../utils';
import ValuePair from '../ValuePair';
import LinkedList from "../LinkedList";

const equalsValuePair = (a, key) => a.key === key;

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
    if (key === null || value === null) return this;
    // hash the key
    const hash = this.hashCode(key);
    // check if the keys exists.
    const list = this.table[hash];
    // if it does not exist, create a linked list and add the item
    if (!list) {
      this.table[hash] = new LinkedList();
      this.table[hash].equals = equalsValuePair;
      this.table[hash].push(new ValuePair(key, value));
    } else {
      list.push(new ValuePair(key, value));
    }

    return this;
  };

  remove = key => {
    // get the hash
    const hash = this.hashCode(key);
    // find the list
    const list = this.table[hash];
    // if no list return this
    if (!list) return this;
    // if there is a list remove the item.
    list.remove(key);
    if (list.size() === 0) delete this.table[hash];
    return this;
  };

  // We only return the value from the ValuePair
  get = key => {
    // get the hash
    const hash = this.hashCode(key);
    // find this list
    const list = this.table[hash];
    if (!list) return undefined;
    if (list.isEmpty()) return undefined;
    const el = list.getElementAt(list.indexOf(key));
    if (el) return el.element;
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
