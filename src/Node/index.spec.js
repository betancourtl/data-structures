import Node from './';

describe('Node', () => {
  it('should create a node', () => {
    const node = new Node(1);
    expect(node.next).to.equal(null);
    expect(node.element).to.equal(1)
  });
});