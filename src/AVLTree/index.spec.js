import AVLTree from './';

describe.only('AVLTree', () => {
  it('should do left left Rotation', () => {
    // Tree is imbalanced when we go from the root node to the left and to the left again
    // The path we took from root was LL so we do a LL rotation.
    // BEFORE
    //
    //         18
    //        /  \
    //      12
    //     /
    //    6
    //
    // AFTER
    //
    //         12
    //        /  \
    //       6   18
    //
    const tree = new AVLTree();
    tree
      .insert(18)
      .insert(12)
      .insert(6);

    const newNode = tree.rotationLL(tree.root);
    expect(newNode.key).to.equal(12);
    expect(newNode.left.key).to.equal(6);
    expect(newNode.right.key).to.equal(18);
  });
  it('should do right right rotation', () => {
    // Tree is imbalanced when we to from the root node to the right and to the right again
    // The path we took from root was RR so we do a RR rotation.
    // BEFORE
    //
    //         18
    //         / \
    //            24
    //             \
    //              32
    //
    // AFTER
    //
    //          24
    //         /  \
    //        18   32
    //
    const tree = new AVLTree();
    tree
      .insert(18)
      .insert(24)
      .insert(32);

    const newNode = tree.rotationRR(tree.root);
    expect(newNode.key).to.equal(24);
    expect(newNode.left.key).to.equal(18);
    expect(newNode.right.key).to.equal(32);
  });
});