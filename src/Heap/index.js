import { swap } from '../utils'

class Heap {
  constructor(compareFn = (a, b) => a > b) {
    if (typeof compareFn !== 'function') throw 'Heap class requires a comparing function to be passed to the constructor';
    this.compareFn = compareFn;
    this.heap = [];
  }

  get size() {
    return this.heap.length;
  };

  get isEmpty() {
    return this.heap.length === 0;
  }

  get min() {
    return this.isEmpty
      ? undefined
      : this.heap[0];
  }

  getLeftIndex = index => {
    return 2 * index + 1;
  };

  getRightIndex = index => {
    return (2 * index) + 2;
  };

  getParentIndex = index => {
    if (index === 0) return undefined;
    return Math.floor((index - 1) / 2);
  };

  insert = index => {
    if (index !== null) {
      this.heap.push(index);
      const lastHeapIndex = this.heap.length - 1;
      this.siftUp(lastHeapIndex);
    }

    return this;
  };

  // This method swaps the index with it's parent "node" until the parent is less than the index.
  siftUp = index => {
    let parent = this.getParentIndex(index);
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index])) {
      swap(this.heap, parent, index);
      index = parent; // should be a lower index
      parent = this.getParentIndex(index);
    }
  };

  siftDown = index => {
    let element = index;
    // we get the left and right children
    const left = this.getLeftIndex(index);
    const right = this.getRightIndex(index);
    const size = this.size;

    // the left children is less than the array length and
    // the element is bigger than the left children then
    // the index becomes the children
    if (left < size && this.compareFn(this.heap[element], this.heap[left])) element = left;
    // the right children is less than the array length and
    // the element is bigger than the right children then
    // the index becomes the children
    if (left < size && this.compareFn(this.heap[element], this.heap[right])) element = right;

    // when the elements are not the same we swap them out and recursively
    // apply the same function
    if (index !== element) {
      swap(this.heap, index, element);
      this.siftDown(element);
    }
  };

  extract = () => {
    if (this.isEmpty) return undefined;
    if (this.size === 1) return this.heap.shift();
    const temp = this.heap.shift();
    this.siftDown(0);
    return temp;
  };
}

export default Heap;
