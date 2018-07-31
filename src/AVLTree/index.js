import BinarySearchTree from '../BinarySearchTree';

const factors = {
  UNBALANCED_RIGHT: 1,
  SLIGHTLY_UNBALANCED_RIGHT: 2,
  BALANCED: 3,
  SLIGHTLY_UNBALANCED_LEFT: 4,
  UNBALANCED_LEFT: 5
};

class AVLTree extends BinarySearchTree {
  constructor() {
    super();
  }

  getNodeHeight = (node) => {
    if (node === null) return -1;
    return Math.max(this.getNodeHeight(node.left), this.getNodeHeight(node.right)) + 1;
  };

  getBalanceFactor = (node) => {
    switch (this.getNodeHeight(node.left) - this.getNodeHeight(node.right)) {
      case -2:
        return factors.UNBALANCED_RIGHT;
      case -1:
        return factors.SLIGHTLY_UNBALANCED_RIGHT;
      case 1:
        return factors.SLIGHTLY_UNBALANCED_LEFT;
      case 2:
        return factors.UNBALANCED_LEFT;
      default:
        return factors.BALANCED
    }
  };

  // single rotation to the right
  rotationLL = (root) => {
    // root
    //         18
    //        /  \
    //      12
    //     /
    //    6

    const temp = root.left;
    // temp
    //         12
    //        /  \
    //      6

    root.left = root.right;
    // root
    //         18
    //        /  \
    //      null

    temp.right = root;
    // temp
    //         12
    //        /  \
    //      6     18

    return temp;
  };

  // single rotation to the left
  rotationRR = (root) => {
    // root
    //         18
    //         / \
    //            24
    //             \
    //              32
    const temp = root.right;
    // temp
    //           24
    //             \
    //              32
    root.right = root.left;
    // root
    //         18
    //         / \
    temp.left = root;
    // temp
    //           24
    //          /  \
    //        18    32

    return temp;
  };

  // Double rotation first to the right and then to the left
  rotationLR = (root) => {
    root.left = this.rotationRR(root.left);
    return this.rotationLL(root);
  };

  // Double rotation first to the left and then to the right
  rotationRL = (root) => {
    root.right = this.rotationLL(root.right);
    return this.rotationRR(root);
  };
}

export default AVLTree