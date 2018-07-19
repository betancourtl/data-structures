// Stack class using objects. This implementation ends up being O(1).
class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push = (items) => {
    const arr = [].concat(items);
    arr.forEach(x => {
      this.items[this.count] = x;
      this.count++;
    })
  };

  pop = () => {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  };

  clear = () => {
    this.items = {};
  };

  isEmpty = () => {
    return this.count === 0;
  };

  size = () => {
    return this.count;
  };

  peek = () => {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  };

  toString = () => {
    if (this.isEmpty()) return '';

    return Object
      .keys(this.items)
      .map(x => this.items[x])
      .join(', ')
  };
}

export default Stack;
