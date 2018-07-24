import CircularList from './index';

describe('CircularList', () => {
  it('should create a circular list', () => {
    const list = new CircularList();
    list.push(1);

    expect((list.head.next.next.next).element).to.equal(1);
  });
  it('should create a circular list', () => {
    const list = new CircularList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);

    expect((list.head.next.next.next.next.next).element).to.equal(1);
  });
  it('should remove the tail in a circular list', () => {
    const list = new CircularList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5); // will be removed
    list.removeAt(4);
    expect(list.getElementAt(3).next.element).to.equal(1);
  });
  it('should remove the head in a circular list', () => {
    const list = new CircularList();
    list.push(1);  // will be removed
    list.push(2);
    list.push(3);
    list.push(4);
    list.push(5);
    list.removeAt(0);
   expect(list.getElementAt(3).next.element).to.equal(2);
  });
  it('should remove all elements in a circular list', () => {
    const list = new CircularList();
    list.push(1);  // will be removed
    list.removeAt(0);
   expect(list.head).to.equal(null);
  });
});
