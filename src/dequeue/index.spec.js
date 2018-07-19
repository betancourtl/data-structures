import Deque from './';

describe('Deque', () => {
  it('should add items in back of the deque', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  it('should add an array of items in the back of the deque', () => {
    const deque = new Deque();
    deque.addBack([1, 2, 3]);
    expect(deque.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
    });
  });

  it('should remove an array of items from the back of the deque', () => {
    const deque = new Deque();
    deque.addBack([1, 2, 3]);
    expect(deque.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
    });

    deque.removeBack();
    expect(deque.items).to.deep.equal({
      0: 1,
      1: 2,
    })
  });

  it('should add an array of items in the front of the deque', () => {
    const deque = new Deque();
    deque.addFront([1, 2, 3]);
    expect(deque.items).to.deep.equal({
      '-2': 3,
      '-1': 2,
      0: 1,
    });
  });

  it('should remove items from front of the deque', () => {
    const deque = new Deque();
    deque.addBack([1, 2, 3]);
    deque.removeFront();
    expect(deque.items).to.deep.equal({
      1: 2,
      2: 3,
    });
  });

  it('should return true if the deque is empty', () => {
    const deque = new Deque();
    expect(deque.isEmpty()).to.equal(true);
  });

  it('should return false if the deque is not empty', () => {
    const deque = new Deque();
    deque.addBack(1);
    expect(deque.isEmpty()).to.equal(false);
  });

  it('should clear the deque', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    deque.clear();
    expect(deque.items).to.deep.equal({});
    expect(deque.lowestCount).to.equal(0);
    expect(deque.count).to.equal(0);
  });

  it('should return this size of the deque', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.size()).to.equal(2);
  });

  it('should peek the front item', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.peekFront()).to.equal(1);
  });

  it('should peek the back item', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    expect(deque.peekBack()).to.equal(2);
  });

  it('should print the stack', () => {
    const deque = new Deque();
    deque.addBack(1);
    deque.addBack(2);
    deque.addBack(3);
    expect(deque.toString()).to.equal('1, 2, 3');
  });
});