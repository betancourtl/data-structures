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
    tree
      .insert(5)
      .insert(10)
      .insert(4)
      .insert(3)
      .insert(15);
    expect(tree.root.key).to.equal(5);
    expect(tree.root.left.key).to.equal(4);
    expect(tree.root.left.left.key).to.equal(3);
    expect(tree.root.right.key).to.equal(10);
    expect(tree.root.right.right.key).to.equal(15);
  });

  it('inOrderTraverse', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(8);

    let items = [];
    tree.inOrderTraverse(x => items.push(x.key));
    expect(items).to.deep.equal([4, 5, 6, 8]);
  });

  it('preOrderTraverse', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(8);

    let items = [];
    tree.preOrderTraverse(x => items.push(x.key));
   expect(items).to.deep.equal([5, 4, 6, 8]);
  });

  it('postOrderTraverse', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(8);

    let items = [];
    tree.postOrderTraverse(x => items.push(x.key));
   expect(items).to.deep.equal([4, 8, 6, 5]);
  });

  it('min', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(1)
      .insert(8);

    const min = tree.min();
    expect(min).to.equal(1);
  });

  it('max', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(1)
      .insert(8);

    const min = tree.max();
    expect(min).to.equal(8);
  });

  it('search node', () => {
    const tree = new BinarySearchTree();
    tree
      .insert(0)
      .insert(5)
      .insert(6)
      .insert(4)
      .insert(1)
      .insert(8)
      .insert(10);

    expect( tree.search(0)).to.equal(true);
    expect( tree.search(11)).to.equal(false);
  });
});
