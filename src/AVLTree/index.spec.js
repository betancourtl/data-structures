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
  it('should do left right rotation', () => {
    // Tree is imbalanced when we to from the root node to the left and to the right
    // The path we took from root was LR so we do the following:
    // RR on 15 because it's the first unbalanced node.
    // LL on 28 because its the first unbalanced node.
    // BEFORE
    //
    //         28
    //         / \
    //        15
    //          \
    //           21
    //
    // AFTER right rotation (We now have the LL problem)
    //
    //         28
    //         / \
    //        21
    //       /  \
    //      15
    //
    // AFTER left rotation
    //
    //         21
    //        /  \
    //      15    28
    //
    const tree = new AVLTree();
    tree
      .insert(28)
      .insert(15)
      .insert(21);

    const newNode = tree.rotationLR(tree.root);
    expect(newNode.key).to.equal(21);
    expect(newNode.left.key).to.equal(15);
    expect(newNode.right.key).to.equal(28);
  });
  it('should do right left rotation', () => {
    // Tree is imbalanced when we go from the root node to the left and to the right
    // The path we took from root was RL so we do the following:
    // LL on 15 because it's the first unbalanced node.
    // RR on 28 because its the first unbalanced node.
    // BEFORE
    //
    //         24
    //         / \
    //            47
    //           /
    //          36
    //
    // AFTER right rotation (We now have the RR problem)
    //
    //         24
    //         / \
    //            36
    //             \
    //             47
    //
    // AFTER left rotation
    //
    //         36
    //        /  \
    //      24    47
    //
    const tree = new AVLTree();
    tree
      .insert(24)
      .insert(47)
      .insert(36);

    const newNode = tree.rotationRL(tree.root);
    expect(newNode.key).to.equal(36);
    expect(newNode.left.key).to.equal(24);
    expect(newNode.right.key).to.equal(47);
  });
});