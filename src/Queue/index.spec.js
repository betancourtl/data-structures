import Queue from './';

describe('Queue', () => {
  it('should create a queue', () => {
  });

  it('should queue an item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  it('should queue an array of items', () => {
    const queue = new Queue();
    queue.enqueue([1,2 ,3]);
    expect(queue.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  it('should dequeue an item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.dequeue();
    expect(queue.items).to.deep.equal({
      1: 2,
      2: 3,
    });
  });

  it('should return this size of the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.size()).to.equal(3);
  });

  it('should clear the queue', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    queue.clear();
    expect(queue.items).to.deep.equal({});
    expect(queue.lowestCount).to.deep.equal(0);
    expect(queue.count).to.deep.equal(0);
  });

  it('should dequeue an empty queue and return the empty queue', () => {
    const queue = new Queue();
    expect(queue.dequeue()).to.deep.equal(undefined);
  });

  it('should peek at the next base item', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.peek()).to.deep.equal(1)
  });

  it('should return true if the queue is empty', () => {
    const queue = new Queue();
    expect(queue.isEmpty()).to.equal(true);
  });

  it('should print the stack', () => {
    const queue = new Queue();
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);
    expect(queue.toString()).to.equal('1, 2, 3');
  });
});