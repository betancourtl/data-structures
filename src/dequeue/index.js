class Deque {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  addFront = item => {
    [].concat(item).forEach(x => {
      this.items[this.lowestCount] = x;
      this.lowestCount--;
    });
  };

  removeFront = () => {
    if (this.isEmpty()) return undefined;
    delete this.items[this.lowestCount];
    this.lowestCount++;
  };

  addBack = (item) => {
    [].concat(item).forEach(x => {
      this.items[this.count] = x;
      this.count++;
    });
  };

  removeBack = () => {
    if (this.isEmpty()) return undefined;
    delete this.items[this.count - 1];
    this.count--;
  };

  peekFront = () => {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  };

  peekBack = () => {
    if (this.isEmpty()) return undefined;
    return this.items[this.count - 1];
  };

  isEmpty = () => {
    return this.count - this.lowestCount === 0;
  };

  clear = () => {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  };

  size = () => {
    return this.count - this.lowestCount;
  };

  toString = () => {
    if (this.isEmpty()) return '';

    return Object
      .keys(this.items)
      .map(x => this.items[x])
      .join(', ')
  };
}

export default Deque;