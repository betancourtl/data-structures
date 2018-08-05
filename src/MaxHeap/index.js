import Heap from '../Heap';

const maxHeapCompareFn = (a, b) => a < b;

class MaxHeap extends Heap {
  constructor(compareFn) {
    super(compareFn || maxHeapCompareFn);
  }
}

export default MaxHeap;
