import BinarySearchTree from './';

describe.only('BinarySearchTree', () => {
  it('should create a Tree', () => {
    const tree = new BinarySearchTree();
    expect(tree instanceof BinarySearchTree).to.equal(true);
  });

  it('should insert a right node', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(10);
    expect(tree.root.right.key).to.equal(10);
  });

  it('should insert a left node', () => {
    const tree = new BinarySearchTree();
    tree.insert(5);
    tree.insert(10);
    tree.insert(4);
    tree.insert(15);
    console.log(tree.root);
  });
});
