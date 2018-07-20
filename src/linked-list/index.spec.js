import LinkedList from './';

describe.only('LinkedList', () => {
  it('should push to a linked list', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    expect(list.head).to.deep.equal({
      element: 1,
      next: {
        element: 2,
        next: {
          element: 3,
          next: null,
        },
      },
    });
    expect(list.count).to.equal(3);
  });
  it('should insert at head', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.insert(0, 4);

    expect(list.head).to.deep.equal({
      element: 4,
      next: {
        element: 1,
        next: {
          element: 2,
          next: {
            element: 3,
            next: null,
          },
        },
      },
    });
  });
  it('should insert at non-head', () => {
    const list = new LinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.insert(1, 4);

    expect(list.head).to.deep.equal({
      element: 1,
      next: {
        element: 4,
        next: {
          element: 2,
          next: {
            element: 3,
            next: null,
          },
        },
      },
    });
  });
});