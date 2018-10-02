import MinHeap from './';

describe.only('MinHeap', () => {
  it('should extract the minimum value of heap', () => {
    const heap = new MinHeap();
    heap
      .insert(1)
      .insert(4)
      .insert(5)
      .insert(7)
      .insert(8)
      .insert(20)
      .insert(0);

    expect(heap.extract()).to.equal(0);
    expect(heap.min).to.equal(1);
  });
});