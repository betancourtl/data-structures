import DoublyLinkedList from './';

describe('DoublyLinkedList', () => {
  it('should push 1 item to a linked list', () => {
    const list = new DoublyLinkedList();
    list.push(1);
    expect(list.head).to.deep.equal({
      element: 1,
      next: null,
      prev: null,
    });
    expect(list.tail).to.equal(list.getElementAt(0));
  });
  it('should push 3 items to a linked list', () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head).to.deep.equal({
      element: 1,
      prev: null,
      next: {
        element: 2,
        prev: list.getElementAt(0),
        next: {
          element: 3,
          prev: list.getElementAt(1),
          next: null,
        },
      },
    });
    expect(list.tail).to.equal(list.getElementAt(2));
  });
});