class Set {
  constructor(items) {
    this.items = {};
    this.count = 0;
    if (items) this.add(items);
  }

  get values() {
    return Object.values(this.items);
  };

  get size() {
    return this.count;
  };

  add = el => {
    [].concat(el)
      .forEach(item => {
        if (!this.has(item)) {
          this.items[item] = item;
          this.count++;
        }
      });
    return this;
  };

  remove = el => {
    [].concat(el)
      .forEach(item => {
        if (this.has(item)) {
          delete this.items[el];
          this.count--;
        }
      });
    return this;
  };

  clear = () => {
    this.items = {};
    this.count = 0;
  };

  has = el => {
    return Object.prototype.hasOwnProperty.call(this.items, el);
  };

  // Should return the items in SetA and Set B
  union = setB => {
    return new Set([...this.values, ...setB.values]);
  };

  // Should return the items that are the same in Set A and Set B
  intersection = setB => {
    return new Set([...this.values].filter(x => setB.has(x)));
  };

  // Should return the items in Set A that are not in Set B
  difference = setB => {
    return new Set([...this.values].filter(x => !setB.has(x)));
  };

  // Check if all values in SubsetA are available in SubsetB
  isSubsetOf = setB => {
    return this.size > setB.size
      ? false
      : this.values.every(x => setB.has(x) === true);
  };

  toString() {
    if (this.isEmpty) return '';
    const values = this.values;
    let objString = `${values[0]}`;
    for (let i = 1; i < values.length; i++) {
      objString = `${objString},${values[i].toString()}`;
    }
    return objString;
  }
}

export default Set;
