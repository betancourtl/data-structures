// Stack class using arrays. This provides a very simple implementation but some operations
// end up being O(n).
class Stack {
  constructor() {
    this.items = [];
  }

  push = (x) => {
    Array.isArray(x)
      ? this.items.push(...x)
      : this.items.push(x)
  };

  pop = () => {
    return this.items.pop();
  };

  clear = () => {
    this.items = [];
  };

  isEmpty = () => {
    return this.items.length === 0;
  };

  size = () => {
    return this.items.length;
  };

  peek = () => {
    return this.items[this.items.length - 1];
  };
}

export default Stack;
