import Stack from './';

describe('Stack data structure', () => {
  it('should push to the stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.items).to.deep.equal({ 0: 1 });
  });

  it('should push an array to the stack', () => {
    const stack = new Stack();
    stack.push([1, 2, 3, 4]);
    expect(stack.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
      3: 4,
    });
  });

  it('should pop from the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.pop();
    expect(stack.items).to.deep.equal({ 0: 1 });
  });

  it('should pop from the empty stack', () => {
    const stack = new Stack();
    stack.pop();
    expect(stack.items).to.deep.equal({});
  });

  it('should return the popped item from the empty stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);

    expect(stack.pop()).to.deep.equal(2);
  });

  it('should clear the stack', () => {
    const stack = new Stack();
    Array(5)
      .fill('')
      .map((x, i) => stack.push(i + 1));
    expect(stack.items).to.deep.equal({
      0: 1,
      1: 2,
      2: 3,
      3: 4,
      4: 5,
    });
    stack.clear();
    expect(stack.items).to.deep.equal({});
  });

  it('should return true when empty', () => {
    const stack = new Stack();
    expect(stack.isEmpty()).to.equal(true);
  });

  it('should return false when not empty', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.isEmpty()).to.equal(false);
  });

  it('should return the size', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.size()).to.equal(3);
  });

  it('should return the first item on the stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.peek()).to.equal(3);
  });
});