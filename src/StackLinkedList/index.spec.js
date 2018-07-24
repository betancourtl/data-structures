import StackLinkedList from './';

describe('StackLinkedList', () => {
  it('should push to a stack', () => {
    const stack = new StackLinkedList();
    stack.push(1);
    stack.push(2);
    expect(stack.items.getElementAt(0).element).to.equal(1);
    expect(stack.items.getElementAt(1).element).to.equal(2);
    stack.pop();
    expect(stack.items.getElementAt(1)).to.equal(undefined);
    stack.pop();
    expect(stack.items.getElementAt(0)).to.equal(undefined);
  });
});