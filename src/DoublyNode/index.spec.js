import DoublyNode from './';

describe('DoublyNode', () => {
  it('should create a DoublyNode', () => {
    const dblNode = new DoublyNode(1);
    expect(dblNode).to.deep.equal({
      prev: null,
      next: null,
      element: 1,
    });
  });
}); 