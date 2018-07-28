import { defaultEquals } from '../utils';
import TreeNode from '../TreeNode';

class BinarySearchTree {
  constructor(equalsFn = defaultEquals) {
    this.root = null;
    this.equalsFn = equalsFn;
  }

  insert = key => {
    this.root === null
      ? this.root = new TreeNode(key)
      : this.insertNode(this.root, key);

    return this;
  };

  insertNode = (root, key) => {
    // no children nodes exist
    const right = root.right;
    const left = root.left;

    if (key <= root.key) {
      if (left === null) root.left = new TreeNode(key);
      else this.insertNode(root.left, key);
    }
    else {
      if (right === null) root.right = new TreeNode(key);
      else this.insertNode(root.right, key);
    }
  };

  search = e => {
  };
  remove = e => {
  };
  inOrderTraverse = () => {
  };
  postOrderTraverse = () => {
  };
  preOrderTraverse = () => {
  };
  min = () => {
  };
  max = () => {
  };
}

export default BinarySearchTree;
