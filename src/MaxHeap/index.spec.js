import MaxHeap from './';

describe('MaxHeap', () => {
  it('should extract the minimum value of heap', () => {
    const heap = new MaxHeap();
    heap
      .insert(1)
      .insert(4)
      .insert(5)
      .insert(7)
      .insert(8)
      .insert(20)
      .insert(0);

    expect(heap.extract()).to.equal(20);
    expect(heap.min).to.equal(8);
  });
});
