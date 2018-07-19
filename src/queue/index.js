class Queue {
  constructor() {
    this.items = {};
    this.count = 0;
    this.lowestCount = 0;
  }

  enqueue = (item) => {
    [].concat(item).forEach((x) => {
      this.items[this.count] = x;
      this.count++;
    });
  };

  dequeue = () => {
    if (this.isEmpty()) return undefined;
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  };

  clear = () => {
    this.items = {};
    this.lowestCount = 0;
    this.count = 0;
  };

  peek = () => {
    if (this.isEmpty()) return undefined;
    return this.items[this.lowestCount];
  };

  size = () => {
    return this.count - this.lowestCount;
  };

  isEmpty = () => {
    return this.size() === 0;
  };

  toString = () => {
    if (this.isEmpty()) return '';

    return Object
      .keys(this.items)
      .map(x => this.items[x])
      .join(', ')
  };
}

export default Queue;